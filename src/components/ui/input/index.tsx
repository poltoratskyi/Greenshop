import React from "react";

import { Button } from "../button";

import Style from "./input.module.scss";

interface Props {
  inputTitle?: string;
  inputDescr?: string;
  btnText: string;
}

const inputPlaceholder = "enter your email address...";

export const Input: React.FC<Props> = ({ inputTitle, inputDescr, btnText }) => {
  return (
    <div className={Style.newsletters}>
      {inputTitle && <h3 className={Style.title}>{inputTitle}</h3>}

      <div className={Style.content}>
        <input
          type="text"
          placeholder={inputPlaceholder}
          className={Style.input}
        />

        <Button className="join" value={btnText} />
      </div>

      {inputDescr && <p className={Style.descr}>{inputDescr}</p>}
    </div>
  );
};
