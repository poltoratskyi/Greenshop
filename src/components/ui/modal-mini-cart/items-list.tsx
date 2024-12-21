import Link from "next/link";
import Image from "next/image";

import { CartVariation } from "../../../types";

import Style from "./modal-mini-cart.module.scss";

interface Props {
  singleItemPrice: number;
  quantity: number;
  name: string;
  imgUrl: string;
  sku: string;
  itemId: number;
  variationId: number;
  variations: CartVariation[];
}
const ItemsList: React.FC<Props> = ({
  singleItemPrice,
  quantity,
  name,
  imgUrl,
  sku,
  itemId,
  variationId,
  variations,
}) => {
  return (
    <div className={Style.content}>
      <Link className={Style.img} href={`/item/${itemId}`}>
        <Image
          priority
          width={100}
          height={100}
          style={{
            height: "auto",
            width: "100%",
            objectFit: "contain",
          }}
          src={imgUrl}
          alt={name}
        />
      </Link>

      <div className={Style.driver}>
        <Link href={`/item/${itemId}`}>
          <h3 className={Style.title}>{name}</h3>
        </Link>

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

export default ItemsList;
