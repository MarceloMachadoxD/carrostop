import "./styles.css";

const SearchBar = () => {
  return (
    <>
      <div className="search-card-container">
        <div className="link-card">
          <input type="text" defaultValue="Digite sua busca" />
          <button>BUSCAR</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
