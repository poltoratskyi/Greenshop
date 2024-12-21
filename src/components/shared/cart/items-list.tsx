"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import Style from "./cart.module.scss";

import Skeleton from "../../ui/skeleton/cart-items";

import { svgDecr, svgIncr, svgTrash } from "./static-data";

import { useCartStore } from "../../../store";

type QuantityType = "decrement" | "increment";

const ItemsList: React.FC = () => {
  const isLoading = useCartStore((state) => state.isLoading);
  const cartItems = useCartStore((state) => state.cartItems);

  const updateCartItemQuantity = useCartStore(
    (state) => state.updateCartItemQuantity
  );
  const loadUserCart = useCartStore((state) => state.loadUserCart);
  const deleteCartItem = useCartStore((state) => state.deleteCartItem);

  useEffect(() => {
    loadUserCart();
  }, []);

  const changeQuantityItems = (
    id: number,
    quantity: number,
    type: QuantityType
  ) => {
    if (type === "decrement" && quantity <= 1) {
      return;
    }

    const newQuantity = type === "decrement" ? quantity - 1 : quantity + 1;
    updateCartItemQuantity(id, newQuantity);
  };

  if (isLoading) {
    return (
      <div className={Style.items}>
        <ul className={Style.items_title}>
          <li style={{ width: "320px" }}>
            <h4>Products</h4>
          </li>

          <li style={{ width: "160px" }}>
            <h4>Price</h4>
          </li>

          <li style={{ width: "100px" }}>
            <h4>Quantity</h4>
          </li>

          <li style={{ marginLeft: "70px" }}>
            <h4>Total</h4>
          </li>
        </ul>

        <ul className={Style.lists}>
          {isLoading &&
            [...new Array(3)].map((_, index: number) => (
              <Skeleton
                key={index}
                width="850"
                height="100"
                style={{ marginBottom: "40px" }}
                uniqueKey="4"
              />
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={Style.items}>
      <ul className={Style.items_title}>
        <li style={{ width: "320px" }}>
          <h4>Products</h4>
        </li>

        <li style={{ width: "160px" }}>
          <h4>Price</h4>
        </li>

        <li style={{ width: "100px" }}>
          <h4>Quantity</h4>
        </li>

        <li style={{ marginLeft: "70px" }}>
          <h4>Total</h4>
        </li>
      </ul>

      <ul className={Style.lists}>
        {cartItems.map((item) => (
          <li className={Style.list} key={item.id}>
            <div className={Style.layout}>
              <Link className={Style.img} href={`/item/${item.itemId}`}>
                <Image
                  priority
                  width={100}
                  height={100}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={item.imgUrl}
                  alt={item.name}
                />
              </Link>

              <div className={Style.driver}>
                <Link href={`/item/${item.itemId}`}>
                  <h3 className={Style.title}>{item.name}</h3>
                </Link>

                <p className={Style.size}>
                  <span>Size:</span>
                  {item.variations[item.variationId].size.shortName}
                </p>

                <p className={Style.sku}>
                  <span>Sku:</span>
                  {item.sku}
                </p>
              </div>

              {item.variations[item.variationId].onSale ? (
                <div className={Style.info}>
                  <div className={Style.prices}>
                    <span className={Style.sale}>
                      ${item.variations[item.variationId].price.toFixed(2)}
                    </span>

                    <span className={Style.price}>
                      ${item.variations[item.variationId].sale.toFixed(2)}
                    </span>
                  </div>
                </div>
              ) : (
                <div className={Style.info}>
                  <span className={Style.price}>
                    ${item.variations[item.variationId].price.toFixed(2)}
                  </span>
                </div>
              )}

              <div className={Style.quantity}>
                <button
                  onClick={() =>
                    changeQuantityItems(item.id, item.quantity, "decrement")
                  }
                >
                  {svgDecr}
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    changeQuantityItems(item.id, item.quantity, "increment")
                  }
                >
                  {svgIncr}
                </button>
              </div>

              <span className={Style.total}>
                ${item.singleItemPrice.toFixed(2)}
              </span>

              <span
                className={Style.delete}
                onClick={() => deleteCartItem(item.id)}
              >
                {svgTrash}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
