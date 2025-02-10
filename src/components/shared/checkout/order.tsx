import Button from "../../../components/ui/button";
import Summary from "../cart/summary";
import Review from "../../ui/cart-order-review";
import ItemTable from "../item-table";
import { headerData } from "./static-data";

const Order: React.FC = () => {
  return (
    <Review summaryWidth title="Your Order">
      <ItemTable hiddenColumns hiddenQtyBtns headerData={headerData} />

      <Summary />
      <Button button value="Place Order" className="order" />
    </Review>
  );
};

export default Order;
