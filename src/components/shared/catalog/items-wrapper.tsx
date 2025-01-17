import React, { ReactNode } from "react";
import Style from "./catalog.module.scss";

interface Props {
  gridWidth?: boolean;
  gridUnset?: boolean;
  children: ReactNode;
}

const ItemsWrapper: React.FC<Props> = ({ gridWidth, gridUnset, children }) => {
  return (
    <div className={Style.items}>
      {gridUnset ? (
        <div
          className={`${Style.lists} ${gridUnset && Style.interested} ${
            gridWidth && Style.viewed
          }`}
        >
          {children}
        </div>
      ) : (
        <ul
          className={`${Style.lists} ${gridUnset && Style.interested} ${
            gridWidth && Style.viewed
          }`}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default ItemsWrapper;
