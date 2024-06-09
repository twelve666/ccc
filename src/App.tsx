import React, { useEffect, createContext, useState, useLayoutEffect, useContext } from 'react';
import { LocaleContext, getLocale, setLocale } from "./lang/i18n1"
import { I18nContext, useTranslation, translationsMap } from './lang/i18n';
// import { useTranslation } from './lang/useTranslation';
import { useRoutes } from "react-router-dom";
import routes from './router'
// 判断当前视口是否为移动端大小
export const checkIsMobile = () => {
  return window.innerWidth <= 620
}
// 保存是否移动端状态的 context
export const IsMobileContext = createContext<boolean>(false)
const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(checkIsMobile)
  useEffect(() => {
    const resizeHandler = () => {
      const currentIsMobile = checkIsMobile()
      setIsMobile(currentIsMobile)
    }
    // 监听 window 的 resize 事件，窗口大小改变时重新计算 isMobile 的值
    window.addEventListener('resize', resizeHandler)
    // 组件销毁时取消事件监听
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])
  useLayoutEffect(() => {
    type BodyClassName = 'pc' | 'mobile'
    const bodyClass: BodyClassName = isMobile ? 'mobile' : 'pc'
    const classToRemove: BodyClassName = bodyClass === 'mobile' ? 'pc' : 'mobile'
    document.body.classList.remove(classToRemove)
    document.body.classList.add(bodyClass)
  }, [isMobile])
  // i18n 语言
  const { locale, setLocale } = useContext(I18nContext);
  const value = {
    locale,
    translations: translationsMap[locale],
    setLocale,
  };
  // const [locale, setLocaleState] = useState<Locale>('cn');
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //     dispatch(setMenus(defaultMenus));
  // }, [dispatch]);
  return (
    <I18nContext.Provider value={value}>
      <IsMobileContext.Provider value={isMobile}>
        <div className="main">
          {useRoutes(routes)}
        </div>
      </IsMobileContext.Provider>
    </I18nContext.Provider>

  );
};
const LanguageSwitcher: React.FC = () => {
  const { setLocale } = useContext(I18nContext);
  return (
    <div>
      <button onClick={() => setLocale('en')}>English</button>
      <button onClick={() => setLocale('cn')}>中文</button>
    </div>
  );
};
const Greeting: React.FC<{ greetingKey: string }> = ({ greetingKey }) => {
  const { t } = useTranslation();
  return <h1>{t(greetingKey)}</h1>;
};

const WelcomeMessage: React.FC<{ name: string }> = ({ name }) => {
  const { t } = useTranslation();
  return <h1>{t('home', { name })}</h1>;
};
export default App;
