
import React from 'react';
import { useGame } from '../context/GameContext';
import { useLocalization } from '../hooks/useLocalization';
import { Screen } from '../types';

const HomeScreen: React.FC = () => {
    const { setScreen, bestScore, resetSelections } = useGame();
    const { t } = useLocalization();

    const handleStart = () => {
        resetSelections();
        setScreen(Screen.DISH_SELECTION);
    };

    return (
        <div className="text-center flex flex-col items-center justify-center pt-10 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{t('home.title')}</h2>
                <p className="text-gray-600 mb-8">{t('home.description')}</p>
                <button
                    onClick={handleStart}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-transform transform hover:scale-105 shadow-lg"
                >
                    {t('home.cta')}
                </button>
                {bestScore > 0 && (
                    <div className="mt-10 bg-orange-100 p-4 rounded-lg">
                        <p className="text-lg font-semibold text-orange-800">{t('home.bestScore')}: <span className="font-bold text-2xl">{bestScore}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeScreen;
