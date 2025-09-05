import { Dish, Ingredient, IngredientCategory, Badge, Ranking } from '../types';

export const dishes: Dish[] = [
  { id: 'd1', nameKey: 'dish_white_plate_name', imageUrl: '/white-plate.jpg', tagsKey: 'dish_white_plate_tags' },
  { id: 'd2', nameKey: 'dish_blue_bowl_name', imageUrl: '/blue-bowl.jpg', tagsKey: 'dish_blue_bowl_tags' },
  { id: 'd3', nameKey: 'dish_wooden_board_name', imageUrl: '/wooden-board.jpg', tagsKey: 'dish_wooden_board_tags' },
  { id: 'd4', nameKey: 'dish_black_slate_name', imageUrl: '/black-slate.jpg', tagsKey: 'dish_black_slate_tags' },
  { id: 'd5', nameKey: 'dish_glass_cup_name', imageUrl: '/glass-cup.jpg', tagsKey: 'dish_glass_cup_tags' },
  { id: 'd6', nameKey: 'dish_patterned_bowl_name', imageUrl: '/patterned-bowl.jpg', tagsKey: 'dish_patterned_bowl_tags' },
];

export const ingredients: Ingredient[] = [
  // Carbs
  { id: 'i1', nameKey: 'ing_rice_name', imageUrl: '/rice.jpg', category: IngredientCategory.CARBS },
  { id: 'i2', nameKey: 'ing_pasta_name', imageUrl: '/pasta.jpg', category: IngredientCategory.CARBS },
  { id: 'i3', nameKey: 'ing_bread_name', imageUrl: '/bread.jpg', category: IngredientCategory.CARBS },
  { id: 'i4', nameKey: 'ing_potato_name', imageUrl: '/potato.jpg', category: IngredientCategory.CARBS },
  // Protein
  { id: 'i5', nameKey: 'ing_steak_name', imageUrl: '/steak.jpg', category: IngredientCategory.PROTEIN },
  { id: 'i6', nameKey: 'ing_chicken_name', imageUrl: '/chicken.jpg', category: IngredientCategory.PROTEIN },
  { id: 'i7', nameKey: 'ing_salmon_name', imageUrl: '/salmon.jpg', category: IngredientCategory.PROTEIN },
  { id: 'i8', nameKey: 'ing_tofu_name', imageUrl: '/tofu.jpg', category: IngredientCategory.PROTEIN },
  // Vegetables
  { id: 'i9', nameKey: 'ing_broccoli_name', imageUrl: '/broccoli.jpg', category: IngredientCategory.VEGETABLES },
  { id: 'i10', nameKey: 'ing_tomato_name', imageUrl: '/tomato.jpg', category: IngredientCategory.VEGETABLES },
  { id: 'i11', nameKey: 'ing_salad_name', imageUrl: '/salad.jpg', category: IngredientCategory.VEGETABLES },
  { id: 'i12', nameKey: 'ing_carrot_name', imageUrl: '/carrot.jpg', category: IngredientCategory.VEGETABLES },
  // Sauce
  { id: 'i13', nameKey: 'ing_teriyaki_name', imageUrl: '/teriyaki.jpg', category: IngredientCategory.SAUCE },
  { id: 'i14', nameKey: 'ing_tomato_sauce_name', imageUrl: '/tomato-sauce.jpg', category: IngredientCategory.SAUCE },
  { id: 'i15', nameKey: 'ing_cream_sauce_name', imageUrl: '/cream-sauce.jpg', category: IngredientCategory.SAUCE },
  { id: 'i16', nameKey: 'ing_vinaigrette_name', imageUrl: '/vinaigrette.jpg', category: IngredientCategory.SAUCE },
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