import { useState } from "react";
import Style from "./popup.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../ui/button";
import { Input } from "../../../ui/common-form-elements";
import { Error } from "../../../ui/common-form-elements";
import {
  DiscountPopupFormFields,
  discountPopupFormSchema,
} from "../../../../schemas";
import Container from "../../../ui/common-form-elements/container";
import { createSubscription } from "../../../../app/actions";
import { useUIStore } from "../../../../store";
import { useDiscountStatus } from "../../../../hooks";
import { discountUtils } from "../../../../lib/client";

const Form: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const isDiscountSuccess = useUIStore((state) => state.isDiscountSuccess);

  const setIsDiscountSuccess = useUIStore(
    (state) => state.setIsDiscountSuccess
  );

  const { discountStatus } = useDiscountStatus();

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<DiscountPopupFormFields>({
    resolver: zodResolver(discountPopupFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: DiscountPopupFormFields) => {
    try {
      setIsLoading(true);
      const { email } = data;

      const result = await createSubscription({ email });

      if (!result.success) {
        setIsError(true);
        setIsLoading(false);
      } else {
        setIsError(false);
        setIsDiscountSuccess(true);
        discountUtils({ isDiscountClosed: true });
        reset();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  };

  return (
    <>
      {!discountStatus && !isDiscountSuccess && (
        <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Input
              id="discount-popup-email"
              type="email"
              placeholder="E-mail *"
              {...register("email")}
              error={errors.email}
            />

            {errors.email ? (
              <Error error={errors.email} />
            ) : (
              isError && (
                <span className={Style.error}>
                  You are already subscribed to this newsletter!
                </span>
              )
            )}
          </Container>

          <Button
            isLoading={isLoading}
            value="Subscribe"
            className="discountPopup"
            type="submit"
          />
        </form>
      )}
    </>
  );
};

export default Form;
