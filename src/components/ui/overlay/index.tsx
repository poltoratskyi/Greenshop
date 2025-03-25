import Style from "./overlay.module.scss";

interface Props {
  isVisible: boolean;
}

const Overlay: React.FC<Props> = ({ isVisible }) => {
  return (
    <div
      className={`${
        isVisible ? `${Style.overlay} ${Style.visible}` : Style.overlay
      }`}
    ></div>
  );
};

export default Overlay;
