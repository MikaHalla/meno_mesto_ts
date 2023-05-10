import { useContext } from 'react';
import AppContext from './context/AppContext';
import MenuButton from './components/MenuButton';

const App = () => {
  const {
    mobileMenu,
    tgMobileMenu,
    increaseDifficulty,
    decreaseDifficulty,
    letter,
    nextTurn,
  } = useContext(AppContext);

  return (
    <div className="background">
      <section
        className={`settings-panel ${mobileMenu && 'visible'}`}
      >
        <div className="container">
          <div className="fa-icon" onClick={tgMobileMenu}>
            {mobileMenu && <i className="fa-solid fa-xmark"></i>}
          </div>
        </div>
        <div className="difficulty">
          <MenuButton
            text="ABCD"
            action={decreaseDifficulty}
            activeStyle="easy"
          />
          <span></span>
          <MenuButton
            text="ĎChQW"
            action={increaseDifficulty}
            activeStyle="hard"
          />
        </div>
        <div className="categories"></div>
      </section>
      <section className="game-area">
        <div className="fa-icon" onClick={tgMobileMenu}>
          <i className="fa-solid fa-gear"></i>
        </div>
        <div className="letter">{letter}</div>
        <ul className="score-board">
          <button className="score-counter">0</button>
          <button className="score-counter">0</button>
          <button className="score-counter">0</button>
          <button className="score-counter">0</button>
        </ul>
        <button
          className="button-next-turn"
          onClick={nextTurn}
          // disabled={categories.length === 0}
        >
          {letter === ''
            ? 'START'
            : // : categories.length === 0
              // ? 'NO CATEGORIES'
              'NEXT'}
        </button>
      </section>
    </div>
  );
};
export default App;
