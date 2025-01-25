"use strict";

import { CartItemVariation } from "../../../types";
import Style from "./cart.module.scss";
import { useCartStore } from "../../../store";
import { svgDecr, svgIncr, svgTrash } from "./static-data";
import { useChangeQuantityItems } from "../../../hooks";

interface Props {
  id: number;
  quantity: number;
  variations: CartItemVariation[];
  variationId: number;
  singleItemPrice: number;
}

const Details: React.FC<Props> = ({
  id,
  quantity,
  variations,
  variationId,
  singleItemPrice,
}) => {
  const deleteCartItem = useCartStore((state) => state.deleteCartItem);

  const { changeQuantityItems } = useChangeQuantityItems();

  return (
    <div className={Style.details}>
      {variations[variationId].onSale ? (
        <div className={Style.info}>
          <div className={Style.prices}>
            <span className={Style.sale}>
              ${variations[variationId].price.toFixed(2)}
            </span>

            <span className={Style.price}>
              ${variations[variationId].sale.toFixed(2)}
            </span>
          </div>
        </div>
      ) : (
        <div className={Style.info}>
          <span className={Style.price}>
            ${variations[variationId].price.toFixed(2)}
          </span>
        </div>
      )}

      <div className={Style.quantity}>
        <button
          onClick={() => changeQuantityItems(id, quantity, "decrement")}
          aria-label="Decrease quantity"
        >
          {svgDecr}
        </button>

        <span>{quantity}</span>

        <button
          onClick={() => changeQuantityItems(id, quantity, "increment")}
          aria-label="Increase quantity"
        >
          {svgIncr}
        </button>
      </div>

      <span className={Style.total}>${singleItemPrice.toFixed(2)}</span>

      <span
        className={Style.delete}
        onClick={() => deleteCartItem(id)}
        aria-label="Delete item"
      >
        {svgTrash}
      </span>
    </div>
  );
};

export default Details;
