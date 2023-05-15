import { useContext } from 'react';
import AppContext from './context/AppContext';
import MenuButton from './components/MenuButton';
import CategorySvg from './components/CategorySvg';
import CategoryButton from './components/CategoryButton';
import ScoreBoard from './components/ScoreBoard';
import { defaultCategories } from './constants/categories';
import NextTurnBtn from './components/NextTurnBtn';

const App = () => {
  const {
    mobileMenu,
    tgMobileMenu,
    increaseDifficulty,
    decreaseDifficulty,
    letter,

    category,
  } = useContext(AppContext);

  return (
    <div
      className="flex h-screen w-screen items-center justify-center p-8"
      style={{
        background: `radial-gradient(circle, ${category.bgColor} 0%, hsl(0, 0%, 25%) 90%)`,
      }}
    >
      <section
        className={`absolute z-10 flex h-screen w-screen -translate-y-full justify-center bg-gray-100 p-8 text-black transition-transform duration-500 ease-in-out ${
          mobileMenu && 'translate-y-0'
        }`}
      >
        <div className="relative flex h-full w-full max-w-3xl flex-col justify-center">
          <i
            className="fa-solid fa-xmark absolute right-0 top-0 cursor-pointer text-3xl text-black"
            onClick={tgMobileMenu}
          ></i>

          <div className="mb-16 flex w-full max-w-3xl justify-end pt-12 text-4xl xs:mb-32 xs:justify-around">
            <MenuButton
              text="ABCD"
              action={decreaseDifficulty}
              activeStyle="easy"
            />
            <span className="basis-2/5"></span>
            <MenuButton
              text="ĎChQW"
              action={increaseDifficulty}
              activeStyle="hard"
            />
          </div>
          <div className="grid w-full max-w-3xl grid-cols-3 justify-items-center gap-12 xs:gap-24 sm:grid-cols-4 landscape:gap-32">
            {defaultCategories.map((element) => (
              <CategoryButton key={element.name} {...element} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex h-full w-full max-w-3xl flex-col items-center justify-end">
        <div className="h-full w-full lg:w-3/4 2xl:w-full">
          <CategorySvg {...category} />
        </div>

        <div
          className="fa-icon absolute right-0 top-0 cursor-pointer text-2xl"
          onClick={tgMobileMenu}
        >
          <i className="fa-solid fa-gear"></i>
        </div>

        <div className="absolute bottom-2/4 translate-y-2/4 select-none text-[70vw] font-bold landscape:text-[20rem]">
          {letter}
        </div>

        {letter && <ScoreBoard />}

        <NextTurnBtn />
      </section>
    </div>
  );
};
export default App;
