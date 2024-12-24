import Style from "./search-items-result.module.scss";

interface Props {
  fullPage?: boolean;
}

const Loader: React.FC<Props> = ({ fullPage }) => {
  return (
    <div
      className={`${
        fullPage ? `${Style.loader} ${Style.full_page}` : Style.loader
      }`}
    >
      <div className={Style.round}></div>
    </div>
  );
};

export default Loader;
