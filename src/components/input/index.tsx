import React, { ChangeEvent, FocusEvent, useState } from 'react';

interface InputProps {
  type?: 'text' | 'password' | 'number' | 'email' | 'tel';
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  value = '',
  placeholder = '',
  onChange,
  onFocus,
  onBlur,
  style,
  inputStyle,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    onFocus && onFocus();
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur && onBlur();
  };

  return (
    <div style={{ ...defaultContainerStyle, ...style }}>
      <input
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ ...defaultInputStyle, ...inputStyle }}
      />
    </div>
  );
};

const defaultContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const defaultInputStyle: React.CSSProperties = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  width: '100%',
};

export default Input;
