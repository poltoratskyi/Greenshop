import { useForm } from "react-hook-form";
import Container from "../../ui/cart-order-container";
import Wrapper from "../../ui/cart-order-wrapper";
import InputFields from "./input-fields";
import Review from "../../ui/cart-order-review";
import ItemTable from "../item-table";
import { headerData } from "./static-data";
import Summary from "../cart/summary";
import Button from "../../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormFields, checkoutFormSchema } from "../../../schemas";
import { useUIStore } from "../../../store";

const Form: React.FC = () => {
  const setIsOrderOpen = useUIStore((state) => state.setIsOrderOpen);
  const setIsOrderSuccess = useUIStore((state) => state.setIsOrderSuccess);

  const {
    control,

    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    resetField,
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
    try {
      setIsOrderSuccess(true);
      setIsOrderOpen(true);
      console.log(data);
      reset();
      resetField("zip");
    } catch (error) {
      setIsOrderSuccess(false);
      setIsOrderOpen(false);
      console.error("Error during submission:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Wrapper>
          <Review title="Billing Address">
            <InputFields
              control={control}
              error={errors}
              setValue={setValue}
              register={register}
              watch={watch}
            />
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
