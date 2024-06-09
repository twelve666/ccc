import React, { useState } from 'react';
import Tab from '../../components/tabs';
import PasscodeInput from '../../components/passcodeInput';
import Input from '../../components/input';
import Popup from '../../components/popup';

// 定义图像对象的类型 暂时模拟
interface Image {
  id: number;
  url: string;
  description: string;
}
// 定义 Props 接口
interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className='tw-flex tw-justify-between'>
      <div>{title}</div>
      <div>view all</div>
    </div>
  );
};
const HomeList: React.FC = () => {
  // 使用类型定义初始化图像列表状态
  const [images, setImages] = useState<Image[]>([
    { id: 1, url: 'https://via.placeholder.com/150', description: 'Image 1' },
    { id: 2, url: 'https://via.placeholder.com/150', description: 'Image 2' },
    { id: 3, url: 'https://via.placeholder.com/150', description: 'Image 3' },
  ]);
  const tabs: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
  const handleTabChange = (index: number): void => { }
  const [passcode, setPasscode] = useState('');

  const handlePasscodeChange = (newPasscode: string) => {
    setPasscode(newPasscode);
    console.log('Passcode:', newPasscode);
  };
  const [textValue, setTextValue] = useState<string>('');
  const [numberValue, setNumberValue] = useState<string>('');
  const [visible, setVisible] = useState(false);

  const togglePopup = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <Tab
        tabs={tabs}
        onTabChange={handleTabChange}
      />
      <h1>Popup Component Demo</h1>
      <button onClick={togglePopup} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {visible ? 'Hide' : 'Show'} Popup
      </button>
      <Popup
        visible={visible}
        onClose={togglePopup}
        position="bottom"
        showCloseButton={true}
        rounded={true}
      >
        <div style={{ padding: '20px' }}>
          <h2>Popup Content</h2>
          <p>
            This is an example of a popup. You can put any content you want here, including
            text, images, and more.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id faucibus justo.
            Integer vehicula, metus vel egestas faucibus, dui nulla facilisis ligula, in
            bibendum nulla ligula sit amet urna.
          </p>
        </div>
      </Popup>
      <PasscodeInput length={6} onChange={handlePasscodeChange} />
      <Input
        type="text"
        value={textValue}
        placeholder="Enter text"
        onChange={(value) => setTextValue(value)}
        style={{ marginBottom: '10px' }}
        inputStyle={{ width: '300px' }}
      />
      <Input
        type="number"
        value={numberValue}
        placeholder="Enter number"
        onChange={(value) => setNumberValue(value)}
        style={{ marginBottom: '10px' }}
        inputStyle={{ width: '300px' }}
      />
      <p>Entered Number: {numberValue}</p>
      <Title title="teikegwge" />
      <div className="image-list">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={image.description} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeList;