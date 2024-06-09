import React,{useState} from 'react';
import HeaderTitle from '../../components/headerTitle'
import WelfareStyle from './welfare.module.scss'
// interface DetailProps {
//     data: string;
// }

const Detail: React.FC = () => {
    const [welfareDetail,setWelfareDetail] =useState('<p>3333<p>')
    return (
        <>
        <HeaderTitle title='Detail' showBack={true}/>
        <div dangerouslySetInnerHTML={{ __html: welfareDetail }} className={WelfareStyle.detail}/>
        </>
       
    );
};

export default Detail;
