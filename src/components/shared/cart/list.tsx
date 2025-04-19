import Style from "./cart.module.scss";
import Loader from "../../ui/loader";
import { useCartStore } from "../../../store";
import Item from "./item";
import { Review } from "../layout";
import { headerData } from "./static-data";
import ItemTable from "../item-table";

const List: React.FC = () => {
  const isLoading = useCartStore((state) => state.isLoading);
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <>
      {/* Desktop item list */}
      <ItemTable
        hiddenColumns={false}
        hiddenQtyBtns={false}
        headerData={headerData}
      />

      {/* Mobile item list */}
      <div className={Style.items}>
        {isLoading ? (
          <Review title="Loading...">
            <Loader cart />
          </Review>
        ) : (
          <Review title="Products">
            <ul>
              {cartItems.map((item) => (
                <Item key={item.id} {...item} />
              ))}
            </ul>
          </Review>
        )}
      </div>
    </>
  );
};

export default List;
