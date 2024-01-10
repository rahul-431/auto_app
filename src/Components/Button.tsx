import React from 'react'
interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <button className='text-white bg-blue-500 hover:bg-amber-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-large px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-20 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-500 lg:text-2xl'>
            {label}
        </button>
    );
};

export default Button;