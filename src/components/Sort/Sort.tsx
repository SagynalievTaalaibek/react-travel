import { useState } from 'react';

const Sort = () => {
  const [show, setShow] = useState(false);
  const [listIndex, setListIndex] = useState(0);
  const list = ['цена', 'алфавит'];

  const onClickListItem = (index: number) => {
    setListIndex(index);
    setShow(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={() => setShow(!show)}>{list[listIndex]}</span>
      </div>
      {show && (
        <div className="sort__popup">
          <ul>
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(index)}
                className={listIndex === index ? 'active' : ''}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
