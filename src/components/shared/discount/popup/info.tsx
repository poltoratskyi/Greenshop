import Style from "./popup.module.scss";
import { svgClose } from "./static-data";
import { useUIStore } from "../../../../store";
import { discountUtils } from "../../../../lib/client";
import DiscountSuccessMessage from "../message";

const Info: React.FC = () => {
  const isDiscountSuccess = useUIStore((state) => state.isDiscountSuccess);

  const setIsDiscountPopupOpen = useUIStore(
    (state) => state.setIsDiscountPopupOpen
  );

  const closeModal = () => {
    discountUtils({ isDiscountClosed: true });
    setIsDiscountPopupOpen(true);
  };

  return (
    <div className={Style.content}>
      <div className={Style.header}>
        {isDiscountSuccess ? (
          <h3 className={Style.title}>Confirm your subscription</h3>
        ) : (
          <h3 className={Style.title}>Subscribe to our newsletter</h3>
        )}

        <span className={Style.close} onClick={() => closeModal()}>
          {svgClose}
        </span>
      </div>

      {isDiscountSuccess ? (
        <DiscountSuccessMessage />
      ) : (
        <p className={Style.description}>
          Subscribe to our newsletter to get 10% off discount on your next
          order. We will send you a information about our new products and
          special offers.
        </p>
      )}
    </div>
  );
};

export default Info;
