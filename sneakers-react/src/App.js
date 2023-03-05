import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [shoes, setShoes] = useState([]);
  const [cartShoes, setCartShoes] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://63ff2ca1571200b7b7d76d05.mockapi.io/items').then(res => {
      setShoes(res.data);
    });
    axios.get('https://63ff2ca1571200b7b7d76d05.mockapi.io/cart').then(res => {
      setCartShoes(res.data);
    });
  }, []);

  const onAddToCart = product => {
    axios.post('https://63ff2ca1571200b7b7d76d05.mockapi.io/cart', product);
    setCartShoes(prev => [...prev, product]);
  };

  const onRemoveProduct = id => {
    axios.delete(`https://63ff2ca1571200b7b7d76d05.mockapi.io/cart/${id}`);
    setCartShoes(prev => prev.filter(item => item.id !== id));
  };


  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer
          shoes={cartShoes}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveProduct}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="content__search d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input
              placeholder="Поиск..."
              value={searchValue}
              onChange={onChangeSearchInput}
            />
          </div>
        </div>
        <div className="d-flex content__items">
          {shoes
            .filter(el =>
              el.title.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((el, index) => (
              <Card
                key={index}
                title={el.title}
                price={el.price}
                imageUrl={el.imageUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={el => onAddToCart(el)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
