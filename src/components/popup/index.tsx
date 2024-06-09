import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import popupStyle from './popup.module.scss'
type PopupPosition = 'top' | 'bottom' | 'left' | 'right';

interface PopupProps {
    visible: boolean;
    onClose: () => void;
    position?: PopupPosition;
    showCloseButton?: boolean;
    rounded?: boolean;
    children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({
    visible,
    onClose,
    position = 'bottom',
    showCloseButton = true,
    rounded = true,
    children,
}) => {
    // if (!visible) return null
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (popupRef.current) {
            if (visible) {
                popupRef.current.classList.add('popup-showing');
                popupRef.current.classList.remove('popup-fading');
            } else {
                popupRef.current.classList.add('popup-fading');
                popupRef.current.classList.remove('popup-showing');
            }
        }
    }, [visible]);
    // return ReactDOM.createPortal(
    //     <div style={overlayStyle}>
    //         <div style={{ ...getPopupStyle(position, rounded), ...popupContainerStyle }} >
    //             {showCloseButton && (
    //                 <button style={closeButtonStyle} onClick={onClose}>
    //                     &times;
    //                 </button>
    //             )}
    //             <div style={contentStyle}>{children}</div>
    //         </div>
    //     </div>,
    //     document.body
    // );
    return ReactDOM.createPortal(
        <div className={`popup-overlay ${visible ? 'visible' : ''}`}>
            <div
                ref={popupRef}
                className={`popup-container ${position} ${rounded ? 'rounded' : ''}`}
            >
                {showCloseButton && (
                    <button className="popup-close-button" onClick={onClose}>
                        &times;
                    </button>
                )}
                <div className="popup-content">{children}</div>
            </div>
        </div>,
        document.body
    );
};

const getPopupStyle = (position: PopupPosition, rounded: boolean): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
        borderRadius: rounded ? '10px' : '0',
    };

    switch (position) {
        case 'top':
            return { ...baseStyle, alignSelf: 'flex-start', marginTop: '10%' };
        case 'bottom':
            return { ...baseStyle, alignSelf: 'flex-end', marginBottom: '10%' };
        case 'left':
            return { ...baseStyle, alignSelf: 'flex-start', marginLeft: '10%' };
        case 'right':
            return { ...baseStyle, alignSelf: 'flex-end', marginRight: '10%' };
        default:
            return baseStyle;
    }
};
const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const popupContainerStyle: React.CSSProperties = {
    position: 'relative',
    maxHeight: '80vh',
    overflowY: 'auto',
    backgroundColor: '#fff',
    width: '80%',
    maxWidth: '400px',
    padding: '20px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};
const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
};

const contentStyle: React.CSSProperties = {
    maxHeight: '60vh',
    overflowY: 'auto',
};

export default Popup;
