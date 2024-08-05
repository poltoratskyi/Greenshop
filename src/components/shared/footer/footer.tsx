import React from "react";

import Style from "./footer.module.scss";

import { Service } from "./service";
import { Contacts } from "./contacts";
import { Feedback } from "./feedback";

export const Footer: React.FC = () => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <div className={Style.content}>
          <Service />
          <Contacts />
          <Feedback />
        </div>
      </div>
    </footer>
  );
};
