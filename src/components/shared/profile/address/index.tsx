"use client";

import {
  Input,
  Label,
  Error,
  Container,
} from "../../../../components/ui/common-form-elements";
import { Content, Review, Wrapper } from "../../layout";
import Autocomplete from "../../../ui/profile-inputs/autocomplete";
import ZipCodeInput from "../../../ui/profile-inputs/zip-code";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  ProfileAddressFormFields,
  profileAddressFormSchema,
} from "../../../../schemas";
import { User } from "../../../../types";
import { useLocationData, useToast, useToastHandling } from "../../../../hooks";
import Button from "../../../../components/ui/button";
import { updateUserAddress } from "../../../../app/actions";
import Toast from "../../toast";
import Loader from "../../../../components/ui/loader";

interface Props {
  data: User;
}

const Address: React.FC<Props> = ({ data }) => {
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
    setIsSuccessToast,
    setToastType,
  } = useToastHandling();

  const {
    isZipCodeLoading,
    requestError,
    countryData,
    cityData,
    addressData,
    stateData,
    isCountryDataLoading,
    isCityDataLoading,
    isAddressDataLoading,
    isStateDataLoading,

    resetStateData,
    resetCityData,
    resetAddressData,
    resetCountryData,
    loadCountry,
    loadCity,
    loadAddress,
    loadState,
  } = useLocationData();

  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isDirty },
  } = useForm<ProfileAddressFormFields>({
    resolver: zodResolver(profileAddressFormSchema),
    mode: "onChange",
    defaultValues: {
      country: data.country || "",
      city: data.city || "",
      address: data.address || "",
      apartment: data.apartment || "",
      state: data.state || "",
      zip: "",
    },
  });

  const onSubmit = async (data: ProfileAddressFormFields) => {
    setIsLoading(true);

    try {
      const response = await updateUserAddress(data);

      if (!response.success) {
        await showToast(response.error || "Something went wrong", false);
        setIsLoading(false);
        return;
      }

      reset({
        country: data.country,
        city: data.city,
        address: data.address,
        apartment: data.apartment || "",
        state: data.state,
        zip: "",
      });

      await showToast(response.message || "Something went wrong", true);
      setIsLoading(false);
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
        <Review title="Billing Address">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Content>
              <Container>
                <Label label="Country / Region" name="checkout-country" />

                <Autocomplete
                  id="checkout-country"
                  name="country"
                  placeholder="Select your country / region"
                  type="text"
                  data={countryData}
                  isLoading={isCountryDataLoading}
                  resetData={resetCountryData}
                  fetchLocation={loadCountry}
                  setValue={setValue}
                  watch={watch}
                  error={errors.country}
                />

                {errors.country && <Error error={errors.country} />}
              </Container>

              <Container>
                <Label label="Town / City" name="checkout-city" />

                <Autocomplete
                  id="checkout-city"
                  name="city"
                  placeholder="Select your city or town"
                  type="text"
                  data={cityData}
                  isLoading={isCityDataLoading}
                  resetData={resetCityData}
                  fetchLocation={loadCity}
                  setValue={setValue}
                  watch={watch}
                  error={errors.city}
                />

                {errors.city && <Error error={errors.city} />}
              </Container>

              <Container>
                <Label label="Street Address" name="checkout-address" />

                <Autocomplete
                  id="checkout-address"
                  name="address"
                  placeholder="Select your street address"
                  type="text"
                  data={addressData}
                  isLoading={isAddressDataLoading}
                  resetData={resetAddressData}
                  fetchLocation={loadAddress}
                  setValue={setValue}
                  watch={watch}
                  error={errors.address}
                />

                {errors.address && <Error error={errors.address} />}
              </Container>

              <Container>
                <Label
                  label="Apartment (optional)"
                  name="checkout-apartment"
                  mark="checkout-apartment"
                />

                <Input
                  id="checkout-apartment"
                  type="text"
                  placeholder="Apartment, suite, unit, etc"
                  {...register("apartment")}
                  error={errors.apartment}
                />

                {errors.apartment && <Error error={errors.apartment} />}
              </Container>

              <Container>
                <Label label="State / Province" name="checkout-state" />

                <Autocomplete
                  id="checkout-state"
                  name="state"
                  placeholder="Select a state / province"
                  type="text"
                  data={stateData}
                  isLoading={isStateDataLoading}
                  resetData={resetStateData}
                  fetchLocation={loadState}
                  setValue={setValue}
                  watch={watch}
                  error={errors.state}
                />

                {errors.state && <Error error={errors.state} />}
              </Container>

              <Container>
                <Label
                  label="Zip Code (optional)"
                  name="checkout-zip"
                  mark="checkout-zip"
                />

                <ZipCodeInput
                  id="checkout-zip"
                  name="zip"
                  type="text"
                  placeholder="Enter your zip code"
                  isLoading={isZipCodeLoading}
                  watch={watch}
                  setValue={setValue}
                  error={errors.zip}
                />

                {errors.zip && <Error error={errors.zip} />}
                {requestError && <Error requestError={requestError} />}
              </Container>

              <Button
                disabled={isLoading || !isDirty}
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

export default Address;
