function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Корзина
            <img
              className="drawer__remove-btn cu-p"
              src="./img/btn-remove.svg"
              alt="Remove"
            />
          </h2>
          <div className="drawer__items">
            <div className="drawer__cart-item d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(./img/sneakers/1.jpg' }}
                className="drawer__cart-item-img"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="drawer__remove-btn"
                src="./img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="drawer__cart-item d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(./img/sneakers/2.jpg' }}
                className="drawer__cart-item-img"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="drawer__remove-btn"
                src="./img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="drawer__cart-total">
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог: </span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="green-btn">
              Оформить заказ <img src="./img/btn-arrow.svg" alt="btn-arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="./img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">Sneakers Shop</h3>
            <p className="opacity-5">Онлайн магазин кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="./img/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="./img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="content__search d-flex">
            <img src="./img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="content__card">
            <div className="favorite">
              <img src="./img/card-heart-no.svg" alt="notliked" />
            </div>
            <img
              width={133}
              height={112}
              src="./img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="./img/button.svg"
                  alt="button"
                />
              </button>
            </div>
          </div>
          <div className="content__card">
            <div className="favorite">
              <img src="./img/card-heart-no.svg" alt="notliked" />
            </div>
            <img
              width={133}
              height={112}
              src="./img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="./img/button.svg"
                  alt="button"
                />
              </button>
            </div>
          </div>
          <div className="content__card">
            <div className="favorite">
              <img src="./img/card-heart-no.svg" alt="notliked" />
            </div>
            <img
              width={133}
              height={112}
              src="./img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="./img/button.svg"
                  alt="button"
                />
              </button>
            </div>
          </div>
          <div className="content__card">
            <div className="favorite">
              <img src="./img/card-heart-no.svg" alt="notliked" />
            </div>
            <img
              width={133}
              height={112}
              src="./img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img
                  width={11}
                  height={11}
                  src="./img/button.svg"
                  alt="button"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
