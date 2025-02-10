"use client";

import { useEffect } from "react";
import Style from "./cart.module.scss";
import Loader from "../loaders/default";
import { useCartStore } from "../../../store";
import Item from "./item";
import Review from "../../ui/cart-order-review";
import { headerData } from "./static-data";
import ItemTable from "../item-table";

const List: React.FC = () => {
  const isLoading = useCartStore((state) => state.isLoading);
  const cartItems = useCartStore((state) => state.cartItems);

  const loadUserCart = useCartStore((state) => state.loadUserCart);

  useEffect(() => {
    loadUserCart();
  }, []);

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
