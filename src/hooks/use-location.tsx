import { useLocationStore, useZipCodeStore } from "@/store";

export const useLocationData = () => {
  const requestError = useZipCodeStore((state) => state.error);

  const isZipCodeLoading = useZipCodeStore((state) => state.isLoading);

  const countryData = useLocationStore((state) => state.countryData);
  const cityData = useLocationStore((state) => state.cityData);
  const addressData = useLocationStore((state) => state.addressData);
  const stateData = useLocationStore((state) => state.stateData);

  const isCountryDataLoading = useLocationStore(
    (state) => state.isCountryDataLoading
  );
  const isCityDataLoading = useLocationStore(
    (state) => state.isCityDataLoading
  );
  const isAddressDataLoading = useLocationStore(
    (state) => state.isAddressDataLoading
  );
  const isStateDataLoading = useLocationStore(
    (state) => state.isStateDataLoading
  );

  const loadCountry = useLocationStore((state) => state.loadCountry);
  const loadCity = useLocationStore((state) => state.loadCity);
  const loadAddress = useLocationStore((state) => state.loadAddress);
  const loadState = useLocationStore((state) => state.loadState);

  const resetCountryData = useLocationStore((state) => state.resetCountryData);
  const resetCityData = useLocationStore((state) => state.resetCityData);
  const resetAddressData = useLocationStore((state) => state.resetAddressData);
  const resetStateData = useLocationStore((state) => state.resetStateData);

  return {
    requestError,
    countryData,
    cityData,
    addressData,
    stateData,
    isZipCodeLoading,
    isCountryDataLoading,
    isCityDataLoading,
    isAddressDataLoading,
    isStateDataLoading,
    loadCountry,
    loadCity,
    loadAddress,
    loadState,
    resetCountryData,
    resetCityData,
    resetAddressData,
    resetStateData,
  };
};
