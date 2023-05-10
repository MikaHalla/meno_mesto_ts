import { useContext } from 'react';
import AppContext from './context/AppContext';

const App = () => {
  const { asdf } = useContext(AppContext);

  return (
    <div className="background">
      <div className="game-area">
        game-area
        <button>{asdf}</button>
      </div>
    </div>
  );
};
export default App;
