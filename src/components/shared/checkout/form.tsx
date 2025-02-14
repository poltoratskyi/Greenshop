"use client";

import { useForm } from "react-hook-form";
import Container from "../../ui/cart-order-container";
import Wrapper from "../../ui/cart-order-wrapper";
import InputFields from "./Input-fields";
import Review from "../../../components/ui/cart-order-review";
import ItemTable from "../item-table";
import { headerData } from "./static-data";
import Summary from "../cart/summary";
import Button from "../../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckoutFormFields,
  checkoutFormSchema,
} from "../../../schemas/checkout-form-schema";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormFields>({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      email: "",
      phone: "",
      country: "",
      zip: "",
      message: "",
    },
  });

  const onSubmit = (data: CheckoutFormFields) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Wrapper>
          <Review title="Billing Address">
            <InputFields register={register} errors={errors} />
          </Review>
        </Wrapper>

        <Review summaryWidth title="Your Order">
          <ItemTable hiddenColumns hiddenQtyBtns headerData={headerData} />
          <Summary />
          <Button submit value="Place Order" className="order" />
        </Review>
      </Container>
    </form>
  );
};
export default Form;
