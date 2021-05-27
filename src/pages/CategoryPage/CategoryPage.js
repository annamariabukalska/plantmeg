import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./CategoryPage.css";

function CategoryPage() {
  return (
    <div>
      <h1>Inneplanter</h1>
      <h3>Inneplanter skaper et levende hjem og gir bedre luft. Hos oss finner du alltid herlig blomstrende og friske grønne planter i forskjellige former og størrelser som passer i alle hjem. Med levende planter i hjemmet får du et renere og friskere innemiljø.</h3>
      <CategoryButton />
      <img src={"images/plante-category.png"} alt="plants" />
      <Header 
      title="Blomstrende inneplanter"/>
      <ProductCard />
    </div>
  );
}

export default CategoryPage;
