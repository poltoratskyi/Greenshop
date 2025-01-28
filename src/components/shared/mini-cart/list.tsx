import Image from "next/image";
import { CartItemVariation } from "../../../types";
import Style from "./mini-cart.module.scss";

interface Props {
  singleItemPrice: number;
  quantity: number;
  name: string;
  imgUrl: string;
  sku: string;
  variationId: number;
  variations: CartItemVariation[];
}
const List: React.FC<Props> = ({
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
      <div className={Style.img}>
        <Image
          priority
          width={600}
          height={600}
          style={{
            width: "100%",
            height: "auto",
          }}
          src={imgUrl}
          alt={name}
        />
      </div>

      <div className={Style.driver}>
        <h3 className={Style.title}>{name}</h3>

        <p className={Style.size}>
          <span>Size:</span>
          {variations[variationId].size.shortName}
        </p>

        <p className={Style.quantity}>
          <span>Quantity:</span>
          {quantity}
        </p>

        <p className={Style.sku}>
          <span>Sku:</span>
          {sku}
        </p>

        {variations[variationId].onSale ? (
          <div className={Style.info}>
            <span>Price:</span>

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
            <span>Price:</span>

            <span className={Style.price}>
              ${variations[variationId].price.toFixed(2)}
            </span>
          </div>
        )}

        <p className={Style.total}>
          <span>Total:</span>${singleItemPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default List;
