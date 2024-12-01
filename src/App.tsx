import React from 'react';
import { BingoCard } from './components/BingoCard';
import { Gamepad2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center py-8">
      <div className="mb-8 flex items-center gap-3">
        <Gamepad2 className="w-8 h-8 text-blue-600" />
        <h1 className="text-4xl font-bold text-gray-800">Interactive Bingo</h1>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <BingoCard />
      </div>
      
      <p className="mt-6 text-gray-600 text-center max-w-md">
        Click on the numbers to mark them. The center space is always marked as FREE!
      </p>
    </div>
  );
}

export default App;