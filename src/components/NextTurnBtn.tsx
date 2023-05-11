import { useContext } from 'react';
import AppContext from '../context/AppContext';

const NextTurnBtn = () => {
  const { categories, letter, nextTurn } = useContext(AppContext);
  return (
    <button
      className="w-full max-w-lg cursor-pointer rounded-full border-none bg-white p-3 text-2xl font-bold text-gray-700 disabled:opacity-20"
      onClick={() => nextTurn()}
      disabled={categories.length === 0}
    >
      {letter === ''
        ? 'START'
        : categories.length === 0
        ? 'NO CATEGORIES'
        : 'NEXT'}
    </button>
  );
};
export default NextTurnBtn;
