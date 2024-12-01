import React from 'react';
import { BINGO_LETTERS } from '../utils/bingoUtils';

export const BingoHeader: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      {BINGO_LETTERS.map((letter) => (
        <div
          key={letter}
          className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white font-bold text-2xl rounded-lg"
        >
          {letter}
        </div>
      ))}
    </div>
  );
};