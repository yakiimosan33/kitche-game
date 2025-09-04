import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';
import { Language, Screen, Dish, Ingredient, Score, Badge } from '../types';
import { Ranking } from '../types';

interface GameContextState {
  language: Language | null;
  setLanguage: (lang: Language) => void;
  screen: Screen;
  setScreen: (screen: Screen) => void;
  selectedDish: Dish | null;
  selectDish: (dish: Dish) => void;
  selectedIngredients: Ingredient[];
  toggleIngredient: (ingredient: Ingredient) => void;
  resetSelections: () => void;
  lastScore: Score | null;
  setLastScore: (score: Score | null) => void;
  lastBadge: Badge | null;
  setLastBadge: (badge: Badge | null) => void;
  bestScore: number;
  setBestScore: (score: number) => void;
  rankings: Ranking[];
  addUserToRankings: (score: number) => void;
}

const GameContext = createContext<GameContextState | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language | null>(() => {
    const savedLang = localStorage.getItem('sim-kitchen-lang');
    return savedLang ? (savedLang as Language) : null;
  });
  const [screen, setScreen] = useState<Screen>(Screen.HOME);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [lastScore, setLastScore] = useState<Score | null>(null);
  const [lastBadge, setLastBadge] = useState<Badge | null>(null);
  const [bestScore, setBestScoreState] = useState<number>(() => {
    const savedScore = localStorage.getItem('sim-kitchen-best-score');
    return savedScore ? parseInt(savedScore, 10) : 0;
  });
  const [rankings, setRankings] = useState<Ranking[]>([]);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('sim-kitchen-lang', lang);
    setLanguageState(lang);
  };

  const setBestScore = (score: number) => {
    if (score > bestScore) {
      localStorage.setItem('sim-kitchen-best-score', score.toString());
      setBestScoreState(score);
    }
  };

  const selectDish = (dish: Dish) => {
    setSelectedDish(dish);
  };
  
  const toggleIngredient = (ingredient: Ingredient) => {
    setSelectedIngredients(prev => {
      if (prev.find(i => i.id === ingredient.id)) {
        return prev.filter(i => i.id !== ingredient.id);
      }
      if (prev.length < 4) {
        return [...prev, ingredient];
      }
      return prev;
    });
  };

  const resetSelections = useCallback(() => {
    setSelectedDish(null);
    setSelectedIngredients([]);
  }, []);

  const addUserToRankings = (score: number) => {
    const newUserRanking: Ranking = {
        rank: 0, // Will be recalculated
        score: score,
        combinationName: 'Your Latest Dish',
        date: new Date().toLocaleDateString(),
    };
    const updatedRankings = [...rankings, newUserRanking]
        .sort((a, b) => b.score - a.score)
        .map((r, index) => ({ ...r, rank: index + 1 }));
    setRankings(updatedRankings);
  };

  useEffect(() => {
    if (language) {
      setScreen(Screen.HOME);
    }
  }, [language]);
  
  const value = {
    language,
    setLanguage,
    screen,
    setScreen,
    selectedDish,
    selectDish,
    selectedIngredients,
    toggleIngredient,
    resetSelections,
    lastScore,
    setLastScore,
    lastBadge,
    setLastBadge,
    bestScore,
    setBestScore,
    rankings,
    addUserToRankings,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};