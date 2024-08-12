import Style from "./overlay.module.scss";

interface Props {
  visible: boolean;
}

export const Overlay: React.FC<Props> = ({ visible }) => {
  return (
    <div
      className={visible ? `${Style.overlay} ${Style.active}` : Style.overlay}
    ></div>
  );
};
