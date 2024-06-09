import React, { useState } from 'react';
import { Locale, setLocale } from '../../lang/i18n1'; // 导入设置语言的函数和语言枚举

interface LanguageSwitcherProps {
  defaultLocale: Locale; // 默认语言
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ defaultLocale }) => {
  const [selectedLocale, setSelectedLocale] = useState(defaultLocale);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;
    setSelectedLocale(newLocale);
    setLocale(newLocale); // 切换语言
  };

  return (
    <select value={selectedLocale} onChange={handleLanguageChange}>
      <option>中文</option>
      <option>English</option>
    </select>
  );
};

export default LanguageSwitcher;
