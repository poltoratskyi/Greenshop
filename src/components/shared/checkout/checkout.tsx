import Pathname from "../pathname";
import Style from "./checkout.module.scss";
import Form from "./form";

const Checkout: React.FC = () => {
  return (
    <>
      <Pathname second="Checkout" />

      <section className={Style.checkout}>
        <div className="container">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Checkout;
