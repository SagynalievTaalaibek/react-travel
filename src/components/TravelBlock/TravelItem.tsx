import React from 'react';

interface Props {
  name: string;
  region: number;
  description: string;
  price: number;
  img: string;
  book: React.MouseEventHandler;
}

const TravelItem: React.FC<Props> = ({
  name,
  region,
  description,
  price,
  img,
  book,
}) => {
  const regions = ['Иссык-Куль', 'Чуй', 'Жалал Абад', 'Ош', 'Нарын'];

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={name} />
      </div>
      <div className="cart-text">
        <div>
          <div className="card-title">
            <p>{name}</p>
            <span>
              Price: <strong>{price}</strong>
            </span>
          </div>
          <strong className="region">{regions[region]}</strong>
          {description}
        </div>
      </div>
      <div className="card-link">
        <button className="btn" onClick={book}>
          Book
        </button>
      </div>
    </div>
  );
};

export default TravelItem;
