"use client";

import Style from "./delete.module.scss";
import { svgDelete } from "./static-data";

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
      {svgDelete}
    </span>
  );
};

export default Delete;
