import Style from "./order.module.scss";
import ModalContent from "../modal-content";
import Info from "./info";
import Container from "./container";
import { successOrder } from "./static-data";

const Order: React.FC = () => {
  return (
    <Container>
      <ModalContent>
        {successOrder.map((item, index) => (
          <div key={index} className={Style.content}>
            <Info {...item} />
          </div>
        ))}
      </ModalContent>
    </Container>
  );
};

export default Order;
