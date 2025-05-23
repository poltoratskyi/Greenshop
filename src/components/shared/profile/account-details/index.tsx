"use client";

import { User } from "../../../../types";
import { Review, Wrapper } from "../../layout";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Label,
  Error,
  Container,
} from "../../../../components/ui/common-form-elements";
import {
  ProfileAccountDetailsFormFields,
  profileAccountDetailsFormSchema,
} from "../../../../schemas";
import PhoneInput from "../../../ui/phone-input";
import { Content } from "../../layout";
import Button from "../../../../components/ui/button";
import { useEffect, useState } from "react";
import { updateUserProfile } from "../../../../app/actions";
import Toast from "../../toast";
import Loader from "../../../../components/ui/loader";
import { useToast, useToastHandling } from "../../../../hooks";

interface Props {
  data: User;
}

const AccountDetails: React.FC<Props> = ({ data }) => {
  const { firstName, lastName, email, phone } = data;

  const [loading, setLoading] = useState(!data);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const {
    isToastOpen,
    toastType,
    isSuccessToast,

    setIsToastOpen,
  } = useToastHandling();

  const { showToast } = useToast();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileAccountDetailsFormFields>({
    resolver: zodResolver(profileAccountDetailsFormSchema),
    mode: "onChange",
    defaultValues: {
      firstName: firstName ? firstName : "",
      lastName: lastName ? lastName : "",
      email: email ? email : "",
      phone: phone ? phone : "",
      newPassword: "",
      repeatPassword: "",
    },
  });

  const onSubmit = async (data: ProfileAccountDetailsFormFields) => {
    try {
      setIsLoading(true);

      const response = await updateUserProfile(data);

      if (!response.success) {
        await showToast(response.error || "Something went wrong", false);
        setIsLoading(false);
        return;
      }

      reset({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        newPassword: "",
        repeatPassword: "",
      });

      setValue("newPassword", "");
      setValue("repeatPassword", "");

      await showToast(response.message || "Something went wrong", true);
    } catch (error) {
      await showToast("Something went wrong", false);
      setIsLoading(false);
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <Wrapper>
        <Review title="Address">
          <Loader />
        </Review>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <Review title="Personal Information">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Content>
              <Container>
                <Label label="First Name" name="profile-first-name" />

                <Input
                  id="profile-first-name"
                  type="text"
                  placeholder="Your first name"
                  {...register("firstName")}
                  error={errors.firstName}
                />

                {errors.firstName && <Error error={errors.firstName} />}
              </Container>
              <Container>
                <Label label="Last Name" name="profile-last-name" />

                <Input
                  id="profile-last-name"
                  type="text"
                  placeholder="Your last name"
                  {...register("lastName")}
                  error={errors.lastName}
                />

                {errors.lastName && <Error error={errors.lastName} />}
              </Container>
              <Container>
                <Label label="Email Address" name="profile-email" />

                <Input
                  id="profile-email"
                  type="email"
                  placeholder="E-mail"
                  {...register("email")}
                  error={errors.email}
                />

                {errors.email && <Error error={errors.email} />}
              </Container>
              <Container>
                <Label label="Phone Number" name="phone" mark="phone" />

                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      country="us"
                      placeholder="Phone"
                      error={errors.phone}
                      {...field}
                    />
                  )}
                />
                {errors.phone && <Error error={errors.phone} />}
              </Container>

              <Container>
                <Label
                  label="New Password"
                  name="profile-new-password"
                  mark="profile-new-password"
                />

                <Input
                  id="profile-new-password"
                  type="password"
                  placeholder="New Password"
                  {...register("newPassword")}
                  error={errors.newPassword}
                />

                {errors.newPassword && <Error error={errors.newPassword} />}
              </Container>

              <Container>
                <Label
                  label="Repeat Password"
                  name="profile-repeat-password"
                  mark="profile-repeat-password"
                />

                <Input
                  id="profile-repeat-password"
                  type="password"
                  placeholder="Repeat Password"
                  {...register("repeatPassword")}
                  error={errors.repeatPassword}
                />

                {errors.repeatPassword && (
                  <Error error={errors.repeatPassword} />
                )}
              </Container>

              <Button
                disabled={!isDirty}
                isLoading={isLoading}
                type="submit"
                className="saveChange"
                value="Save Change"
              />
            </Content>
          </form>
        </Review>
      </Wrapper>

      <Toast
        isOpen={isToastOpen}
        message={toastType}
        isSuccess={isSuccessToast}
        onClick={setIsToastOpen}
      />
    </>
  );
};

export default AccountDetails;
