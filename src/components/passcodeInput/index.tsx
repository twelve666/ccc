import React, { useState, useRef } from 'react';

interface PasscodeInputProps {
    length: number;
    onChange: (passcode: string) => void;
}
const PasscodeInput: React.FC<PasscodeInputProps> = ({ length, onChange }) => {
    const [values, setValues] = useState<string[]>(Array(length).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValues = [...values];
        newValues[index] = e.target.value.slice(-1);
        setValues(newValues);
        onChange(newValues.join(''));

        if (e.target.value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !values[index] && index > 0) {
            const newValues = [...values];
            newValues[index - 1] = '';
            setValues(newValues);
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div style={{ display: 'flex', gap: '8px' }}>
            {values.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    style={inputStyle}
                    maxLength={1}
                />
            ))}
        </div>
    );
};

export default PasscodeInput;
const inputStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    textAlign: 'center',
    fontSize: '24px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};