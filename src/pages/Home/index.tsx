import "./styles.css";

import Car from "../../assets/images/home-car.png";
function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-banner">
          <img src={Car} alt="carro vermelho" />
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
