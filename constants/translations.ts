
import { Language } from '../types';

type Translation = {
  [key: string]: string | Translation;
};

export const translations: { [key in Language]: Translation } = {
  [Language.EN]: {
    // General
    appName: "Simulated Kitchen",
    next: "Next",
    back: "Back",
    preview: "Preview",
    completeDish: "Complete the Dish",
    tryAgain: "Try Again",
    viewRankings: "View Rankings",
    share: "Share",
    loading: "Loading...",
    generatingImage: "Generating your masterpiece...",
    calculatingScore: "Our chef is tasting your dish...",

    // Screens
    langSelect: {
      title: "Select Your Language",
      subtitle: "You can change this later.",
    },
    home: {
      title: "Welcome to the Simulated Kitchen!",
      description: "Create your culinary masterpiece and get it scored.",
      cta: "Start Cooking",
      bestScore: "Your Best Score",
    },
    dishSelect: {
      title: "1. Choose Your Plate",
    },
    ingredientSelect: {
      title: "2. Add Ingredients",
      maxIngredients: "Select up to 4 ingredients.",
      categories: {
        carbs: "Carbs",
        protein: "Protein",
        vegetables: "Vegetables",
        sauce: "Sauce",
      }
    },
    previewScreen: {
      title: "3. Preview Your Creation",
      hint: "Looks delicious! Ready to get it scored?",
    },
    result: {
      title: "Your Result!",
      totalScore: "Total Score",
      breakdown: "Score Breakdown",
      diversity: "Diversity",
      presentation: "Presentation",
      compatibility: "Compatibility",
      reward: "You've earned a badge!",
    },
    ranking: {
      title: "Today's Top Chefs",
      rank: "Rank",
      score: "Score",
      combination: "Combination",
      date: "Date",
      yourScore: "Your Score",
    },

    // Toasts
    toasts: {
      dishRequired: "Please select a plate first.",
      ingredientsRequired: "Please add at least 2 ingredients.",
    },

    // Data - Dishes
    dish_white_plate_name: "Simple White Plate",
    dish_white_plate_tags: "Modern, Versatile",
    dish_blue_bowl_name: "Blue Ceramic Bowl",
    dish_blue_bowl_tags: "Rustic, Deep",
    dish_wooden_board_name: "Wooden Serving Board",
    dish_wooden_board_tags: "Natural, Appetizers",
    dish_black_slate_name: "Black Slate Plate",
    dish_black_slate_tags: "Elegant, Stylish",
    dish_glass_cup_name: "Glass Cup",
    dish_glass_cup_tags: "Transparent, Drinks",
    dish_patterned_bowl_name: "Patterned Bowl",
    dish_patterned_bowl_tags: "Colorful, Ethnic",


    // Data - Ingredients
    ing_rice_name: "Steamed Rice",
    ing_pasta_name: "Pasta",
    ing_bread_name: "Artisan Bread",
    ing_potato_name: "Roasted Potatoes",
    ing_steak_name: "Grilled Steak",
    ing_chicken_name: "Roast Chicken",
    ing_salmon_name: "Seared Salmon",
    ing_tofu_name: "Firm Tofu",
    ing_broccoli_name: "Steamed Broccoli",
    ing_tomato_name: "Cherry Tomatoes",
    ing_salad_name: "Mixed Greens",
    ing_carrot_name: "Glazed Carrots",
    ing_teriyaki_name: "Teriyaki Sauce",
    ing_tomato_sauce_name: "Tomato Sauce",
    ing_cream_sauce_name: "Cream Sauce",
    ing_vinaigrette_name: "Vinaigrette",

    // Data - Badges
    badge_master_name: "Master Plating",
    badge_master_desc: "An impeccable dish! (Score 80-100)",
    badge_sense_name: "Nice Sense",
    badge_sense_desc: "You have a good eye! (Score 60-79)",
    badge_apprentice_name: "Apprentice",
    badge_apprentice_desc: "A good start! (Score 40-59)",
    badge_beginner_name: "Beginner",
    badge_beginner_desc: "Keep on trying! (Score 0-39)",
  },
  [Language.JA]: {
    appName: "シミュレーテッドキッチン",
    next: "次へ",
    back: "戻る",
    preview: "プレビュー",
    completeDish: "料理を完成させる",
    tryAgain: "もう一度作る",
    viewRankings: "ランキングを見る",
    share: "共有する",
    loading: "読み込み中...",
    generatingImage: "傑作を生成中...",
    calculatingScore: "シェフがあなたの料理を味わっています...",

    langSelect: {
      title: "言語を選択してください",
      subtitle: "言語は後で変更できます。",
    },
    home: {
      title: "シミュレーテッドキッチンへようこそ！",
      description: "あなただけの料理を作ってスコアを競いましょう。",
      cta: "料理をはじめる",
      bestScore: "ベストスコア",
    },
    dishSelect: {
      title: "1. 食器を選ぶ",
    },
    ingredientSelect: {
      title: "2. 食材を追加する",
      maxIngredients: "最大4つの食材を選択してください。",
      categories: {
        carbs: "主食",
        protein: "たんぱく質",
        vegetables: "野菜",
        sauce: "ソース",
      }
    },
    previewScreen: {
      title: "3. プレビュー",
      hint: "美味しそう！スコアリングに進みますか？",
    },
    result: {
      title: "結果発表！",
      totalScore: "合計スコア",
      breakdown: "スコア内訳",
      diversity: "多様性",
      presentation: "見た目",
      compatibility: "器との相性",
      reward: "バッジを獲得しました！",
    },
    ranking: {
      title: "今日のトップシェフ",
      rank: "順位",
      score: "スコア",
      combination: "組み合わせ",
      date: "日付",
      yourScore: "あなたのスコア",
    },
    
    toasts: {
      dishRequired: "最初に食器を選んでください。",
      ingredientsRequired: "食材を2つ以上追加してください。",
    },

    dish_white_plate_name: "シンプルな白い皿",
    dish_white_plate_tags: "モダン, 万能",
    dish_blue_bowl_name: "青い陶器のボウル",
    dish_blue_bowl_tags: "素朴, 深め",
    dish_wooden_board_name: "木製のサービングボード",
    dish_wooden_board_tags: "自然, 前菜",
    dish_black_slate_name: "黒いスレートプレート",
    dish_black_slate_tags: "エレガント, スタイリッシュ",
    dish_glass_cup_name: "ガラスのカップ",
    dish_glass_cup_tags: "透明, ドリンク",
    dish_patterned_bowl_name: "柄物のボウル",
    dish_patterned_bowl_tags: "カラフル, エスニック",
    
    ing_rice_name: "ご飯",
    ing_pasta_name: "パスタ",
    ing_bread_name: "パン",
    ing_potato_name: "ローストポテト",
    ing_steak_name: "グリルステーキ",
    ing_chicken_name: "ローストチキン",
    ing_salmon_name: "サーモンのソテー",
    ing_tofu_name: "豆腐",
    ing_broccoli_name: "ブロッコリー",
    ing_tomato_name: "ミニトマト",
    ing_salad_name: "ミックスグリーン",
    ing_carrot_name: "人参のグラッセ",
    ing_teriyaki_name: "照り焼きソース",
    ing_tomato_sauce_name: "トマトソース",
    ing_cream_sauce_name: "クリームソース",
    ing_vinaigrette_name: "ヴィネグレット",

    badge_master_name: "匠の盛り付け",
    badge_master_desc: "非の打ち所がない一皿！ (スコア 80-100)",
    badge_sense_name: "センスあり",
    badge_sense_desc: "良いセンスの持ち主！ (スコア 60-79)",
    badge_apprentice_name: "見習い",
    badge_apprentice_desc: "良いスタートです！ (スコア 40-59)",
    badge_beginner_name: "ビギナー",
    badge_beginner_desc: "挑戦を続けよう！ (スコア 0-39)",
  },
  [Language.ZH]: {
    appName: "模拟厨房",
    next: "下一步",
    back: "返回",
    preview: "预览",
    completeDish: "完成菜品",
    tryAgain: "再试一次",
    viewRankings: "查看排名",
    share: "分享",
    loading: "加载中...",
    generatingImage: "正在生成您的杰作...",
    calculatingScore: "我们的厨师正在品尝您的菜肴...",
    
    langSelect: {
      title: "请选择您的语言",
      subtitle: "您可以稍后更改。",
    },
    home: {
      title: "欢迎来到模拟厨房！",
      description: "创作您的烹饪杰作并获得评分。",
      cta: "开始烹饪",
      bestScore: "您的最高分",
    },
    dishSelect: {
      title: "1. 选择您的餐盘",
    },
    ingredientSelect: {
      title: "2. 添加食材",
      maxIngredients: "最多选择4种食材。",
      categories: {
        carbs: "主食",
        protein: "蛋白质",
        vegetables: "蔬菜",
        sauce: "酱料",
      }
    },
    previewScreen: {
      title: "3. 预览您的作品",
      hint: "看起来很美味！准备好评分了吗？",
    },
    result: {
      title: "您的结果！",
      totalScore: "总分",
      breakdown: "分数明细",
      diversity: "多样性",
      presentation: "外观",
      compatibility: "与餐具的搭配",
      reward: "您获得了一个徽章！",
    },
    ranking: {
      title: "今日顶级厨师",
      rank: "排名",
      score: "分数",
      combination: "组合",
      date: "日期",
      yourScore: "您的分数",
    },

    toasts: {
      dishRequired: "请先选择一个餐盘。",
      ingredientsRequired: "请至少添加2种食材。",
    },
    
    dish_white_plate_name: "简约白盘",
    dish_white_plate_tags: "现代, 百搭",
    dish_blue_bowl_name: "蓝色陶瓷碗",
    dish_blue_bowl_tags: "质朴, 深口",
    dish_wooden_board_name: "木制服务板",
    dish_wooden_board_tags: "自然, 开胃菜",
    dish_black_slate_name: "黑色石板",
    dish_black_slate_tags: "优雅, 时尚",
    dish_glass_cup_name: "玻璃杯",
    dish_glass_cup_tags: "透明, 饮料",
    dish_patterned_bowl_name: "花纹碗",
    dish_patterned_bowl_tags: "多彩, 民族风",
    
    ing_rice_name: "米饭",
    ing_pasta_name: "意大利面",
    ing_bread_name: "手工面包",
    ing_potato_name: "烤土豆",
    ing_steak_name: "烤牛排",
    ing_chicken_name: "烤鸡",
    ing_salmon_name: "煎三文鱼",
    ing_tofu_name: "豆腐",
    ing_broccoli_name: "蒸西兰花",
    ing_tomato_name: "小番茄",
    ing_salad_name: "混合蔬菜沙拉",
    ing_carrot_name: "蜜汁胡萝卜",
    ing_teriyaki_name: "照烧酱",
    ing_tomato_sauce_name: "番茄酱",
    ing_cream_sauce_name: "奶油酱",
    ing_vinaigrette_name: "油醋汁",

    badge_master_name: "摆盘大师",
    badge_master_desc: "无可挑剔的菜肴！ (分数 80-100)",
    badge_sense_name: "不错的品味",
    badge_sense_desc: "你很有眼光！ (分数 60-79)",
    badge_apprentice_name: "学徒",
    badge_apprentice_desc: "一个好的开始！ (分数 40-59)",
    badge_beginner_name: "初学者",
    badge_beginner_desc: "继续努力！ (分数 0-39)",
  },
};
