import Review from "../../ui/cart-order-review";
import UserForm from "./user-form";

const Address: React.FC = () => {
  return (
    <Review title="Billing Address">
      <UserForm />
    </Review>
  );
};

export default Address;
