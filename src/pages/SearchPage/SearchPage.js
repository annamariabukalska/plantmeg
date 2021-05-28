import ProductCard from "../../components/ProductCard/ProductCard";
import { planter } from "../../planter";

function SearchPage(props) {

    const results = planter.find(item => item.title.toLowerCase === props.match.params.id.toLowerCase)

    return (
      <div className="content-inset">
        <h1>Søkeresultater</h1>
        <p>{props.match.params.id}</p>
        <div className="productcard-grid">
          {
              results !== undefined &&
             <ProductCard 
              key={results.id}
              id={results.id}
              />
            }
        </div>
      </div>
    );
  }
  export default SearchPage;
  