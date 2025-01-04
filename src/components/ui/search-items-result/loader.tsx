import Style from "./search-items-result.module.scss";

interface Props {
  cart?: boolean;
}

const Loader: React.FC<Props> = ({ cart }) => {
  return (
    <div className={`${cart ? `${Style.loader} ${Style.cart}` : Style.loader}`}>
      <div className={Style.round}></div>
    </div>
  );
};

export default Loader;
