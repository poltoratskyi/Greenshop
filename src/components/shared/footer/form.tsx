"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../ui/button";
import { Container } from "../../ui/common-form-elements";
import { Input, Label, Error } from "../../ui/common-form-elements";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DiscountPopupFormFields,
  discountPopupFormSchema,
} from "../../../schemas";
import { useUIStore } from "../../../store";
import { createSubscription } from "../../../app/actions";
import Style from "./footer.module.scss";
import { discountUtils } from "../../../lib/client";

interface Props {
  setIsSendEmail: (value: boolean) => void;
}

const Form: React.FC<Props> = ({ setIsSendEmail }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const setIsDiscountSuccess = useUIStore(
    (state) => state.setIsDiscountSuccess
  );

  const setIsDiscountPopupOpen = useUIStore(
    (state) => state.setIsDiscountPopupOpen
  );

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
        discountUtils({ isDiscountClosed: true });
        setIsDiscountPopupOpen(true);
        setIsDiscountSuccess(true);
        reset();
        setIsLoading(false);
        setIsSendEmail(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsSendEmail(false);
      setIsError(true);
      console.log("error", error);
    }
  };

  return (
    <form className={Style.form} onSubmit={handleSubmit(onSubmit)}>
      <Label
        label="Would you like to join newsletters?"
        name="join"
        mark="join"
        feedback
      />

      <div className={Style.wrapper}>
        <Container>
          <Input
            id="join"
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
          type="submit"
          isLoading={isLoading}
          value="Subscribe"
          className="discountPopup"
        />
      </div>
    </form>
  );
};

export default Form;
