import "./styles.css";
import Car from "../../assets/images/catalog-car.png";
import SearchBar from "../../components/SearchBar/SearchBar";

function Catalog() {
  return (
    <>
      <div className="catalog-container">
        <SearchBar />
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
