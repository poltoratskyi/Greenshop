import React from "react";

import Style from "./header.module.scss";

import { Logo } from "./logo";
import { Links } from "./links";
import { Actions } from "./actions";

export const Header: React.FC = () => {
  return (
    <header className={Style.header}>
      <div className="container">
        <div className={Style.content}>
          <Logo />
          <Links />
          <Actions />
        </div>
      </div>
    </header>
  );
};
