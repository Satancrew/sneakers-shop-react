export default function Card() {
  return (
    <div className="content__card">
      <div className="favorite">
        <img src="./img/card-heart-no.svg" alt="notliked" />
      </div>
      <img width={133} height={112} src="./img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button>
          <img width={11} height={11} src="./img/button.svg" alt="button" />
        </button>
      </div>
    </div>
  );
}
