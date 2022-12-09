import "./styles.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";

function Catalog() {
  return (
    <>
      <div className="catalog-container">
        <SearchBar />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default Catalog;
