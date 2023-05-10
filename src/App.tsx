import { useContext } from 'react';
import AppContext from './context/AppContext';
import MenuButton from './components/MenuButton';
import CategorySvg from './components/CategorySvg';
import CategoryButton from './components/CategoryButton';

const App = () => {
  const {
    mobileMenu,
    tgMobileMenu,
    increaseDifficulty,
    decreaseDifficulty,
    letter,
    nextTurn,
    categories,
    category,
  } = useContext(AppContext);

  return (
    <div
      className="background"
      style={{
        background: `radial-gradient(circle, ${category.bgColor} 0%, hsl(0, 0%, 25%) 90%)`,
      }}
    >
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
        <div className="categories">
          {categories.map((element) => (
            <CategoryButton
              key={element.name}
              name={element.name}
              bgColor={element.bgColor}
            />
          ))}
        </div>
      </section>
      <section className="game-area">
        <div className="category-bg">
          <CategorySvg {...category} />
        </div>
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
          onClick={() => nextTurn()}
          disabled={categories.length === 0}
        >
          {letter === ''
            ? 'START'
            : categories.length === 0
            ? 'NO CATEGORIES'
            : 'NEXT'}
        </button>
      </section>
    </div>
  );
};
export default App;
