
import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useLocalization } from '../hooks/useLocalization';
import { Screen, Score } from '../types';
import { scoreDish } from '../services/geminiService';
import { getBadgeForScore } from '../constants/gameData';
import LoadingSpinner from '../components/LoadingSpinner';

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;
        
        const duration = 800;
        const incrementTime = (duration / end) || 1;
        
        const timer = setInterval(() => {
            start += 1;
            setDisplayValue(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value]);

    return <span className="font-bold">{displayValue}</span>;
}

const ProgressBar: React.FC<{ value: number; max: number; label: string }> = ({ value, max, label }) => (
    <div>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-700">{label}</span>
            <span className="text-sm font-medium text-gray-700">{value} / {max}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${(value / max) * 100}%` }}></div>
        </div>
    </div>
);


const ResultScreen: React.FC = () => {
    const { setScreen, selectedDish, selectedIngredients, setLastScore, setLastBadge, setBestScore, addUserToRankings, language } = useGame();
    const { t } = useLocalization();
    const [score, setScore] = useState<Score | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!selectedDish || selectedIngredients.length < 2 || !language) {
            setScreen(Screen.HOME);
            return;
        }

        const getScore = async () => {
            setIsLoading(true);
            const result = await scoreDish(selectedDish, selectedIngredients, language);
            const badge = getBadgeForScore(result.total);
            setScore(result);
            setLastScore(result);
            setLastBadge(badge);
            setBestScore(result.total);
            addUserToRankings(result.total);
            setIsLoading(false);
        };

        getScore();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading || !score) {
        return <LoadingSpinner message={t('calculatingScore')} />;
    }

    const badge = getBadgeForScore(score.total);

    return (
        <div className="text-center animate-fade-in max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t('result.title')}</h2>
            
            <div className="my-6">
                <p className="text-lg text-gray-600">{t('result.totalScore')}</p>
                <p className="text-8xl font-bold text-orange-600 my-2 animate-count-up" style={{ animationDelay: '200ms' }}>
                    <AnimatedNumber value={score.total} />
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md space-y-4 mb-6">
                 <h3 className="text-xl font-semibold mb-3">{t('result.breakdown')}</h3>
                 <ProgressBar value={score.diversity} max={60} label={t('result.diversity')} />
                 <ProgressBar value={score.presentation} max={20} label={t('result.presentation')} />
                 <ProgressBar value={score.compatibility} max={20} label={t('result.compatibility')} />
            </div>

            <div className="bg-orange-100 p-6 rounded-lg shadow-inner mb-8">
                <h3 className="text-xl font-semibold text-orange-800 mb-2">{t('result.reward')}</h3>
                <div className="text-5xl">{badge.icon}</div>
                <p className="text-lg font-bold text-orange-900 mt-2">{t(badge.nameKey)}</p>
                <p className="text-orange-700">{t(badge.descriptionKey)}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    onClick={() => setScreen(Screen.HOME)}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    {t('tryAgain')}
                </button>
                <button
                    onClick={() => setScreen(Screen.RANKING)}
                    className="flex-1 bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    {t('viewRankings')}
                </button>
            </div>
        </div>
    );
};

export default ResultScreen;
