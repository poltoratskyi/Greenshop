"use client";

import Style from "./orders.module.scss";
import { OrderItem, OrderItems } from "@/types";
import { Review, Wrapper } from "../../layout";
import Slider from "@/components/ui/slider";
import ItemsWrapper from "../../../shared/catalog/wrapper";
import ItemList from "../../../shared/catalog/card";
import CatalogStyle from "../../../shared/catalog/catalog.module.scss";
import { SwiperSlide } from "swiper/react";
import SizeSelectionModal from "@/components/ui/size-selection-modal";
import Empty from "../../empty";
import { OrderDetailsItem } from "@/components/ui/order";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
interface Props {
  data: OrderItems[];
}

const Orders: React.FC<Props> = ({ data }) => {
  const [loading, setLoading] = useState(!data);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <Wrapper>
        <Review title="Orders">
          <Loader />
        </Review>
      </Wrapper>
    );
  }

  if (data.length === 0) {
    return (
      <Wrapper>
        <Review title="Orders">
          <div className={Style.wrapper}>
            <Empty />
          </div>
        </Review>
      </Wrapper>
    );
  }

  return (
    <>
      <Wrapper>
        <Review title="Orders">
          <Slider lastPoint={3.4}>
            {data.map((item: OrderItems) => (
              <div key={item.id}>
                {item.items.map((product: OrderItem) => (
                  <SwiperSlide key={product.id}>
                    <OrderDetailsItem
                      className="status"
                      label="Order Status"
                      value={item.status}
                    />

                    <OrderDetailsItem
                      className="text"
                      label="Order Number"
                      value={product.orderId}
                    />

                    <OrderDetailsItem
                      className="text"
                      label="Date Placed"
                      value={new Date(item.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        }
                      )}
                    />

                    <OrderDetailsItem
                      className="text"
                      label="Quantity"
                      value={product.quantity}
                    />

                    <OrderDetailsItem
                      className="text"
                      label="Total"
                      value={"$" + item.totalAmount.toFixed(2)}
                    />

                    <ItemsWrapper gridUnset>
                      <div className={CatalogStyle.list}>
                        <ItemList
                          id={product.item.id}
                          name={product.item.name}
                          imgUrl={product.item.imgUrl}
                          variations={product.item.variations}
                          variationId={product.variationId}
                        />
                      </div>
                    </ItemsWrapper>
                  </SwiperSlide>
                ))}
              </div>
            ))}
          </Slider>
        </Review>
      </Wrapper>

      <SizeSelectionModal />
    </>
  );
};

export default Orders;
