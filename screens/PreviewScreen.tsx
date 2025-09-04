
import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useLocalization } from '../hooks/useLocalization';
import { Screen } from '../types';
import { generateDishImage } from '../services/geminiService';
import LoadingSpinner from '../components/LoadingSpinner';

const PreviewScreen: React.FC = () => {
  const { setScreen, selectedDish, selectedIngredients, resetSelections } = useGame();
  const { t } = useLocalization();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedDish || selectedIngredients.length < 2) {
      resetSelections();
      setScreen(Screen.HOME);
      return;
    }

    const fetchImage = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const base64Image = await generateDishImage(selectedDish, selectedIngredients);
        setImageUrl(`data:image/jpeg;base64,${base64Image}`);
      } catch (err) {
        setError("Failed to generate image. Please try again.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">{t('previewScreen.title')}</h2>
      
      <div className="w-full max-w-md mx-auto aspect-square bg-gray-200 rounded-lg shadow-lg flex items-center justify-center overflow-hidden my-6">
        {isLoading && <LoadingSpinner message={t('generatingImage')} />}
        {error && <p className="text-red-500 p-4">{error}</p>}
        {imageUrl && !isLoading && (
          <img src={imageUrl} alt="Generated Dish" className="w-full h-full object-cover animate-fade-in" />
        )}
      </div>

      {!isLoading && !error && (
        <>
            <p className="text-gray-600 mb-6">{t('previewScreen.hint')}</p>
            <button
                onClick={() => setScreen(Screen.RESULT)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-transform transform hover:scale-105 shadow-lg"
            >
                {t('completeDish')}
            </button>
        </>
      )}

       <button
        onClick={() => setScreen(Screen.INGREDIENT_SELECTION)}
        className="mt-4 text-gray-500 hover:text-gray-800 transition-colors"
      >
        &larr; {t('back')}
      </button>

    </div>
  );
};

export default PreviewScreen;
