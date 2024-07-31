import React from "react";

import Style from "./footer.module.scss";

import { Service } from "./service";
import { Contacts } from "./contacts";
import { Feedback } from "./feedback";

export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <Service />
        <Contacts />
        <Feedback />
      </div>
    </footer>
  );
};
