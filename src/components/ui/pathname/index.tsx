import Link from "next/link";
import { ItemCategory } from "../../../types/common";
import Style from "./pathname.module.scss";
import Backspace from "../backspace";

interface Props {
  name?: string;
  secondLink?: string;
  category?: ItemCategory;
  second?: string;
  third?: string;
  thirdPath?: boolean;
}

const Pathname: React.FC<Props> = ({
  name,
  secondLink,
  category,
  second,
  third,
  thirdPath,
}) => {
  return (
    <div className={Style.wrapper}>
      <div className="container">
        <div className={Style.item_path}>
          <Backspace />

          <ul className={Style.lists}>
            <Link href="/">
              <li className={`${Style.list} ${Style.link}`}>Home /</li>
            </Link>

            {secondLink ? (
              <Link href={secondLink}>
                <li className={Style.list}>{second} /</li>
              </Link>
            ) : (
              <li
                style={!thirdPath ? { cursor: "auto" } : {}}
                className={`${
                  thirdPath ? Style.list : `${Style.list} ${Style.active}`
                }`}
              >
                {category ? category.name : second}
                {thirdPath && <span style={{ marginLeft: "5px" }}>/</span>}
              </li>
            )}

            {thirdPath && (
              <li className={`${Style.list} ${Style.active}`}>
                {thirdPath ? name : third}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pathname;
