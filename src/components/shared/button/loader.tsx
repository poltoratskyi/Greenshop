import Style from "./button.module.scss";

interface Props {
  modal?: boolean;
}

const Loader: React.FC<Props> = ({ modal }) => {
  return (
    <div
      className={`${modal}` ? `${Style.loader} ${Style.modal}` : Style.loader}
    >
      <div className={Style.round}></div>
    </div>
  );
};

export default Loader;
