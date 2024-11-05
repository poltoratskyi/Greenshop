import { Item } from "../../../types";

import Style from "./single-item.module.scss";

interface Props {
  item: Item;
}

const ExtendedDescription: React.FC<Props> = ({ item }) => {
  return <p className={Style.text}>{item.extendedDescription}</p>;
};

export default ExtendedDescription;
