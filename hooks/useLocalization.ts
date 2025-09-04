
import { useCallback } from 'react';
import { useGame } from '../context/GameContext';
import { translations } from '../constants/translations';
import { Language } from '../types';

export const useLocalization = () => {
  const { language, setLanguage } = useGame();

  const t = useCallback((key: string): string => {
    if (!language) return key;
    const langTranslations = translations[language];
    // Basic nested key support
    const keys = key.split('.');
    let result: any = langTranslations;
    for (const k of keys) {
        result = result?.[k];
        if (result === undefined) {
            return key; // Return key if not found
        }
    }
    return result as string;
  }, [language]);

  return { t, setLanguage, currentLanguage: language };
};
