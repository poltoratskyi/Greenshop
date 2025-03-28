import Style from "./toast.module.scss";
import { svgClose } from "./static-data";

interface Props {
  isOpen: boolean;
  isSuccess: boolean;
  message?: string;

  onClick: (value: boolean) => void;
}

const Toast: React.FC<Props> = ({
  isOpen,
  isSuccess,
  message,

  onClick,
}) => {
  return (
    <div className={isOpen ? `${Style.toast} ${Style.active}` : Style.toast}>
      <div
        className={
          isSuccess ? `${Style.content} ${Style.success}` : Style.content
        }
      >
        <div className={Style.text}>
          {message}

          <div className={Style.close}>
            <span onClick={() => onClick(false)} className={Style.close}>
              {svgClose}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
