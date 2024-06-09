import React, { useContext } from 'react';
import { NavLink, To } from 'react-router-dom'
import book, { useLangBook, setLocale, LocaleContext } from "../../lang/i18n1"
import icon1 from './img/icon_nav1.svg'
import icon2 from './img/icon_nav2.svg'
import icon3 from './img/icon_nav3.svg'
import icon4 from './img/icon_nav4.svg'
import FootStyle from "./footer.module.scss"

const Footer: React.FC = () => {
    const { locale } = useContext(LocaleContext)
    // console.log('locale', locale)
    // type TranslationKeys = keyof typeof book.cn;
    type FooterItem = {
        title: string; // 将 title 属性限制为翻译键类型
        icon: string;
        path: To,
    }
    const footList: FooterItem[] = [
        { title: 'home', icon: icon1, path: '/' },
        { title: 'welfare', icon: icon2, path: '/welfare' },
        { title: 'wallet', icon: icon3, path: '/wallet' },
        { title: 'my', icon: icon4, path: '/my' }
    ];
    const { T } = useLangBook(book)
    return (
        <div className={FootStyle.footer}>
            {footList.map((item) => (
                <NavLink key={item.title} className={({ isActive }) => isActive ? `${FootStyle.footerItem} ${FootStyle.active}` : FootStyle.footerItem} to={item.path}>
                    <img src={item.icon} alt="" className={FootStyle.footerIcon} onClick={() => {
                        setLocale(
                            'cn',
                        );
                    }} />
                    <span className={FootStyle.footerTitle} >{T('home')}</span>
                </NavLink>
            ))
            }
        </div >
    );
};

export default Footer;
// 路由传参
// import { useLocation } from 'react-router-dom'   
// //传参
//   const navigate = useNavigate()
//   const handleClickToRanking = () => {
//     navigate('/discover/ranking', { state: { id: itemDetail.id } })
//   }
// //获取参数
// const { state } = useLocation()
// state.id