import Style from "./mobile-input.module.scss";

import Button from "../../shared/button";

import { svgSearch, svgFilter } from "./static-data";

const MobileInput: React.FC = () => {
  return (
    <div className={Style.mobile_wrapper_input}>
      <span className={Style.svg_search}>{svgSearch}</span>

      <input
        id="mobileSearchInput"
        name="query"
        type="text"
        className={Style.mobile_input}
        placeholder="Find your plants"
        autoComplete="off"
        required
      />

      {svgFilter && (
        <Button
          value={svgFilter}
          button={true}
          className="filter_mobile"
        ></Button>
      )}
    </div>
  );
};

export default MobileInput;
