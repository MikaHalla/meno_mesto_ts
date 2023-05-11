import { useContext } from 'react';
import AppContext from '../context/AppContext';
import ScoreCounter from './ScoreCounter';

const ScoreBoard = () => {
  const { players, letter } = useContext(AppContext);
  return letter === null ? null : (
    <ul className="score-board">
      {players.map((player) => (
        <ScoreCounter key={player} />
      ))}
    </ul>
  );
};
export default ScoreBoard;
