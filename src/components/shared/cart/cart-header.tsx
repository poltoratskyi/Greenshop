import Style from "./cart.module.scss";

const CartHeader: React.FC = () => {
  return (
    <ul className={Style.items_title}>
      <li style={{ width: "335px" }}>
        <h4>Products</h4>
      </li>

      <li style={{ width: "160px" }}>
        <h4>Price</h4>
      </li>

      <li style={{ width: "100px" }}>
        <h4>Quantity</h4>
      </li>

      <li style={{ marginLeft: "70px" }}>
        <h4>Total</h4>
      </li>
    </ul>
  );
};

export default CartHeader;
