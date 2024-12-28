import Style from "./modal-choose-item-size.module.scss";

import { Variation, Size } from "../../../types";

interface Props extends Variation {
  size: Size;
}

const ItemInfo: React.FC<Props> = ({ onSale, sale, price, size }) => {
  return (
    <>
      {onSale ? (
        <div className={Style.item}>
          <span className={Style.size}>{size.fullName}</span>

          <div>
            <span className={Style.sale}>${price.toFixed(2)}</span>
            <span className={Style.price}>${sale.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <div className={Style.item}>
          <span className={Style.size}>{size.fullName}</span>

          <span className={Style.price}>${price.toFixed(2)}</span>
        </div>
      )}
    </>
  );
};

export default ItemInfo;
