import Link from "next/link";
import { saveViewedProduct } from "../../../lib";
import Style from "./info.module.scss";
import { CartItemVariation } from "../../../types";

interface Props {
  itemId: number;
  name: string;
  id: number;
  imgUrl: string;
  showQuantity: boolean;
  variations: CartItemVariation[];
  sku: string;
  quantity?: number;
  variationId: number;
}

const Info: React.FC<Props> = ({
  itemId,
  name,
  id,
  imgUrl,
  showQuantity,
  variations,
  quantity,
  sku,
  variationId,
}) => {
  return (
    <div className={Style.info}>
      <Link
        href={`/item/${itemId}`}
        onClick={() => saveViewedProduct({ id, name, imgUrl, variations })}
      >
        <h3 className={Style.name}>{name}</h3>
      </Link>

      <p className={Style.sku}>
        <span>Sku:</span>
        {sku}
      </p>

      <p className={Style.size}>
        <span>Size:</span>
        {variations[variationId].size.shortName}
      </p>

      {showQuantity && (
        <p className={Style.quantity}>
          <span>Quantity:</span>
          {quantity}
        </p>
      )}
    </div>
  );
};

export default Info;
