import React from 'react';
import { NavLink, To, useNavigate } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'
import LoginStyle from './login.module.scss'
import Tip from './tip'
import Tip2 from './tip2'
// import "./index.scss";
type FieldType = {
    username?: string;
    password?: string;
};

const Login: React.FC = () => {
    return <div><LoginFooter /></div>;
};

export default Login;
const LoginFooter: React.FC = () => {
    const isMobile = useIsMobile()
    const navigate = useNavigate()
    const handleClickSearch = (path: To) => {
        navigate(path)
    }
    return <div>
        <Tip />
        <Tip2 />
        <div className={LoginStyle.redText}>注册新账号 {isMobile ? 'mobile' : 'pc'}</div>
        <div className='text-[red] text-2xl'>验证码登陆</div>
        <div onClick={() => { handleClickSearch('/findPass') }}>忘记密码</div>
    </div>;
};
