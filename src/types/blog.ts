import { Id, Image } from "./common";

export type Blog = Id &
  Image & {
    date: string;
    year: string;
    heading: string;
    title: string;
    subtitle: string;
    descr: string;

    createdAt: string;
    updatedAt: string;
  };
