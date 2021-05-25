import './App.css';
import MainCategory from './components/MainCategory/MainCategory';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <main> 
      <img src={"images/plants.jpg"} alt="plants" className="picture"/>
      <h1 className="title">Planter</h1>
      <p className="subtitle">Vi har stort utvalg av sesongens planter, bli inspirert av naturen</p>

      <div className="content-inset">
        <div className="maincategory-grid">
          <MainCategory />
        </div>

        <div className="productcard-grid">
          <ProductCard />
        </div>
    </div>
  </main>
  );
}

export default App;
