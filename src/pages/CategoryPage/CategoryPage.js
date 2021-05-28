import CategoryButton from "../../components/CategoryButton/CategoryButton";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./CategoryPage.css";

function CategoryPage() {
  return (
    <div className="content-inset">
      <h1>Inneplanter</h1>
      <h3>Inneplanter skaper et levende hjem og gir bedre luft. Hos oss finner du alltid herlig blomstrende og friske grønne planter i forskjellige former og størrelser som passer i alle hjem. Med levende planter i hjemmet får du et renere og friskere innemiljø.</h3>
      <div className="categorybutton-grid">
      <CategoryButton 
      title="Grønne planter"/>
       <CategoryButton 
      title="Blomstrende inneplanter"/>
       <CategoryButton 
      title="Buketter og snittblomster"/>
      <CategoryButton 
      title="Stiklinger fra potteplanter"/>
      </div>
      <img className="img-category" src={"images/plante-category.png"} alt="plants" />
      <Header 
      title="Grønne planter"/>
      <Header 
      title="Blomstrende inneplanter"/>
      <Header 
      title="Buketter og snittblomster"/>
      <Header 
      title="Stiklinger fra potteplanter"/>
      <ProductCard />
    </div>
  );
}

export default CategoryPage;
