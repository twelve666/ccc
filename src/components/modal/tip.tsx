import React from 'react';
import ReactDOM from 'react-dom';



const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const modalContainerStyle: React.CSSProperties = {
    background: '#fff',
    borderRadius: '8px',
    width: '400px',
    maxWidth: '100%',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
};

const modalHeaderStyle: React.CSSProperties = {
    marginBottom: '20px',
};

const modalContentStyle: React.CSSProperties = {
    marginBottom: '20px',
};

const modalFooterStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
};

const modalButtonStyle: React.CSSProperties = {
    padding: '10px 20px',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const firstModalButtonStyle: React.CSSProperties = {
    ...modalButtonStyle,
    background: '#ccc',
};

const lastModalButtonStyle: React.CSSProperties = {
    ...modalButtonStyle,
    background: '#007bff',
    color: '#fff',
};
interface ModalButtonConfig {
    text: string;
    onClick: () => void;
}

interface ModalProps {
    title: string;
    content: string;
    buttons: ModalButtonConfig[];
    isVisible: boolean;
}
const Modal: React.FC<ModalProps> = ({
    title,
    content,
    buttons,
    isVisible,
}) => {
    if (!isVisible) return null;

    return ReactDOM.createPortal(
        <div style={modalOverlayStyle}>
            <div style={modalContainerStyle}>
                <div style={modalHeaderStyle}>
                    <h2>{title}</h2>
                </div>
                <div style={modalContentStyle}>
                    <p>{content}</p>
                </div>
                <div style={modalFooterStyle}>
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            style={index === 0 ? firstModalButtonStyle : lastModalButtonStyle}
                            onClick={button.onClick}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>,
        document.body
    );
}

export default Modal;
