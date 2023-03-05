import { React, useEffect, useState } from 'react';
import './Card.scss';

export default function Card({ title, price, imageUrl, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickAdded = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {}, [isAdded]);

  return (
    <div className="content__card">
      <div className="favorite">
        <img
          onClick={onClickFavorite}
          src={
            isFavorite ? './img/card-heart-yes.svg' : './img/card-heart-no.svg'
          }
          alt="notliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="content__btn" onClick={onClickAdded}>
          <img
            src={isAdded ? './img/btn-checked.svg' : './img/button.svg'}
            alt="button"
          />
        </button>
      </div>
    </div>
  );
}
