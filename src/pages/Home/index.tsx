import "./styles.css";
import { Link } from "react-router-dom";

import Car from "../../assets/images/home-car.png";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-banner">
            <img src={Car} alt="carro amarelo" />
            <div className="home-banner-text">
              <h1>O carro perfeito para você</h1>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
          </div>
        </div>
        <div className="link-card-container">
          <div className="link-card">
            <Link to="/products">
              <button>VER CATALOGO</button>
            </Link>
            <p>Comece agora a Navegar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
