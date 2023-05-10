import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import CategorySvg from './CategorySvg';

interface Category {
  name?: string;
  bgColor?: string;
}

const CategoryButton = ({ name, bgColor }: Category) => {
  const [active, setActive] = useState(true);
  // const { tgCategory } = useContext(AppContext);

  const handleClick = (category: any) => {
    setActive(!active);
    // tgCategory(category);
  };

  return (
    <div
      className="category-icon"
      onClick={() => handleClick(name)}
      style={active ? { fill: 'black' } : { fill: 'lightgray' }}
    >
      <CategorySvg name={name} bgColor={bgColor} />
    </div>
  );
};
export default CategoryButton;
