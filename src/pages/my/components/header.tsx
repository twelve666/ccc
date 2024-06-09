import React from 'react';
// 定义 Props 类型
interface props {
    text: string; //显示文字
    isLogin: boolean,
}
const headStyle = {
    headWrap:{
        marginBottom:'20px',
    },
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    profile: {
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        marginRight:'5px',
    }
}
const Header: React.FC<props> = ({ isLogin, text }) => {
    return <div style={{...headStyle.container,...headStyle.headWrap}}>
        <div style={headStyle.container}>
            <img src="" alt="" style={headStyle.profile} />
            <p>{text}</p>
        </div>
        {isLogin && (
            <div>
                50
            </div>
        )}


    </div>;
};

export default Header;
