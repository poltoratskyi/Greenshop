import Style from "./size-selection-modal.module.scss";

interface Props {
  price: number;
  sale: number;
  onSale: boolean;
  isAvailable: boolean;

  size: {
    fullName: string;
  };
}

const Info: React.FC<Props> = ({ onSale, sale, price, size, isAvailable }) => {
  return (
    <>
      {onSale ? (
        <div
          className={`${!isAvailable ? `${Style.item} ${Style.disabled}` : Style.item}`}
        >
          <span className={Style.size}>{size.fullName}</span>

          <div>
            <span className={Style.sale}>${price.toFixed(2)}</span>
            <span className={Style.price}>${sale.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <div
          className={`${!isAvailable ? `${Style.item} ${Style.disabled}` : Style.item}`}
        >
          <span className={Style.size}>{size.fullName}</span>

          <span className={Style.price}>${price.toFixed(2)}</span>
        </div>
      )}
    </>
  );
};

export default Info;
