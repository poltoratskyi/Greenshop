import { useForm } from "react-hook-form";
import Container from "../cart-order-container";
import Wrapper from "../cart-order-wrapper";
import Inputs from "./inputs";
import Review from "../cart-order-review";
import ItemTable from "../item-table";
import { headerData } from "./static-data";
import Summary from "../cart/summary";
import Button from "../../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckoutFormFields,
  checkoutFormSchema,
} from "../../../schemas/checkout-form-schema";

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormFields>({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      address: "",
      city: "",
      email: "",
      phone: "",
      state: "",
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
            <Inputs register={register} control={control} error={errors} />
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
