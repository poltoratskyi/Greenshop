import { Content } from "../../../shared/auth";
import Info from "./info";
import Container from "./container";

const OrderConfirmation: React.FC = () => {
  return (
    <Container>
      <Content>
        <Info />
      </Content>
    </Container>
  );
};

export default OrderConfirmation;
