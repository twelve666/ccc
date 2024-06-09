// src/hooks/useTranslation.ts
import { useContext } from 'react';
import { I18nContext } from '../lang/i18n';

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
