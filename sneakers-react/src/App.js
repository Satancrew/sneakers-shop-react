import React, { useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const shoes = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999',
    imageUrl: './img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '15 699',
    imageUrl: './img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '8 499',
    imageUrl: './img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999',
    imageUrl: './img/sneakers/4.jpg',
  },
];

function App() {

  const [] = useState();
  
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="content__search d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex content__items">
          {shoes.map(el => (
            <Card
              title={el.title}
              price={el.price}
              imageUrl={el.imageUrl}
              onClickFavorite={() => console.log('zakladka')}
              onClickPlus={() => console.log(el.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
