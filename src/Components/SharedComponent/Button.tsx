import React from 'react'
interface ButtonProps {
    label: string;
    style: string;
}

const Button: React.FC<ButtonProps> = ({ label, style }) => {


    return (
        <button className={style}>
            {label}
        </button>
    );
};

export default Button;