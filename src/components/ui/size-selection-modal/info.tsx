import Style from "./size-selection-modal.module.scss";

interface Props {
  price: number;
  sale: number;
  onSale: boolean;
  size: {
    id: number;
    fullName: string;
  };
}
[];

const Info: React.FC<Props> = ({ onSale, sale, price, size }) => {
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

export default Info;
