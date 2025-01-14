import Link from "next/link";

import { ItemCategory } from "../../../types";

import Style from "./pathname.module.scss";

import Backspace from "../backspace";

interface Props {
  name?: string;
  category?: ItemCategory;
  second?: string;
  third?: string;
  thirdPath?: boolean;
}

const Pathname: React.FC<Props> = ({
  name,
  category,
  second,
  third,
  thirdPath,
}) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.item_path}>
        <Backspace />

        <ul className={Style.lists}>
          <Link href="/">
            <li className={`${Style.list} ${Style.link}`}>Home /</li>
          </Link>

          <li
            style={!thirdPath ? { cursor: "auto" } : {}}
            className={`${
              thirdPath ? Style.list : `${Style.list} ${Style.active}`
            }`}
          >
            {category ? category.name : second}
            {thirdPath && <span style={{ marginLeft: "5px" }}>/</span>}
          </li>

          {thirdPath && (
            <li className={`${Style.list} ${Style.active}`}>
              {thirdPath ? name : third}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pathname;
