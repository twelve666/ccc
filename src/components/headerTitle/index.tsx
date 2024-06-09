import { useNavigate } from "react-router-dom";
import HeaderStyle from './headerTitle.module.scss'
import back from './img/icon_arrow.svg'
interface TitleProps {
    title: string;
    showBack?: boolean;
}

const Title: React.FC<TitleProps> = ({ title, showBack }) => {
    const navigate = useNavigate();
    
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className={HeaderStyle.header}>
            {showBack && (
                 <img className={HeaderStyle.back} src={back} alt="" onClick={()=>handleBack()}/>
            )}
            <div>{title}</div>
        </div>
    );
};

export default Title;