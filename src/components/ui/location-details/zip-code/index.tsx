import React from "react";
import Button from "../../button";
import Styles from "./location.module.scss";
import { ZipCodeData } from "../../../../types";

interface ZipCodeProps {
  zipData: ZipCodeData;
  handleChangeResult: () => void;
}

const ZipCode: React.FC<ZipCodeProps> = ({ zipData, handleChangeResult }) => {
  return (
    <div className={Styles.result}>
      <div className={Styles.address}>
        {`Location details: `}
        <span className={Styles.info}>
          {[
            zipData?.country,
            zipData?.["country abbreviation"],
            zipData?.places[0]?.["place name"],
          ]
            .filter(Boolean)
            .join(", ")}
        </span>
      </div>

      <Button
        type="button"
        onClick={handleChangeResult}
        className="choose"
        value="Choose"
      />
    </div>
  );
};

export default ZipCode;
