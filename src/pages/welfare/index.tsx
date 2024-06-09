import React,{useState}from 'react';
import HeaderTitle from '../../components/headerTitle'
import WelfareStyle from './welfare.module.scss'
import { useNavigate } from "react-router-dom";
// 定义图像对象的类型 暂时模拟
interface Image {
    id: number;
    url: string;
}
const List: React.FC = () => {
    // 使用类型定义初始化图像列表状态
    const [images, setImages] = useState<Image[]>([
        { id: 1, url: 'https://developer.qcloudimg.com/operation/attachment/900005/20240531-d8ef69ea.png' },
        { id: 2, url: 'https://developer.qcloudimg.com/operation/attachment/900005/20240531-d8ef69ea.png' },
        { id: 3, url: 'https://developer.qcloudimg.com/operation/attachment/900005/20240531-d8ef69ea.png' },
    ]);
    const navigate = useNavigate();
    const goDetail = ()=>{
        navigate('/welfareDetail');
    }
    return (
        <div>
            <div className={WelfareStyle.imageList}>
                {images.map((image) => (
                    <div key={image.id} className={WelfareStyle.imageListItem} onClick={()=>{ goDetail() }}>
                        <img src={image.url} className={WelfareStyle.itemImg}/>
                    </div>
                ))}
            </div>
        </div>
    );
};
const Welfare: React.FC = () => {
    return <div>
        <HeaderTitle title='Welfare'/>
        <List />
    </div>;
};

export default Welfare;
