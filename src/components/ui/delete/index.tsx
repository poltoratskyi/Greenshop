"use client";

import { useCartStore } from "../../../store";
import Style from "./delete.module.scss";
import { svgTrash } from "./static-data";

interface Props {
  id: number;
}

const Delete: React.FC<Props> = ({ id }) => {
  const deleteCartItem = useCartStore((state) => state.deleteCartItem);

  return (
    <span
      className={Style.delete}
      onClick={() => deleteCartItem(id)}
      aria-label="Delete item"
    >
      {svgTrash}
    </span>
  );
};

export default Delete;
