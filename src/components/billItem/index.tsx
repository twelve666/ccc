import React from 'react';

interface billProps {
  time:string;
  logo:string;
  text: string;
  balance:number;
  bill:number;
}
const inputStyle= {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
}
const Input: React.FC<billProps> = ({ time, logo, text,balance,bill}) => {

  return (
    <div>

    </div>
  );
};

export default Input;
