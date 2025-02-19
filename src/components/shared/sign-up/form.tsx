"use client";

import { useForm } from "react-hook-form";
import { Control, UseFormRegister, FieldErrors } from "react-hook-form";
import Input from "@/components/ui/common-form-elements/input";
import Button from "../../ui/button";
import Style from "./sing-up.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signUpFormSchema,
  signUpFormFields,
} from "../../../schemas/sign-up-form-schema";
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
      <Input
        hiddenLabel
        id="firstName"
        type="text"
        placeholder="Your first name *"
        {...register("firstName")}
        error={errors.firstName}
      />

      <Input
        hiddenLabel
        id="email"
        type="email"
        placeholder="E-mail *"
        {...register("email")}
        error={errors.email}
      />

      <Input
        hiddenLabel
        id="password"
        type="password"
        placeholder="Password *"
        {...register("password")}
        error={errors.password}
      />

      <Input
        hiddenLabel
        id="repeat-password"
        type="password"
        placeholder="Repeat Password *"
        {...register("repeatPassword")}
        error={errors.repeatPassword}
      />

      <Button submit className="signUp" value="Register" />
    </form>
  );
};

export default Form;
