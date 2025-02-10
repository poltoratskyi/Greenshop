import Style from "./total.module.scss";

interface Props {
  singleItemPrice: number;
}

const Total: React.FC<Props> = ({ singleItemPrice }) => {
  return <span className={Style.total}>${singleItemPrice.toFixed(2)}</span>;
};

export default Total;
