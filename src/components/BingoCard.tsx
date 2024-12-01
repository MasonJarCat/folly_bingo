import React, { useState, useCallback } from 'react';
import { BingoCell } from './BingoCell';
import { BingoHeader } from './BingoHeader';
import { generateBingoNumbers } from '../utils/bingoUtils';

export const BingoCard: React.FC = () => {
  const [numbers] = useState(() => generateBingoNumbers());
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set(['2-2'])); // Center is always selected

  const toggleCell = useCallback((row: number, col: number) => {
    setSelectedCells((prev) => {
      const key = `${row}-${col}`;
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        if (!(row === 2 && col === 2)) { // Don't unselect FREE space
          newSet.delete(key);
        }
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <BingoHeader />
      <div className="grid grid-cols-5 gap-2">
        {numbers.map((col, colIndex) =>
          col.map((number, rowIndex) => (
            <BingoCell
              key={`${rowIndex}-${colIndex}`}
              number={number}
              isSelected={selectedCells.has(`${rowIndex}-${colIndex}`)}
              onClick={() => toggleCell(rowIndex, colIndex)}
            />
          ))
        )}
      </div>
    </div>
  );
};