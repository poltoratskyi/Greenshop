import React from "react";

import { Button } from "../button";

import Style from "./input.module.scss";

interface Props {
  location: string;
  className: string;
  inputTitle?: string;
  inputDescr?: string;
  btnText?: string;
  inputPlaceholder: string;
  svgSearch?: JSX.Element;
  svgClose?: JSX.Element;
  toggleSearch: (openSearch: boolean) => void;
}

export const Input: React.FC<Props> = ({
  location,
  className,
  inputTitle,
  inputDescr,
  btnText,
  inputPlaceholder,
  svgSearch,
  svgClose,
  toggleSearch,
}) => {
  const inputLocation = Style[location];
  const inputClass = Style[className];

  return (
    <div className={inputLocation}>
      {inputTitle && <h3 className={Style.title}>{inputTitle}</h3>}

      <div className={Style.content}>
        {svgSearch && <span className={Style.svg_search}>{svgSearch}</span>}

        <input
          type="text"
          placeholder={inputPlaceholder}
          className={inputClass}
        />

        {svgClose && (
          <span onClick={() => toggleSearch(false)} className={Style.svg_close}>
            {svgClose}
          </span>
        )}

        {btnText && <Button className="join" value={btnText} />}
      </div>

      {inputDescr && <p className={Style.descr}>{inputDescr}</p>}
    </div>
  );
};
