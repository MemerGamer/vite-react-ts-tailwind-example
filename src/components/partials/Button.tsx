import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="text-white font-semibold py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
