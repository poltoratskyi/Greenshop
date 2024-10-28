import React from "react";

import Style from "./header.module.scss";

import { svgLogo } from "./static-data";

const Logo: React.FC = () => {
  return (
    <div className={Style.logo}>
      {svgLogo}

      <span>GreenShop</span>
    </div>
  );
};

export default Logo;
