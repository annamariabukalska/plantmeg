import MainButton from "../../components/MainButton/MainButton";
import SecondaryButton from "../../components/SecondaryButton/SeconadaryButton";


function CartPage() {
  return (
    <div class="content-inset">
      <h1>Handlekurv</h1>
    <div>
      <MainButton 
      title="Fortsett"/>
    </div>
    <div className="empty-cartpage">
      <SecondaryButton 
      title="Tøm handlekurven"/>
    </div>
    </div>
  );
}
export default CartPage;
