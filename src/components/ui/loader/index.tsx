import Style from "./loader.module.scss";

interface Props {
  cart?: boolean;
  item?: boolean;
  search?: boolean;
}

const Loader: React.FC<Props> = ({ cart, item, search }) => {
  return (
    <div
      className={`${Style.loader} ${cart ? Style.cart : ""} ${
        item ? Style.item : ""
      } ${search ? Style.search : ""}`}
    >
      <div className={Style.round}></div>
    </div>
  );
};

export default Loader;
