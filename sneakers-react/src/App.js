import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [shoes, setShoes] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://63ff2ca1571200b7b7d76d05.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setShoes(json);
      });
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
