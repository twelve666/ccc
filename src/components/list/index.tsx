import React from 'react';
//没有数据时显示
interface TitleProps {
    title?: string;
  }
  const Empty: React.FC<TitleProps> = ({ title }) => {
    return (
      <div className=''>
        <div>{'暂无数据'||title}</div>
      </div>
    );
  };
// 定义 Props 接口，包含一个组件类型的属性
interface ListProps {
    Component: React.ComponentType;
}

// 定义 List 组件，接收一个 Component 作为 props
const List: React.FC<ListProps> = ({ Component }) => {
    return (
        <div>
            <Component />
        </div>
    );
};


export default List;
