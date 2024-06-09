// src/lang/i18n.ts
import React, { createContext, useContext } from 'react';
import en from './en';
import cn from './cn';

export type Locale = 'en' | 'cn';

export type Translations = typeof en | typeof cn;

interface I18nContextProps {
    locale: Locale;
    translations: Translations;
    setLocale: (locale: Locale) => void;
}

const translationsMap: { [key in Locale]: Translations } = {
    en,
    cn,
};

export const I18nContext = createContext<I18nContextProps>({
    locale: 'en',
    translations: translationsMap['en'],
    setLocale: () => { },
});
export async function setLocale(locale: Locale) {
    console.log('locale', locale)
    // await localStorage.setItem(currentLocale, currentLocale)
}

// // A static function to get the locale
// export function getLocale(): Locale {
//     return currentLocale
// }
export { translationsMap };
type TranslateParams = {
    [key: string]: string | number;
};

const formatString = (str: string, params: TranslateParams) => {
    return str.replace(/{(\w+)}/g, (_, key) => params[key] ? params[key].toString() : '');
};

export const useTranslation = () => {
    const { translations } = useContext(I18nContext);
    const t = (key: string, params?: TranslateParams): string => {
        const translation = (translations as any)[key] || key;
        console.log('translation', translation)
        return params ? formatString(translation, params) : translation;
    };
    return { t };
};
