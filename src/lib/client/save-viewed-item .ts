import { ItemVariation } from "../../types";

interface Props {
  id: number;
  name: string;
  imgUrl: string;
  variations: ItemVariation[];
}

export const saveViewedProduct = ({ id, name, imgUrl, variations }: Props) => {
  const item = { id, name, imgUrl, variations };

  const items = [];

  try {
    const storedItems = localStorage.getItem("viewedProducts");

    if (storedItems) {
      items.push(...JSON.parse(storedItems));
    }
  } catch (error) {
    console.error("Error reading from localStorage", error);
  }

  const updatedItems = items.filter((i: { id: number }) => i.id !== item.id);

  updatedItems.unshift(item);

  try {
    localStorage.setItem("viewedProducts", JSON.stringify(updatedItems));
  } catch (error) {
    console.error("Error writing to localStorage", error);
  }
};
