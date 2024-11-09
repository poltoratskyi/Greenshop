import React from "react";

import Style from "./footer.module.scss";

import Service from "./service";
import Contacts from "./contacts";
import Feedback from "./feedback";

const Footer: React.FC = () => {
  return (
    <footer className={Style.footer}>
      <div className="container">
        <div className={Style.content}>
          <Service />
          <Contacts />
          <Feedback />
        </div>

        <p className={Style.privacy}>© 2024 GreenShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
