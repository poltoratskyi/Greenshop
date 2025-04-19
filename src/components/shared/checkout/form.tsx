import { useForm } from "react-hook-form";
import { Container, Review, Wrapper } from "../layout";
import InputFields from "./input-fields";
import ItemTable from "../item-table";
import { headerData } from "./static-data";
import Summary from "../cart/summary";
import Button from "../../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormFields, checkoutFormSchema } from "../../../schemas";
import { useUIStore, useOrderStore, useCartStore } from "../../../store";
import { useToast } from "@/hooks";

interface Props {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  country?: string;
  city?: string;
  address?: string;
  apartment?: string;
  state?: string;
}

interface Error {
  message: string;
}

const Form: React.FC<Props> = ({
  firstName,
  lastName,
  email,
  phone,
  country,
  city,
  address,
  apartment,
  state,
}) => {
  const setIsOrderOpen = useUIStore((state) => state.setIsOrderOpen);

  const isLoadingCart = useCartStore((state) => state.isLoading);

  const isLoading = useOrderStore((state) => state.isLoading);
  const error = useOrderStore((state) => state.error);
  const createOrder = useOrderStore((state) => state.createOrder);

  const { showToast } = useToast();

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
      firstName: firstName || "",
      lastName: lastName || "",
      country: country || "",
      address: address || "",
      apartment: apartment || "",
      city: city || "",
      email: email || "",
      phone: phone || "",
      state: state || "",
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
    };

    try {
      await createOrder(orderData);

      if (error) {
        const { message }: Error = error;

        setIsOrderOpen(false);
        showToast(message, false);
        return;
      }

      reset();
      setIsOrderOpen(true);
    } catch (error) {
      console.log("error", error);
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
            type="submit"
            disabled={isLoadingCart}
            isLoading={isLoading}
            value="Place Order"
            className="order"
          />
        </Review>
      </Container>
    </form>
  );
};
export default Form;
