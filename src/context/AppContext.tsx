import { createContext, ReactNode, useState } from 'react';
import { easyLetters, hardLetters } from '../constants/letters';

interface AppContext {
  mobileMenu: boolean;
  tgMobileMenu: () => void;
  difficulty: 'easy' | 'hard';
  increaseDifficulty: () => void;
  decreaseDifficulty: () => void;
  letter: string;
  nextTurn: () => void;
  pointAwarded: boolean;
  setPointAwarded: (prev: boolean) => void;
}

interface AppProvider {
  children: ReactNode;
}

const AppContext = createContext({} as AppContext);

export const AppProvider = ({ children }: AppProvider) => {
  const [letters, setLetters] = useState(easyLetters);
  const [letter, setLetter] = useState('');

  const [mobileMenu, setMobileMenu] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'hard'>(
    'easy'
  );
  const [pointAwarded, setPointAwarded] = useState(false);

  const tgMobileMenu = () => setMobileMenu(!mobileMenu);

  const increaseDifficulty = () => {
    setDifficulty('hard');
    setLetters(hardLetters);
  };
  const decreaseDifficulty = () => {
    setDifficulty('easy');
    setLetters(easyLetters);
  };

  const randomNumber = (max: number) =>
    Math.floor(Math.random() * max);

  const nextTurn = () => {
    let randomLetter = letters[randomNumber(letters.length)];
    randomLetter === '1' && (randomLetter = 'Ch');
    setLetter(randomLetter);
    // setCategory({ ...categories[randomNumber(categories.length)] });
    setPointAwarded(false);
  };

  return (
    <AppContext.Provider
      value={{
        mobileMenu,
        tgMobileMenu,
        difficulty,
        increaseDifficulty,
        decreaseDifficulty,
        letter,
        nextTurn,
        pointAwarded,
        setPointAwarded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
