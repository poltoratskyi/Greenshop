import Style from "./loader.module.scss";

interface Props {
  cart?: boolean;
  item?: boolean;
}

const Loader: React.FC<Props> = ({ cart, item }) => {
  return (
    <div
      className={`${cart ? `${Style.loader} ${Style.cart}` : Style.loader} ${
        item && `${Style.loader} ${Style.item}`
      }`}
    >
      <div className={Style.round}></div>
    </div>
  );
};

export default Loader;
