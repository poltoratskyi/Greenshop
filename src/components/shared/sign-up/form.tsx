"use client";

import { useForm } from "react-hook-form";
import Input from "../../../components/ui/common-form-elements/input";
import Button from "../../ui/button";
import Style from "./sing-up.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormSchema, signUpFormFields } from "../../../schemas";
import Container from "../../ui/checkout-input-container";
import ErrorMessage from "../../ui/common-form-elements/error";
const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signUpFormFields>({
    resolver: zodResolver(signUpFormSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (data: signUpFormFields) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Style.signUp}>
      <Container>
        <Input
          id="firstName"
          type="text"
          placeholder="Your first name *"
          {...register("firstName")}
          error={errors.firstName}
        />

        <ErrorMessage error={errors.firstName} />
      </Container>

      <Container>
        <Input
          id="email"
          type="email"
          placeholder="E-mail *"
          {...register("email")}
          error={errors.email}
        />

        <ErrorMessage error={errors.email} />
      </Container>

      <Container>
        <Input
          id="password"
          type="password"
          placeholder="Password *"
          {...register("password")}
          error={errors.password}
        />

        <ErrorMessage error={errors.password} />
      </Container>

      <Container>
        <Input
          id="repeat-password"
          type="password"
          placeholder="Repeat Password *"
          {...register("repeatPassword")}
          error={errors.repeatPassword}
        />

        <ErrorMessage error={errors.repeatPassword} />
      </Container>

      <Button formSubmitted className="signUp" value="Register" />
    </form>
  );
};

export default Form;
