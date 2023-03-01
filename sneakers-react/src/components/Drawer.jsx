export default function Drawer({ onClose }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className="drawer__remove-btn cu-p"
            src="./img/btn-remove.svg"
            alt="Remove"
            onClick={onClose}
          />
        </h2>
        <div className="drawer__items">
          <div className="drawer__cart-item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(./img/sneakers/1.jpg' }}
              className="drawer__cart-item-img"></div>
            <div className="mr-20 flex cu-p">
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
  );
}
