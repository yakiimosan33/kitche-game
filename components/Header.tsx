
import React from 'react';
import { useGame } from '../context/GameContext';
import { useLocalization } from '../hooks/useLocalization';
import LanguageSwitcher from './LanguageSwitcher';
import { Screen } from '../types';

const Header: React.FC = () => {
    const { setScreen } = useGame();
    const { t } = useLocalization();

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
            <h1 
                className="text-xl md:text-2xl font-bold text-orange-600 cursor-pointer"
                onClick={() => setScreen(Screen.HOME)}
            >
                🍳 {t('appName')}
            </h1>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => setScreen(Screen.RANKING)}
                    className="hidden sm:inline-block text-gray-600 hover:text-orange-600 transition-colors font-semibold"
                >
                    🏆 {t('viewRankings')}
                </button>
                <LanguageSwitcher />
            </div>
        </header>
    );
};

export default Header;
