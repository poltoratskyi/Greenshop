import Style from "./quantity.module.scss";
import { svgDecr, svgIncr } from "./static-data";
import { useChangeQuantityItems } from "../../../hooks";

interface Props {
  id?: number;
  quantity: number;
  hiddenQtyBtns: boolean;
}

const Quantity: React.FC<Props> = ({ id, quantity, hiddenQtyBtns }) => {
  const { changeQuantityItems } = useChangeQuantityItems();

  return (
    <div className={Style.quantity}>
      {!hiddenQtyBtns && (
        <button
          onClick={() =>
            changeQuantityItems(id as number, quantity, "decrement")
          }
          aria-label="Decrease quantity"
        >
          {svgDecr}
        </button>
      )}

      <span>{quantity}</span>

      {!hiddenQtyBtns && (
        <button
          onClick={() =>
            changeQuantityItems(id as number, quantity, "increment")
          }
          aria-label="Increase quantity"
        >
          {svgIncr}
        </button>
      )}
    </div>
  );
};

export default Quantity;
