
import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { useLocalization } from '../hooks/useLocalization';
import { Screen } from '../types';
import { dishes } from '../constants/gameData';

const DishSelectionScreen: React.FC = () => {
    const { setScreen, selectDish, selectedDish } = useGame();
    const { t } = useLocalization();
    const [toast, setToast] = useState('');

    const handleNext = () => {
        if (selectedDish) {
            setScreen(Screen.INGREDIENT_SELECTION);
        } else {
            setToast(t('toasts.dishRequired'));
            setTimeout(() => setToast(''), 2500);
        }
    };

    return (
        <div className="animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-6">{t('dishSelect.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {dishes.map(dish => (
                    <div
                        key={dish.id}
                        onClick={() => selectDish(dish)}
                        className={`cursor-pointer rounded-lg overflow-hidden shadow-lg transition-all transform hover:scale-105 border-4 ${selectedDish?.id === dish.id ? 'border-orange-500 scale-105' : 'border-transparent'}`}
                    >
                        <img src={dish.imageUrl} alt={t(dish.nameKey)} className="w-full h-32 sm:h-48 object-cover" />
                        <div className="p-3 bg-white">
                            <h3 className="font-bold text-sm sm:text-base">{t(dish.nameKey)}</h3>
                            <p className="text-xs sm:text-sm text-gray-500">{t(dish.tagsKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-2xl-top flex items-center justify-center animate-slide-in-bottom">
                 <button
                    onClick={handleNext}
                    className="w-full max-w-md bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
                    >
                    {t('next')}
                </button>
            </div>
             {toast && (
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
                    {toast}
                </div>
            )}
        </div>
    );
};

export default DishSelectionScreen;
