import Style from "./cart.module.scss";
import { headerData } from "./static-data";

const CartHeader: React.FC = () => {
  return (
    <ul className={Style.items_title}>
      <li style={{ width: "335px" }}>
        <h4>{headerData.title}</h4>
      </li>

      <li style={{ width: "160px" }}>
        <h4>{headerData.price}</h4>
      </li>

      <li style={{ width: "100px" }}>
        <h4>{headerData.quantity}</h4>
      </li>

      <li style={{ marginLeft: "70px" }}>
        <h4>{headerData.total}</h4>
      </li>
    </ul>
  );
};

export default CartHeader;
