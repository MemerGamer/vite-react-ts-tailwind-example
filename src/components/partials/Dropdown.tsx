import React from 'react';
import Item from './DropdownItem.tsx';

interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    toggleDarkMode: () => void; // Add toggleDarkMode prop
}

const Dropdown: React.FC<DropdownProps> = ({ isOpen, onClose, toggleDarkMode }) => {
    return (
        <div
            className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10 dark:bg-gray-600 dark:text-white ${isOpen && ''}`}
        >
            <Item href="/">home</Item>
            <Item href="https://github.com/MemerGamer/vite-react-ts-tailwind-example" target="_blank">Docs</Item>
            <Item href="" onClick={toggleDarkMode}>dark mode</Item> {/* Add onClick event */}
            <button
                onClick={onClose}
                className="block w-full text-left px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-600 hover:text-white dark:text-white"
            >
                close
            </button>
        </div>
    );
};

export default Dropdown;
