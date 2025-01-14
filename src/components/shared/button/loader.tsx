import React from "react";
import Style from "./button.module.scss";

interface Props {
  modal?: boolean;
}

const Loader: React.FC<Props> = ({ modal = false }) => {
  return (
    <div className={`${Style.loader} ${modal ? Style.modal : ""}`}>
      <div className={Style.round}></div>
    </div>
  );
};

export default Loader;
