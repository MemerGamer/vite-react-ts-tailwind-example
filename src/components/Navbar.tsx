import React, { useState } from 'react';
import Button from './partials/Button';
import Dropdown from './partials/Dropdown';
import { Bars3Icon } from '@heroicons/react/24/outline';
const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleButtonClick = () => {
        setIsDropdownOpen(prevIsDropdownOpen => !prevIsDropdownOpen);
    };

    const handleDropdownClose = () => {
        setIsDropdownOpen(false);
    };

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        const currentDarkMode = localStorage.getItem('darkMode');
        const newDarkMode = currentDarkMode === 'true' ? 'false' : 'true';
        localStorage.setItem('darkMode', newDarkMode);
    };

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Phone Catalogue</h1>
                <div>
                    <Button onClick={handleButtonClick} name="menu-button">
                        <span>
                            <Bars3Icon className="h-5 w-5 text-white" />
                        </span>
                    </Button>
                    {isDropdownOpen && (
                        <Dropdown isOpen={isDropdownOpen} onClose={handleDropdownClose} toggleDarkMode={toggleDarkMode} />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
