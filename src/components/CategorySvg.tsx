import Animal from '../svg/Animal';
import BoyName from '../svg/BoyName';
import City from '../svg/City';
import Clothing from '../svg/Clothing';
import Food from '../svg/Food';
import GirlName from '../svg/GirlName';
import Item from '../svg/Item';
import Occupation from '../svg/Occupation';
import Plant from '../svg/Plant';
import Sport from '../svg/Sport';
import World from '../svg/World';
import BodyPart from '../svg/BodyPart';

interface Category {
  name?: string;
  bgColor?: string;
  fillColor?: string;
}

const CategorySvg = ({ name, fillColor }: Category) => {
  return (
    <svg
      // className="h-16"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      style={{
        fill: `${fillColor}`,
      }}
    >
      {(name === 'animal' && <Animal />) ||
        (name === 'boyName' && <BoyName />) ||
        (name === 'city' && <City />) ||
        (name === 'clothing' && <Clothing />) ||
        (name === 'food' && <Food />) ||
        (name === 'girlName' && <GirlName />) ||
        (name === 'item' && <Item />) ||
        (name === 'occupation' && <Occupation />) ||
        (name === 'plant' && <Plant />) ||
        (name === 'sport' && <Sport />) ||
        (name === 'world' && <World />) ||
        (name === 'bodyPart' && <BodyPart />)}
    </svg>
  );
};
export default CategorySvg;
