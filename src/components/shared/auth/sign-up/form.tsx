"use client";

import { useForm } from "react-hook-form";
import Input from "../../../ui/common-form-elements/input";
import Button from "../../../ui/button";
import Style from "./sing-up.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema, SignUpFormFields } from "../../../../schemas";
import Container from "../../../ui/common-form-elements/container";
import Error from "../../../ui/common-form-elements/error";
import { useState } from "react";
import { registerUser } from "@/app/actions";
import { useCloseModalAuthentication } from "@/hooks";
import { useUIStore } from "@/store";

const Form: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useCloseModalAuthentication();
  const setIsAuthErrorOpen = useUIStore((state) => state.setIsAuthErrorOpen);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(signUpFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = async (data: SignUpFormFields) => {
    try {
      setIsLoading(true);

      const response = await registerUser({
        firstName: data.firstName,
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
      });

      if (!response?.success) {
        setIsAuthErrorOpen(true);
        setIsLoading(false);
        return;
      }

      closeModal();

      reset();
    } catch (error) {
      setIsLoading(false);
      console.log("error sign up", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={Style.signUp} onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Input
          id="sign-up-first-name"
          type="text"
          placeholder="Your first name *"
          {...register("firstName")}
          error={errors.firstName}
        />

        {errors.firstName && <Error error={errors.firstName} />}
      </Container>

      <Container>
        <Input
          id="sign-up-email"
          type="email"
          placeholder="E-mail *"
          {...register("email")}
          error={errors.email}
        />

        {errors.email && <Error error={errors.email} />}
      </Container>

      <Container>
        <Input
          id="sign-up-password"
          type="password"
          placeholder="Password *"
          {...register("password")}
          error={errors.password}
        />

        {errors.password && <Error error={errors.password} />}
      </Container>

      <Container>
        <Input
          id="sign-up-repeat-password"
          type="password"
          placeholder="Repeat Password *"
          {...register("repeatPassword")}
          error={errors.repeatPassword}
        />

        {errors.repeatPassword && <Error error={errors.repeatPassword} />}
      </Container>

      <Button
        type="submit"
        isLoading={isLoading}
        className="signUp"
        value="Register"
      />
    </form>
  );
};

export default Form;
