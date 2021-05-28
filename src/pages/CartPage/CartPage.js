import MainButton from "../../components/MainButton/MainButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";


function CartPage() {
  return (
    <div class="content-inset">
      <h1>Handlekurv</h1>
    <MainButton 
      title="Fortsett"/>
    <SecondaryButton 
      title="Tøm handlekurven"/>
    </div>
  );
}
export default CartPage;
