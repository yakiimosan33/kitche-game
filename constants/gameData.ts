import { Dish, Ingredient, IngredientCategory, Badge, Ranking } from '../types';

export const dishes: Dish[] = [
  { id: 'd1', nameKey: 'dish_white_plate_name', imageUrl: 'https://images.unsplash.com/photo-1585509439243-3904a64871e8?w=300&q=80', tagsKey: 'dish_white_plate_tags' },
  { id: 'd2', nameKey: 'dish_blue_bowl_name', imageUrl: 'https://images.unsplash.com/photo-1553361286-6338b4cde2a8?w=300&q=80', tagsKey: 'dish_blue_bowl_tags' },
  { id: 'd3', nameKey: 'dish_wooden_board_name', imageUrl: 'https://images.unsplash.com/photo-1549925243-750a957a2298?w=300&q=80', tagsKey: 'dish_wooden_board_tags' },
  { id: 'd4', nameKey: 'dish_black_slate_name', imageUrl: 'https://images.unsplash.com/photo-1582571584222-229213155938?w=300&q=80', tagsKey: 'dish_black_slate_tags' },
  { id: 'd5', nameKey: 'dish_glass_cup_name', imageUrl: 'https://images.unsplash.com/photo-1621252115201-99881a7b1812?w=300&q=80', tagsKey: 'dish_glass_cup_tags' },
  { id: 'd6', nameKey: 'dish_patterned_bowl_name', imageUrl: 'https://images.unsplash.com/photo-1605445354727-8f85f1cf856b?w=300&q=80', tagsKey: 'dish_patterned_bowl_tags' },
];

export const ingredients: Ingredient[] = [
  // Carbs
  { id: 'i1', nameKey: 'ing_rice_name', imageUrl: 'https://images.unsplash.com/photo-1599319001185-f28a2a86b1e6?w=200&q=80', category: IngredientCategory.CARBS },
  { id: 'i2', nameKey: 'ing_pasta_name', imageUrl: 'https://images.unsplash.com/photo-1598866594240-a924a42b75a1?w=200&q=80', category: IngredientCategory.CARBS },
  { id: 'i3', nameKey: 'ing_bread_name', imageUrl: 'https://images.unsplash.com/photo-1534620853518-038b3b3519c7?w=200&q=80', category: IngredientCategory.CARBS },
  { id: 'i4', nameKey: 'ing_potato_name', imageUrl: 'https://images.unsplash.com/photo-1630424564593-9080ef61a43a?w=200&q=80', category: IngredientCategory.CARBS },
  // Protein
  { id: 'i5', nameKey: 'ing_steak_name', imageUrl: 'https://images.unsplash.com/photo-1551028150-64b9f398f67b?w=200&q=80', category: IngredientCategory.PROTEIN },
  { id: 'i6', nameKey: 'ing_chicken_name', imageUrl: 'https://images.unsplash.com/photo-1594041682984-755d491f2409?w=200&q=80', category: IngredientCategory.PROTEIN },
  { id: 'i7', nameKey: 'ing_salmon_name', imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&q=80', category: IngredientCategory.PROTEIN },
  { id: 'i8', nameKey: 'ing_tofu_name', imageUrl: 'https://images.unsplash.com/photo-1588143285115-46e01a8b753f?w=200&q=80', category: IngredientCategory.PROTEIN },
  // Vegetables
  { id: 'i9', nameKey: 'ing_broccoli_name', imageUrl: 'https://images.unsplash.com/photo-1628779234079-2c09297b872b?w=200&q=80', category: IngredientCategory.VEGETABLES },
  { id: 'i10', nameKey: 'ing_tomato_name', imageUrl: 'https://images.unsplash.com/photo-1558831093-9515a454e3d3?w=200&q=80', category: IngredientCategory.VEGETABLES },
  { id: 'i11', nameKey: 'ing_salad_name', imageUrl: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&q=80', category: IngredientCategory.VEGETABLES },
  { id: 'i12', nameKey: 'ing_carrot_name', imageUrl: 'https://images.unsplash.com/photo-1590499103233-14e3b526a6a2?w=200&q=80', category: IngredientCategory.VEGETABLES },
  // Sauce
  { id: 'i13', nameKey: 'ing_teriyaki_name', imageUrl: 'https://images.unsplash.com/photo-1593952723326-0570b5c104c8?w=200&q=80', category: IngredientCategory.SAUCE },
  { id: 'i14', nameKey: 'ing_tomato_sauce_name', imageUrl: 'https://images.unsplash.com/photo-1598278020948-53b811816e81?w=200&q=80', category: IngredientCategory.SAUCE },
  { id: 'i15', nameKey: 'ing_cream_sauce_name', imageUrl: 'https://images.unsplash.com/photo-1607599026217-098b6713e7ec?w=200&q=80', category: IngredientCategory.SAUCE },
  { id: 'i16', nameKey: 'ing_vinaigrette_name', imageUrl: 'https://images.unsplash.com/photo-1548162464-8302f30b35c0?w=200&q=80', category: IngredientCategory.SAUCE },
];

export const badges: Badge[] = [
    { nameKey: 'badge_master_name', descriptionKey: 'badge_master_desc', icon: '🏆' },
    { nameKey: 'badge_sense_name', descriptionKey: 'badge_sense_desc', icon: '🎨' },
    { nameKey: 'badge_apprentice_name', descriptionKey: 'badge_apprentice_desc', icon: '🧑‍🍳' },
    { nameKey: 'badge_beginner_name', descriptionKey: 'badge_beginner_desc', icon: '🌱' },
];

export const getBadgeForScore = (score: number): Badge => {
    if (score >= 80) return badges[0];
    if (score >= 60) return badges[1];
    if (score >= 40) return badges[2];
    return badges[3];
};

export const mockRankings: Ranking[] = [];