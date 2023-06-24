import React from 'react';

interface ItemProps {
    href: string;
    onClick?: () => void; // Add onClick prop as optional
    children: React.ReactNode;
    target?: string; // Add target prop as optional
}



const Item: React.FC<ItemProps> = ({ href, onClick, children, target }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <a
            href={href}
            className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-indigo-600 hover:text-white dark:text-white"
            onClick={handleClick} // Add onClick event handler
            // only add target if it is defined
            target={target ? target : undefined}
        >
            {children}
        </a >
    );
};

export default Item;
