import Wrapper from "../../ui/cart-order-wrapper";
import Container from "../../ui/cart-order-container";
import Pathname from "../pathname";
import Input from "../../ui/checkout-form/input";
import Style from "./checkout.module.scss";
import Form from "../../ui/checkout-form/checkout-form";
import { headerData, inputFields } from "./static-data";
import ItemTable from "../item-table";
import Summary from "../cart/summary";
import Button from "../../../components/ui/button";
import Review from "../../../components/ui/cart-order-review";

const Checkout: React.FC = () => {
  return (
    <>
      <Pathname second="Checkout" />

      <section className={Style.checkout}>
        <div className="container">
          <Form>
            <Container>
              <Wrapper>
                <Review title="Billing Address">
                  <div className={Style.content}>
                    {inputFields.map((field) => (
                      <Input
                        key={field.id}
                        id={field.id}
                        type="text"
                        name={field.name}
                        label={field.label}
                        placeholder={field.placeholder}
                      />
                    ))}
                  </div>
                </Review>
              </Wrapper>

              <Review summaryWidth title="Your Order">
                <ItemTable
                  hiddenColumns
                  hiddenQtyBtns
                  headerData={headerData}
                />
                <Summary />
                <Button submit value="Place Order" className="order" />
              </Review>
            </Container>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
