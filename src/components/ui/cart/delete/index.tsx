"use client";

import Style from "./delete.module.scss";
import { svgTrash } from "./static-data";

interface Props {
  itemId: number;
  onClick: (itemId: number) => void;
}

const Delete: React.FC<Props> = ({ itemId, onClick }) => {
  return (
    <span
      className={Style.delete}
      onClick={() => onClick(itemId)}
      aria-label="Delete item"
    >
      {svgTrash}
    </span>
  );
};

export default Delete;
