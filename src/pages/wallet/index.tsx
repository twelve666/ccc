import React from 'react';
interface TitleProps {
    title: string;
  }
  const Title: React.FC<TitleProps> = ({ title }) => {
    return (
      <div className='tw-flex tw-justify-between'>
        <div>{title}</div>
      </div>
    );
  };
const Welfare: React.FC = () => {
    return <div>wallet page</div>;
};

export default Welfare;
