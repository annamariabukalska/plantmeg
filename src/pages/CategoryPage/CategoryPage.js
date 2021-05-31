import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./CategoryPage.css";

function CategoryPage() {
  return (
    <div className="content-inset">
      <h1>Inneplanter</h1>
      <h3>Inneplanter gjør at du puster bedre i ditt hjem. Ved å invitere inneplanter inn skaper du naturlig renhold av luft.Du alltid finner god kvalitet av blomstrer som kan skape gleder i hverdager. </h3>
      <div className="categorybutton-grid">
      <SecondaryButton 
        title="Grønne planter"/>
       <SecondaryButton 
        title="Blomstrende inneplanter"/>
       <SecondaryButton 
        title="Buketter og snittblomster"/>
      <SecondaryButton 
        title="Stiklinger fra potteplanter"/>
      </div>
      <img className="img-category" src={"/images/plante-category.png"} alt="plants" />
      <Header 
      title="Grønne planter"/>
        <ProductCard id="monstera" />
      <Header 
      title="Blomstrende inneplanter"/>
      <Header 
        title="Buketter"/>
      <Header 
        title="Stiklinger fra potteplanter"/>
    </div>
  );
}

export default CategoryPage;
