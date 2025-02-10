import { CartItemVariation } from "../../../types";
import Style from "./cart.module.scss";
import IImage from "../../ui/image";
import Info from "../../ui/info";
import Price from "../../ui/price";
import Quantity from "../../ui/quantity";
import { QuantityType } from "../../../hooks/use-change-quantity-items ";
import Total from "../../ui/total";
import Delete from "../../ui/delete";

interface Props {
  id: number;
  imgUrl: string;
  name: string;
  quantity: number;
  itemId: number;
  sku: string;
  variations: CartItemVariation[];
  variationId: number;
  singleItemPrice: number;
}

const Item: React.FC<Props> = ({
  id,
  imgUrl,
  name,
  quantity,
  itemId,
  sku,
  variations,
  variationId,
  singleItemPrice,
}) => {
  return (
    <li className={Style.item}>
      <div className={Style.layout}>
        <div className={Style.info}>
          <IImage
            itemId={itemId}
            imgUrl={imgUrl}
            name={name}
            id={id}
            variations={variations}
          />

          <Info
            itemId={itemId}
            name={name}
            id={id}
            imgUrl={imgUrl}
            variations={variations}
            sku={sku}
            variationId={variationId}
            showQuantity={false}
          />
        </div>

        <div className={Style.actions}>
          <Price
            className="cart"
            variations={variations}
            variationId={variationId}
          />

          <Quantity hiddenQtyBtns={false} id={id} quantity={quantity} />

          <Total singleItemPrice={singleItemPrice} />
          <Delete id={id} />
        </div>
      </div>
    </li>
  );
};

export default Item;
