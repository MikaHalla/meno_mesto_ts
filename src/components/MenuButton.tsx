import { useContext } from 'react';
import AppContext from '../context/AppContext';

interface MenuButton {
  text: 'ABCD' | 'ĎChQW';
  action: () => void;
  activeStyle: 'easy' | 'hard';
}

const MenuButton = ({ text, action, activeStyle }: MenuButton) => {
  const { difficulty } = useContext(AppContext);

  return (
    <h1
      className={`w-min cursor-pointer font-bold ${
        activeStyle === difficulty
          ? 'border-b-[5px] border-black pb-1 text-black'
          : 'text-gray-300'
      }`}
      onClick={action}
    >
      {text}
    </h1>
  );
};
export default MenuButton;
