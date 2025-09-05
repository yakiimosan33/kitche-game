
import React from 'react';
import { GameProvider, useGame } from './context/GameContext';
import LanguageSelectionScreen from './screens/LanguageSelectionScreen';
import HomeScreen from './screens/HomeScreen';
import DishSelectionScreen from './screens/DishSelectionScreen';
import IngredientSelectionScreen from './screens/IngredientSelectionScreen';
import PreviewScreen from './screens/PreviewScreen';
import ResultScreen from './screens/ResultScreen';
import RankingScreen from './screens/RankingScreen';
import Header from './components/Header';
import { Screen } from './types';

const AppContent: React.FC = () => {
  console.log('AppContent rendering');
  
  try {
    const { screen, language } = useGame();
    console.log('Game context loaded, language:', language, 'screen:', screen);

    if (!language) {
      return <LanguageSelectionScreen />;
    }

    const renderScreen = () => {
      switch (screen) {
        case Screen.HOME:
          return <HomeScreen />;
        case Screen.DISH_SELECTION:
          return <DishSelectionScreen />;
        case Screen.INGREDIENT_SELECTION:
          return <IngredientSelectionScreen />;
        case Screen.PREVIEW:
          return <PreviewScreen />;
        case Screen.RESULT:
          return <ResultScreen />;
        case Screen.RANKING:
          return <RankingScreen />;
        default:
          return <HomeScreen />;
      }
    };

    return (
      <div className="min-h-screen bg-orange-50 font-sans">
        <Header />
        <main className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
          {renderScreen()}
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error in AppContent:', error);
    return <div>Error loading app content</div>;
  }
};

const App: React.FC = () => {
  console.log('App component rendering');
  
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
};

export default App;
