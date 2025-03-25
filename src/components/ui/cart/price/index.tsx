import { CartItemVariation } from "../../../../types";
import Style from "./price.module.scss";

interface Props {
  className: string;
  variationId: number;
  variations: CartItemVariation[];
}

const Price: React.FC<Props> = ({ variations, variationId, className }) => {
  const buttonClass = Style[className];

  return (
    <>
      {variations[variationId].onSale ? (
        <div className={buttonClass}>
          <div className={Style.cost}>
            <span className={Style.old}>
              ${variations[variationId].price.toFixed(2)}
            </span>
            <span className={Style.new}>
              ${variations[variationId].sale.toFixed(2)}
            </span>
          </div>
        </div>
      ) : (
        <div className={buttonClass}>
          <span className={Style.new}>
            ${variations[variationId].price.toFixed(2)}
          </span>
        </div>
      )}
    </>
  );
};

export default Price;
