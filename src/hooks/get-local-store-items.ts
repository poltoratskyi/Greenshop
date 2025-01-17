import { ItemVariation } from "../types";

interface Props {
  id: number;
  name: string;
  imgUrl: string;
  variations: ItemVariation[];
}

export const getLocalStoreItems = ({ id, name, imgUrl, variations }: Props) => {
  const item = { id, name, imgUrl, variations };

  let items = JSON.parse(localStorage.getItem("viewed products") || "[]");

  const isItem = items.filter((i: { id: number }) => i.id !== item.id);

  if (isItem) {
    items = items.filter((i: { id: number }) => i.id !== item.id);
  }

  items.unshift(item);

  localStorage.setItem("viewed products", JSON.stringify(items));
};
