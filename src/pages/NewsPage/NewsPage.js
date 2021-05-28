import ProductCard from "../../components/ProductCard/ProductCard";
import { planter } from "../../planter";

function NewsPage() {
    return (
      <div className="content-inset">
        <h1>Nyheter</h1>
        <div className="productcard-grid">
          {
            planter.map((data, key) => {
              return (
                <ProductCard 
                  key={data.id}
                  id={data.id}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
  export default NewsPage;
  