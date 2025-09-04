
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { Dish, Ingredient, Score } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateDishImage = async (dish: Dish, ingredients: Ingredient[]): Promise<string> => {
    const ingredientNames = ingredients.map(i => i.nameKey.replace('ing_', '').replace('_name', '').replace('_', ' ')).join(', ');
    const dishName = dish.nameKey.replace('dish_', '').replace('_name', '').replace('_', ' ');

    const prompt = `A photorealistic image of a culinary creation. The dish consists of ${ingredientNames}. It is beautifully plated on a ${dishName}. Studio lighting, high detail, food photography.`;

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '1:1',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            return response.generatedImages[0].image.imageBytes;
        } else {
            throw new Error("Image generation failed, no images returned.");
        }
    } catch (error) {
        console.error("Error generating dish image:", error);
        // Return a placeholder image on error
        return "iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAQAAADTdEb+AAAA4ElEQVR42u3OMQEAAAgDIJfc6BpfqgMy6gEBAYEAAQGBAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIHNCwYAAfPh2asAAAAASUVORK5CYII=";
    }
};


export const scoreDish = async (dish: Dish, ingredients: Ingredient[], language: string): Promise<Score> => {
  const ingredientNames = ingredients.map(i => i.nameKey.replace('ing_', '').replace('_name', '').replace('_', ' ')).join(', ');
  const dishName = dish.nameKey.replace('dish_', '').replace('_name', '').replace('_', ' ');

  const prompt = `As a world-class food critic, evaluate a dish composed of the following ingredients: ${ingredientNames}, served on a ${dishName}. 
  Provide a score out of 100 based on three criteria:
  1.  **Diversity (0-60 points):** How well do the ingredients (carbs, protein, vegetables, sauce) complement each other? Are there interesting flavor and texture contrasts?
  2.  **Presentation (0-20 points):** Based on the ingredients, how visually appealing could this dish be?
  3.  **Compatibility (0-20 points):** How suitable is the ${dishName} for serving ${ingredientNames}?
  
  Please provide your response in ${language} language. Respond ONLY with a JSON object.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diversity: {
              type: Type.INTEGER,
              description: "Score for diversity (0-60)"
            },
            presentation: {
              type: Type.INTEGER,
              description: "Score for presentation (0-20)"
            },
            compatibility: {
              type: Type.INTEGER,
              description: "Score for compatibility with the dish (0-20)"
            },
            total: {
                type: Type.INTEGER,
                description: "Sum of all scores (0-100)"
            }
          },
          required: ["diversity", "presentation", "compatibility", "total"]
        },
      },
    });

    const jsonText = response.text.trim();
    const scoreData = JSON.parse(jsonText);

    // Basic validation
    if (
      typeof scoreData.diversity === 'number' &&
      typeof scoreData.presentation === 'number' &&
      typeof scoreData.compatibility === 'number'
    ) {
      const total = scoreData.diversity + scoreData.presentation + scoreData.compatibility;
      return { ...scoreData, total: Math.min(100, Math.max(0, total)) };
    } else {
        throw new Error("Invalid score format from API");
    }
    
  } catch (error) {
    console.error("Error scoring dish:", error);
    // Return a random score on error to allow the game to continue
    const diversity = Math.floor(Math.random() * 61);
    const presentation = Math.floor(Math.random() * 21);
    const compatibility = Math.floor(Math.random() * 21);
    return {
      diversity,
      presentation,
      compatibility,
      total: Math.min(100, diversity + presentation + compatibility),
    };
  }
};
