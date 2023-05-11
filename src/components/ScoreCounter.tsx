import { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

const ScoreCounter = () => {
  const { pointAwarded, setPointAwarded, letter, categories } =
    useContext(AppContext);

  const [points, setPoints] = useState(0);
  const [mostRecentPoint, setMostRecentPoint] = useState(false);

  const handleClick = () => {
    setPoints((prev) => prev + 1);
    setPointAwarded(true);
    setMostRecentPoint(true);
  };

  useEffect(() => {
    setMostRecentPoint(false);
  }, [letter]);

  return (
    <button
      className={`flex h-16 w-16 cursor-pointer select-none items-center justify-center rounded-full border-[3px] border-white bg-gray-700 p-2 text-4xl font-bold ${
        mostRecentPoint
          ? 'bg-white text-gray-700'
          : 'bg-gray-700/50 text-white'
      }`}
      onClick={handleClick}
      disabled={pointAwarded || categories.length === 0}
    >
      {points}
    </button>
  );
};
export default ScoreCounter;
