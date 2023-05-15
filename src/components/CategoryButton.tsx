import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import CategorySvg from './CategorySvg';

interface Category {
  name?: string;
  bgColor?: string;
  fillColor?: string;
}

const CategoryButton = ({ name, bgColor }: Category) => {
  const [active, setActive] = useState(true);
  const { tgCategory } = useContext(AppContext);

  const handleClick = (name: string) => {
    setActive(!active);
    tgCategory(name);
  };

  return (
    <div
      className={`${active ? 'fill-black' : 'fill-gray-300'}`}
      onClick={() => handleClick(name!)}
    >
      <CategorySvg name={name} bgColor={bgColor} isSmallIcon={true} />
    </div>
  );
};
export default CategoryButton;
