import React from 'react';
import Discount from './img/discount.svg'
const moreStyle = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 25%)',
  },
  containerItem: {
    background: '#c81616',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

}
interface ListItem {
  icon: string;
  title: string;
}
const moreList: ListItem[] = [
  { icon: '', title: 'SE' },
  { icon: '', title: 'E' },
  { icon: '', title: 'R' },
  { icon: '', title: 'R' },
  { icon: '', title: 'T' },
];
const MoreListComponent: React.FC = () => {
  return (
    <>
      <p>more</p>
      <div style={moreStyle.container}>
        {moreList.map((item, index) => (
          <div>
            <div key={index} style={moreStyle.containerItem}>
              <img src={item.icon}  />
            </div>
            <p> {item.title}</p>
          </div>

        ))}
      </div>
    </>

  );
};

export default MoreListComponent;