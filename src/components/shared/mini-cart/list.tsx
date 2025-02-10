import { CartItemVariation } from "../../../types";
import Style from "./mini-cart.module.scss";
import Total from "../../ui/total";
import Price from "../../ui/price";
import Info from "../../ui/info";
import IImage from "../../ui/image";

interface Props {
  id: number;
  itemId: number;
  singleItemPrice: number;
  quantity: number;
  name: string;
  imgUrl: string;
  sku: string;
  variationId: number;
  variations: CartItemVariation[];
}
const List: React.FC<Props> = ({
  id,
  itemId,
  singleItemPrice,
  quantity,
  name,
  imgUrl,
  sku,
  variationId,
  variations,
}) => {
  return (
    <div className={Style.content}>
      <IImage
        itemId={itemId}
        imgUrl={imgUrl}
        name={name}
        id={id}
        variations={variations}
      />

      <div className={Style.driver}>
        <Info
          id={id}
          itemId={itemId}
          name={name}
          imgUrl={imgUrl}
          sku={sku}
          showQuantity
          quantity={quantity}
          variations={variations}
          variationId={variationId}
        />

        {variations[variationId].onSale ? (
          <div className={Style.info}>
            <span className={Style.text}>Price:</span>

            <Price
              className="cart"
              variations={variations}
              variationId={variationId}
            />
          </div>
        ) : (
          <div className={Style.info}>
            <span className={Style.text}>Price:</span>

            <Price
              className="cart"
              variations={variations}
              variationId={variationId}
            />
          </div>
        )}

        <div className={Style.info}>
          <span className={Style.text}>Total:</span>
          <Total singleItemPrice={singleItemPrice} />
        </div>
      </div>
    </div>
  );
};

export default List;
