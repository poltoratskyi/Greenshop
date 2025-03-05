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
import { useUIStore, useOrderStore } from "../../../store";

const Form: React.FC = () => {
  const setIsOrderOpen = useUIStore((state) => state.setIsOrderOpen);
  const setIsOrderSuccess = useUIStore((state) => state.setIsOrderSuccess);

  const addUserOrder = useOrderStore((state) => state.addUserOrder);
  const isLoading = useOrderStore((state) => state.isLoading);

  const {
    control,

    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormFields>({
    resolver: zodResolver(checkoutFormSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      address: "",
      apartment: "",
      city: "",
      email: "",
      phone: "",
      state: "",
      zip: "",
      notes: "",
    },
  });

  const onSubmit = async (data: CheckoutFormFields) => {
    const orderData = {
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      address: data.address,
      apartment: data.apartment,
      city: data.city,
      email: data.email,
      phone: data.phone,
      state: data.state,
      zip: data.zip,
      notes: data.notes,
      items: JSON,
    };
    try {
      await addUserOrder(orderData);
      reset();

      setIsOrderSuccess(true);
      setIsOrderOpen(true);
    } catch (error) {
      setIsOrderSuccess(false);
      setIsOrderOpen(false);
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
          <Button
            isLoading={isLoading}
            formSubmitted
            value="Place Order"
            className="order"
          />
        </Review>
      </Container>
    </form>
  );
};
export default Form;
