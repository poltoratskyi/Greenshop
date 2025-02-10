import Wrapper from "../../ui/cart-order-wrapper";
import Container from "../../ui/cart-order-container";
import Pathname from "../pathname";
import Address from "./address";
import Style from "./checkout.module.scss";
import Order from "./order";

const Checkout: React.FC = () => {
  return (
    <>
      <Pathname second="Checkout" />

      <section className={Style.checkout}>
        <div className="container">
          <Container>
            <Wrapper>
              <Address />
            </Wrapper>

            <Order />
          </Container>
        </div>
      </section>
    </>
  );
};

export default Checkout;
