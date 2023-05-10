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
      className={activeStyle === difficulty ? 'easy' : 'hard'}
      onClick={action}
    >
      {text}
    </h1>
  );
};
export default MenuButton;
