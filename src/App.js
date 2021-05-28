import "./App.css";
import MainButton from "./components/Button/Button";
import SecondaryButton from "./components/CategoryButton/CategoryButton";
import ProductCard from "./components/ProductCard/ProductCard";
import ArticleCard from "./components/ArticleCard/ArticleCard";

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
        <MainButton title="Se sesongens planter" />
        </div>
      </div>
      <div className="content-inset">
        <div className="categorybutton-grid">
          <SecondaryButton title="Inneplanter" />
          <SecondaryButton title="Uteplanter" />
          <SecondaryButton title="Potter" />
          <SecondaryButton title="Dyrke selv" />
          <SecondaryButton title="Jord" />
        </div>

        <h2>Populært i dag</h2>
        <div className="productcard-grid">
          <ProductCard
            title="Strelitzia 'Nicolai"
            imageUrl="plants.jpg"
            price="150"
            subtitle1="Lettstelt"
          />
          <ProductCard
            title="Monstera"
            imageUrl="plants.jpg"
            price="1150"
            subtitle1="Test"
          />
          <ProductCard
            title="Monstera"
            imageUrl="plants.jpg"
            price="1150"
            subtitle1="Test"
          />
          <ProductCard
            title="Monstera"
            imageUrl="plants.jpg"
            price="1150"
            subtitle1="Test"
          />
        </div>
        <div>
          <h2>Godt å vite</h2>
          <div className="articlecard-grid">
            <ArticleCard
              name="Hvilke potter er best?"
              subtitle="Det finnes mange forskjellige potter. Plantemagasinet viser deg hva du burde velge."
              imageUrl="potter.jpg"
              link="https://www.plantemagasinet.no/post/hvilken-potte-skal-du-bruke"
              buttonTitle="Les mer ↗"
            />
            <ArticleCard
              name="Hvordan vanne blomster?"
              subtitle="Er du nysjerig på hvordan skal man vanne blomster? Se Pick Up Limes:"
              imageUrl="vanneblomster.jpg"
              link="https://www.pickuplimes.com/video/houseplant-care-tips-for-beginners-78"
              buttonTitle="Se video ↗"
            />
            <ArticleCard
              name="Den beste jord!"
              subtitle="Lær hvordan man får næringsrik jord som plantene trives i."
              imageUrl="jord.jpg"
              link="https://www.youtube.com/"
              buttonTitle="Les mer ↗"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
