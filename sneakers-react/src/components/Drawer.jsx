export default function Drawer({ onClose, onRemove, shoes = [] }) {
  console.log(shoes);
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
          {shoes.map((el, index) => (
            <div key={index} className="drawer__cart-item d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${el.imageUrl})` }}
                className="drawer__cart-item-img"></div>
              <div className="mr-20 flex cu-p">
                <p className="mb-5">{el.title}</p>
                <b>{el.price} руб.</b>
              </div>
              <img
                onClick={() => onRemove(el.id)}
                className="drawer__remove-btn"
                src="./img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
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
