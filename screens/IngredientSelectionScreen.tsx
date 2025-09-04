
import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { useLocalization } from '../hooks/useLocalization';
import { Screen, IngredientCategory, Ingredient } from '../types';
import { ingredients } from '../constants/gameData';

const IngredientSelectionScreen: React.FC = () => {
    const { setScreen, selectedDish, selectedIngredients, toggleIngredient } = useGame();
    const { t } = useLocalization();
    const [activeTab, setActiveTab] = useState<IngredientCategory>(IngredientCategory.CARBS);
    const [toast, setToast] = useState('');

    if (!selectedDish) {
        setScreen(Screen.DISH_SELECTION);
        return null;
    }

    const handlePreview = () => {
        if (selectedIngredients.length >= 2) {
            setScreen(Screen.PREVIEW);
        } else {
            setToast(t('toasts.ingredientsRequired'));
            setTimeout(() => setToast(''), 2500);
        }
    };

    const isSelected = (ingredient: Ingredient) => {
        return selectedIngredients.some(i => i.id === ingredient.id);
    };

    const filteredIngredients = ingredients.filter(i => i.category === activeTab);
    const categories = Object.values(IngredientCategory);

    return (
        <div className="pb-32 animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-2">{t('ingredientSelect.title')}</h2>
            <p className="text-gray-600 text-center mb-4">{t('ingredientSelect.maxIngredients')}</p>
            
            <div className="flex justify-center border-b mb-4">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-4 py-2 text-sm sm:text-base font-semibold transition-colors ${activeTab === cat ? 'border-b-2 border-orange-500 text-orange-600' : 'text-gray-500'}`}
                    >
                        {t(`ingredientSelect.categories.${cat}`)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredIngredients.map(ing => (
                    <div
                        key={ing.id}
                        onClick={() => toggleIngredient(ing)}
                        className={`cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 border-4 ${isSelected(ing) ? 'border-orange-500 scale-105' : 'border-transparent'}`}
                    >
                        <img src={ing.imageUrl} alt={t(ing.nameKey)} className="w-full h-24 sm:h-32 object-cover" />
                        <div className="p-2 bg-white text-center">
                            <h3 className="font-semibold text-xs sm:text-sm">{t(ing.nameKey)}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t animate-slide-in-bottom">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                                {selectedIngredients.length > 0 ? selectedIngredients.map(ing => (
                                    <span key={ing.id} className="flex-shrink-0 bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">{t(ing.nameKey)}</span>
                                )) : <span className="text-gray-500 text-sm">{t('ingredientSelect.maxIngredients')}</span>}
                            </div>
                        </div>
                        <button
                            onClick={handlePreview}
                            disabled={selectedIngredients.length < 2}
                            className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {t('preview')}
                        </button>
                    </div>
                </div>
            </div>
            
             {toast && (
                <div className="fixed bottom-28 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
                    {toast}
                </div>
            )}
        </div>
    );
};

export default IngredientSelectionScreen;
