import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  name?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, name }) => {
  return (
    <button
      name={name ? name : ''}
      className="text-white font-semibold py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
