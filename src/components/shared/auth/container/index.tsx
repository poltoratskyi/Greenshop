import Overlay from "../../../ui/overlay";
import Error from "../error";
import Style from "./container.module.scss";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Overlay isVisible={true} />

      <div className={Style.modal}>{children}</div>

      <Error />
    </>
  );
};

export default Container;
