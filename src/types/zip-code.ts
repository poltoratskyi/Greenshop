import { Country, State } from "./common";

export type Place = State &
  Country & {
    "place name": string;
    "state abbreviation": string;
    latitude: string;
    longitude: string;
  };

export type ZipCodeData = Country & {
  "country abbreviation": string;
  places: Place[];
};
