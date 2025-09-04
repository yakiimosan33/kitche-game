
export enum Language {
  JA = 'ja',
  EN = 'en',
  ZH = 'zh',
}

export enum Screen {
  LANGUAGE_SELECTION = 'language_selection',
  HOME = 'home',
  DISH_SELECTION = 'dish_selection',
  INGREDIENT_SELECTION = 'ingredient_selection',
  PREVIEW = 'preview',
  RESULT = 'result',
  RANKING = 'ranking',
}

export interface Dish {
  id: string;
  nameKey: string;
  imageUrl: string;
  tagsKey: string;
}

export enum IngredientCategory {
  CARBS = 'carbs',
  PROTEIN = 'protein',
  VEGETABLES = 'vegetables',
  SAUCE = 'sauce',
}

export interface Ingredient {
  id: string;
  nameKey: string;
  imageUrl: string;
  category: IngredientCategory;
}

export interface Score {
  diversity: number;
  presentation: number;
  compatibility: number;
  total: number;
}

export interface Badge {
  nameKey: string;
  descriptionKey: string;
  icon: string;
}

export interface Ranking {
  rank: number;
  score: number;
  combinationName: string;
  date: string;
}
