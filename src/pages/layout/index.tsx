import React from 'react';
import Footer from '../../components/footer'
import layoutStyle from './layout.module.scss'
import { Outlet } from "react-router-dom"
const Layout: React.FC = () => {
    return <div className={layoutStyle.mainView}>
      
          <Outlet/>
        
          <Footer />
    </div>;
};

export default Layout;
