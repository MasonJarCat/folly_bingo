// Generate random numbers for bingo card
export const generateBingoNumbers = () => {
  const numbers: number[][] = Array(5).fill(null).map((_, colIndex) => {
    const min = colIndex * 15 + 1;
    const max = min + 14;
    const columnNumbers = new Set<number>();
    
    while (columnNumbers.size < 5) {
      columnNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    
    return Array.from(columnNumbers);
  });
  
  // Make center cell free
  numbers[2][2] = 0; // 0 represents FREE space
  return numbers;
};

export const BINGO_LETTERS = ['F', 'O', 'L', 'L', 'Y'];