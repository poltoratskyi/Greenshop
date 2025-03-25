import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Input,
  Label,
  Error,
  Container,
} from "@/components/ui/common-form-elements";
import { ProfileFormFields, profileFormSchema } from "@/schemas";
import { PhoneInput } from "@/components/ui/checkout-inputs";
import { Content } from "../layout";
import Button from "@/components/ui/button";
import { useState } from "react";
import { updateUserProfile } from "@/app/actions";

interface Props {
  firstName: string;
  lastName?: string | null;
  phone?: string | null;
  email: string;
}

const Form: React.FC<Props> = ({ email, firstName, lastName, phone }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<ProfileFormFields>({
    firstName: firstName ? firstName : "",
    lastName: lastName ? lastName : "",
    email: email ? email : "",
    phone: phone ? phone : "",
    newPassword: "",
    repeatPassword: "",
  });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormFields>({
    resolver: zodResolver(profileFormSchema),
    mode: "onBlur",
    defaultValues: userData,
  });

  const onSubmit = async (data: ProfileFormFields) => {
    try {
      setIsLoading(true);

      await updateUserProfile(data);

      setUserData({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        newPassword: "",
        repeatPassword: "",
      });

      reset();
    } catch (error) {
      setIsLoading(false);
      console.log("error login", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
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

          {errors.repeatPassword && <Error error={errors.repeatPassword} />}
        </Container>

        <Button
          type="submit"
          isLoading={isLoading}
          className="saveChange"
          value="Save Change"
        />
      </Content>
    </form>
  );
};

export default Form;
