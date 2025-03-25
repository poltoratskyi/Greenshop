"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Style from "./login.module.scss";
import Button from "../../../ui/button";
import { logInFormSchema, LogInFormFields } from "../../../../schemas";
import { Error, Container, Input } from "../../../ui/common-form-elements";
import { signIn } from "next-auth/react";
import { useUIStore } from "../../../../store";
import { useCloseModalAuthentication } from "../../../../hooks";
import { useState } from "react";

const Form: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useCloseModalAuthentication();

  const setIsAuthErrorOpen = useUIStore((state) => state.setIsAuthErrorOpen);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LogInFormFields>({
    resolver: zodResolver(logInFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LogInFormFields) => {
    try {
      setIsLoading(true);

      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!response?.ok) {
        setIsAuthErrorOpen(true);
        setIsLoading(false);
        return;
      }

      closeModal();

      reset();
    } catch (error) {
      setIsLoading(false);
      console.log("error login", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={Style.login} onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Input
          id="login-email"
          type="email"
          placeholder="E-mail *"
          {...register("email")}
          error={errors.email}
        />

        {errors.email && <Error error={errors.email} />}
      </Container>

      <Container>
        <Input
          id="login-password"
          type="password"
          placeholder="Password *"
          {...register("password")}
          error={errors.password}
        />

        {errors.password && <Error error={errors.password} />}
      </Container>

      <div className={Style.reset}>
        <Link href="#">Forgot Password?</Link>
      </div>

      <Button
        type="submit"
        isLoading={isLoading}
        className="logIn"
        value="Log In"
      />
    </form>
  );
};

export default Form;
