import React from 'react';
import Discount from '../img/discount.svg'
const cardStyle={  
   container:{
    display:'flex',
    justifyContent: 'space-around',
    alignItems:'center'  ,
    background:'#c81616',
    borderRadius:'5px',
    width:'40%',
    height:'50px',
   },
   containerLeft:{
     
   }
 
}
// 定义 Props 类型
interface CardProps {
    number: number; //金额
    text: string; //显示文字
  }
  const Card: React.FC<CardProps> = ({ number, text }) => {
    return (
      <div style={cardStyle.container}>
        <div style={cardStyle.containerLeft}>
          <p>{number}</p>
          <p>{text}</p>
        </div>
        <img src={Discount} alt="" />
      </div>
    );
  };

// const Balance: React.FC = () => {
//     return <div><Card number=''/></div>;
// };

export default Card;
