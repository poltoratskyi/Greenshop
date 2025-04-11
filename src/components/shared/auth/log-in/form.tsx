"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Style from "./login.module.scss";
import Button from "../../../ui/button";
import { logInFormSchema, LogInFormFields } from "../../../../schemas";
import { Error, Container, Input } from "../../../ui/common-form-elements";
import { signIn } from "next-auth/react";
import { useCloseModalAuthentication, useToast } from "../../../../hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useCloseModalAuthentication();

  const { showToast } = useToast();

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
        await showToast("Invalid email or password", false);
        setIsLoading(false);
        return;
      }

      await showToast("You have successfully logged in", true);
      closeModal();
      reset();
      router.push("/");
    } catch (error) {
      await showToast("Login failed", false);
      setIsLoading(false);
      console.error("Login error:", error);
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
