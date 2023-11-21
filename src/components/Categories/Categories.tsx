import { useState } from 'react';
import Sort from '../Sort/Sort';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Иссык-Куль', 'Чуй', 'Жалал Абад', 'Ош', 'Нарын'];

  return (
    <div className="container">
      <div className="categories-wrap">
        <div className="categories">
          <ul>
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={activeIndex === index ? 'active' : ''}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <Sort />
      </div>
    </div>
  );
};

export default Categories;
