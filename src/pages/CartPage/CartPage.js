import MainButton from "../../components/MainButton/MainButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";


function CartPage() {

  function showError() {
    alert("Ikke tilgjengelig. Dette er jo bare en fiktiv nettbutikk :)");
  }

  return (
    <div class="content-inset">
      <h1>Handlekurv</h1>
      <p>Din handlekurv er tom.</p>
    <MainButton 
      title="Gå til kassen"
      onClick={showError}
      />
    <SecondaryButton 
      title="Tøm handlekurven"/>
    </div>
  );
}
export default CartPage;
