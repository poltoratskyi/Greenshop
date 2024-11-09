import React from "react";

import Style from "./header.module.scss";

import { svgLogo } from "./static-data";

interface Props {
  logoPosition: boolean;
}

const Logo: React.FC<Props> = ({ logoPosition }) => {
  return (
    <div className={`${Style.logo} ${logoPosition && Style.center}`}>
      {svgLogo}

      <span>GreenShop</span>
    </div>
  );
};

export default Logo;
