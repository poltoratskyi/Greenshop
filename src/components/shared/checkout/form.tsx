import { useForm } from "react-hook-form";
import { Container, Review, Wrapper } from "../layout";
import InputFields from "./input-fields";
import ItemTable from "../item-table";
import { headerData } from "./static-data";
import Summary from "../cart/summary";
import Button from "../../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutFormFields, checkoutFormSchema } from "../../../schemas";
import { useUIStore, useOrderStore } from "../../../store";

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
  const setIsOrderSuccess = useUIStore((state) => state.setIsOrderSuccess);

  const isLoading = useOrderStore((state) => state.isLoading);
  const addUserOrder = useOrderStore((state) => state.addUserOrder);
  const loadUserOrder = useOrderStore((state) => state.loadUserOrder);

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
      await addUserOrder(orderData);
      loadUserOrder(data.email);
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
            type="submit"
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
