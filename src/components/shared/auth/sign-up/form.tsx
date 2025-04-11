"use client";

import { useForm } from "react-hook-form";
import Input from "../../../ui/common-form-elements/input/input";
import Button from "../../../ui/button";
import Style from "./sing-up.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema, SignUpFormFields } from "../../../../schemas";
import Container from "../../../ui/common-form-elements/container/container";
import Error from "../../../ui/common-form-elements/error/error";
import { useState } from "react";
import { registerUser } from "../../../../app/actions";
import { useCloseModalAuthentication, useToast } from "../../../../hooks";
import { useUIStore } from "../../../../store";
import { useRouter } from "next/navigation";

const Form: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useCloseModalAuthentication();
  const setIsModalActionOpen = useUIStore(
    (state) => state.setIsModalActionOpen
  );

  const { showToast } = useToast();

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
        await showToast("Something went wrong", false);
        setIsLoading(false);

        return;
      }

      await showToast("You have successfully created an account", true);
      setIsModalActionOpen(true);
      closeModal();
      reset();
      router.push("/");
    } catch (error) {
      await showToast("Something went wrong", false);
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
