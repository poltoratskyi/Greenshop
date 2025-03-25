import Style from "./total.module.scss";

interface Props {
  pathName?: string;
  singleItemPrice: number;
}

const Total: React.FC<Props> = ({ pathName, singleItemPrice }) => {
  return (
    <span
      style={pathName === "/checkout" ? { textAlign: "right" } : {}}
      className={Style.total}
    >
      ${singleItemPrice.toFixed(2)}
    </span>
  );
};

export default Total;
