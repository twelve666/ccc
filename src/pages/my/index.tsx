import React,{useState} from 'react';
import Header  from './components/header';
import Balance from './components/balance';
import More from './components/more'
const balanceStyle={  
    container:{
     display:'flex',
     justifyContent: 'space-around',
    },
 }
const My: React.FC = () => {
    const [name,setName] = useState('register')
    return <div>
        <Header text={name} isLogin={name!=='register'}/>
        <div style={balanceStyle.container}>
        <Balance number={2222} text='33333'/>
        <Balance number={333} text='5555'/>
         <input></input>
        </div>
        <More />
    </div>;
};

export default My;
