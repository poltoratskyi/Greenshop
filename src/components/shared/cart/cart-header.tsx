import Style from "./cart.module.scss";

const elements = {
  title: "Products",
  price: "Price",
  quantity: "Quantity",
  total: "Total",
};

const CartHeader: React.FC = () => {
  return (
    <ul className={Style.items_title}>
      <li style={{ width: "335px" }}>
        <h4>{elements.title}</h4>
      </li>

      <li style={{ width: "160px" }}>
        <h4>{elements.price}</h4>
      </li>

      <li style={{ width: "100px" }}>
        <h4>{elements.quantity}</h4>
      </li>

      <li style={{ marginLeft: "70px" }}>
        <h4>{elements.total}</h4>
      </li>
    </ul>
  );
};

export default CartHeader;
