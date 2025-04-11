import { CartItemVariation } from "../../../types";
import Style from "./cart.module.scss";
import { Delete, IImage, Price, Quantity, Total } from "../../ui/cart";
import ItemInfo from "../../ui/item-info";
import { useCartStore } from "../../../store";

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
  const deleteCartItem = useCartStore((state) => state.deleteCartItem);

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

          <ItemInfo
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
          <Delete onClick={deleteCartItem} itemId={id} />
        </div>
      </div>
    </li>
  );
};

export default Item;
