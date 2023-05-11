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
      className={`score-counter ${mostRecentPoint && 'most-recent'}`}
      onClick={handleClick}
      disabled={pointAwarded || categories.length === 0}
    >
      {points}
    </button>
  );
};
export default ScoreCounter;
