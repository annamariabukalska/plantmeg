import "./App.css";
import Button from "./components/Button/Button";
import CategoryButton from "./components/CategoryButton/CategoryButton";
import ProductCard from "./components/ProductCard/ProductCard";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import { Link } from "react-router-dom";

function App() {
  return (
    <main>
      <div className="featured-section">
        <img src={"images/plants.png"} alt="plants" className="picture" />
        <div className="content-box">
        <h1 className="title">Planter</h1>
        <p className="subtitle">
          Vi har et stort utvalg av sesongens planter, bli inspirert av naturen og få rask levering 🏡
        </p>
        <Button title="Se sesongens planter" />
        </div>
      </div>
      <div className="content-inset">
        <div className="categorybutton-grid">
          <CategoryButton title="Inneplanter" />
        </div>

        <div className="productcard-grid">
          <ProductCard
            title="Strelitzia 'Nicolai"
            imageUrl="plants.jpg"
            price="150"
            subtitle2="Lettstelt"
          />
        </div>
        <div>
          <h1>Godt å vite</h1>
          <div className="articlecard-grid">
            <ArticleCard
              name="Hvordan vanne blomster?"
              subtitle1="Er du nysjerig på hvordan skal man vanne blomster?"
            />
          </div>
        </div>
        <Link to={"/kategori"}>Test: Link til kategori</Link>
      </div>
    </main>
  );
}

export default App;
