import React, { ReactNode } from "react";
import Style from "./catalog.module.scss";

interface Props {
  gridWidth?: boolean;
  children: ReactNode;
}

const ItemsWrapper: React.FC<Props> = ({ gridWidth, children }) => {
  return (
    <div className={Style.items}>
      <ul className={`${Style.lists} ${gridWidth && Style.related}`}>
        {children}
      </ul>
    </div>
  );
};

export default ItemsWrapper;
