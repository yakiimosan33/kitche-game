
import React from 'react';
import { useGame } from '../context/GameContext';
import { Language } from '../types';
import { useLocalization } from '../hooks/useLocalization';

const LanguageSelectionScreen: React.FC = () => {
    const { setLanguage } = useGame();
    // Temporarily set a default for `t` function before language is selected
    const { t } = useLocalization();

    const handleSelect = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-100">
            <div className="text-center p-8 bg-white rounded-xl shadow-2xl max-w-md w-full animate-fade-in">
                <h1 className="text-4xl font-bold text-orange-600 mb-2">🍳 {t('appName')}</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">{translations[Language.EN].langSelect.title}</h2>
                <div className="space-y-4 my-8">
                    <button
                        onClick={() => handleSelect(Language.EN)}
                        className="w-full text-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-transform transform hover:scale-105"
                    >
                        🇬🇧 English
                    </button>
                    <button
                        onClick={() => handleSelect(Language.JA)}
                        className="w-full text-xl bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg transition-transform transform hover:scale-105"
                    >
                        🇯🇵 日本語
                    </button>
                    <button
                        onClick={() => handleSelect(Language.ZH)}
                        className="w-full text-xl bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg transition-transform transform hover:scale-105"
                    >
                        🇨🇳 中文
                    </button>
                </div>
                <p className="text-gray-500">{translations[Language.EN].langSelect.subtitle}</p>
            </div>
        </div>
    );
};

// Minimal translations for the selection screen itself
const translations = {
    [Language.EN]: { langSelect: { title: "Select Your Language", subtitle: "You can change this later." } },
    [Language.JA]: { langSelect: { title: "言語を選択してください", subtitle: "言語は後で変更できます。" } },
    [Language.ZH]: { langSelect: { title: "请选择您的语言", subtitle: "您可以稍后更改。" } },
};


export default LanguageSelectionScreen;
