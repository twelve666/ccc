import React, { useState } from 'react';
import Modal from '../../components/modal/tip';

const Tip: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleCancel = () => {
        console.log('取消按钮被点击');
        setIsModalVisible(false);
    }

    const handleConfirm = () => {
        console.log('确定按钮被点击');
        setIsModalVisible(false);
    }

    const handleSingleAction = () => {
        console.log('单个按钮被点击');
        setIsModalVisible(false);
    }

    return (
        <div>
            <button onClick={() => setIsModalVisible(true)}>显示单按钮提示弹窗</button>
            <Modal
                title="单按钮提示"
                content="这是一个只有一个按钮的提示弹窗。"
                buttons={[
                    { text: '确定', onClick: handleSingleAction }
                ]}
                isVisible={isModalVisible}
            />
        </div>
    );
}

export default Tip;
