
import React from 'react';
import { useGame } from '../context/GameContext';
import { useLocalization } from '../hooks/useLocalization';
import { Screen } from '../types';

const RankingScreen: React.FC = () => {
    const { rankings, lastScore, setScreen } = useGame();
    const { t } = useLocalization();

    const userLastRank = rankings.find(r => r.combinationName === 'Your Latest Dish' && r.score === lastScore?.total);
    
    return (
        <div className="animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">{t('ranking.title')}</h2>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-100 font-bold text-gray-600 uppercase text-sm">
                    <div className="col-span-1 text-center">{t('ranking.rank')}</div>
                    <div className="col-span-2 text-center">{t('ranking.score')}</div>
                    <div className="col-span-6">{t('ranking.combination')}</div>
                    <div className="col-span-3 text-right">{t('ranking.date')}</div>
                </div>
                
                <ul className="divide-y divide-gray-200">
                    {rankings.map(r => (
                        <li key={`${r.rank}-${r.score}`} className={`grid grid-cols-1 sm:grid-cols-12 gap-4 px-6 py-4 items-center transition-colors ${r.rank === userLastRank?.rank ? 'bg-orange-100' : ''}`}>
                            <div className="col-span-1 sm:text-center text-2xl sm:text-lg font-bold text-orange-600">{r.rank}</div>
                            <div className="col-span-2 sm:text-center text-xl sm:text-lg font-semibold">{r.score}</div>
                            <div className="col-span-6 text-gray-800 font-medium">
                                <span className="sm:hidden font-bold">{t('ranking.combination')}: </span>
                                {r.combinationName}
                            </div>
                            <div className="col-span-3 text-gray-500 sm:text-right text-sm">
                                <span className="sm:hidden font-bold">{t('ranking.date')}: </span>
                                {r.date}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text-center mt-8">
                <button
                    onClick={() => setScreen(Screen.HOME)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
                >
                    {t('tryAgain')}
                </button>
            </div>
        </div>
    );
};

export default RankingScreen;
