import "./styles.css";
import Car from "../../assets/images/catalog-car.png";

const ProductCard = () => {
  return (
    <>
      <div className="link-card-container catalog-card-container">
        <img src={Car} alt="carro vermelho" />
        <h1>Audi Supra TT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <div className="link-card">
          <button>COMPRAR</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
