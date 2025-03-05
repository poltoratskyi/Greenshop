import ModalContent from "../modal-content";
import Info from "./info";
import Container from "./container";

const Order: React.FC = () => {
  return (
    <Container>
      <ModalContent>
        <Info />
      </ModalContent>
    </Container>
  );
};

export default Order;
