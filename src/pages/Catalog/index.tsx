import "./styles.css";
import Car from "../../assets/images/catalog-car.png";

function Catalog() {
  return (
    <>
      <div className="catalog-container">
        <div className="search-card-container">
          <div className="link-card">
            <input type="text" defaultValue="Digite sua busca" />
            <button>BUSCAR</button>
          </div>
        </div>
        <div className="link-card-container catalog-card-container">
          <img src={Car} alt="carro vermelho" />
          <h1>Audi Supra TT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
          <div className="link-card">
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="link-card-container catalog-card-container">
          <img src={Car} alt="carro vermelho" />
          <h1>Audi Supra TT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
          <div className="link-card">
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
