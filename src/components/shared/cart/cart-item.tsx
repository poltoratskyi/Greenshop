import Link from "next/link";
import Image from "next/image";

import { CartItemVariation } from "../../../types";

import Style from "./cart.module.scss";

import Details from "./details";

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

const CartItem: React.FC<Props> = ({
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
    <li className={Style.list}>
      <div className={Style.layout}>
        <div className={Style.product}>
          <Link className={Style.img} href={`/item/${itemId}`}>
            <Image
              width={600}
              height={600}
              style={{
                width: "100%",
                height: "auto",
              }}
              src={imgUrl}
              alt={name}
            />
          </Link>

          <div className={Style.driver}>
            <Link href={`/item/${itemId}`}>
              <h3 className={Style.title}>{name}</h3>
            </Link>

            <p className={Style.sku}>
              <span>Sku:</span>
              {sku}
            </p>

            <p className={Style.size}>
              <span>Size:</span>
              {variations[variationId].size.shortName}
            </p>
          </div>
        </div>

        <Details
          id={id}
          quantity={quantity}
          variations={variations}
          variationId={variationId}
          singleItemPrice={singleItemPrice}
        />
      </div>
    </li>
  );
};

export default CartItem;
