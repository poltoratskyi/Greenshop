export type Place = {
  "place name": string;
  "state abbreviation": string;
  country: string;
  state: string;
  latitude: string;
  longitude: string;
};

export type ZipCodeData = {
  "country abbreviation": string;
  places: Place[];
  country: string;
};
