import { errorOrder } from "./static-data";
import Style from "./order.module.scss";
import ModalContent from "../modal-content";
import Info from "./info";
import Container from "./container";

const Error: React.FC = () => {
  return (
    <Container>
      <ModalContent>
        {errorOrder.map((item, index) => (
          <div key={index} className={Style.content}>
            <Info {...item} />
          </div>
        ))}
      </ModalContent>
    </Container>
  );
};

export default Error;
