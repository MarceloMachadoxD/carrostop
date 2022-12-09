import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";

function Catalog() {
  return (
    <>
      <div className="catalog-container">
        <SearchBar />
        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
