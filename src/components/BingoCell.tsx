import React from 'react';
import { cn } from '../utils/cn';

interface BingoCellProps {
  number: number;
  isSelected: boolean;
  onClick: () => void;
}

export const BingoCell: React.FC<BingoCellProps> = ({ number, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-16 h-16 border-2 border-gray-300 rounded-lg font-bold text-xl transition-all',
        'hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400',
        isSelected && 'bg-blue-500 text-white hover:bg-blue-600',
        !isSelected && 'bg-white'
      )}
    >
      {number === 0 ? 'FREE' : number}
    </button>
  );
};