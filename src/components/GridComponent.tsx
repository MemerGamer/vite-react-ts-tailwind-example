import React from 'react';
import { Phone } from '../types';

interface GridComponentProps {
  phone: Phone;
}

const GridComponent: React.FC<GridComponentProps> = ({ phone }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{phone.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{phone.description}</p>
      <p className="text-gray-800 dark:text-white font-bold">${phone.price}</p>

      <div className="flex justify-center">
        <img
          src={phone.image}
          alt={phone.name}
          className="object-contain h-64 w-full mt-4"
        />
      </div>
    </div>
  );
};

export default GridComponent;
