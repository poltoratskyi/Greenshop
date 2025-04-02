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
interface Props {
  data: OrderItems[];
}

const Orders: React.FC<Props> = ({ data }) => {
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
                    <div className={Style.box}>
                      Order Status:{" "}
                      <span className={`${Style.text} ${Style.status}`}>
                        {item.status}
                      </span>
                    </div>

                    <div className={Style.box}>
                      Order Number:{" "}
                      <span className={Style.text}>{product.orderId}</span>
                    </div>

                    <div className={Style.box}>
                      Date Placed:{" "}
                      <span className={Style.text}>
                        {new Date(item.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                        })}
                      </span>
                    </div>

                    <div className={Style.box}>
                      Quantity:{" "}
                      <span className={Style.text}>{product.quantity}</span>
                    </div>

                    <div className={Style.box}>
                      Total:{" "}
                      <span className={Style.text}>
                        ${item.totalAmount.toFixed(2)}
                      </span>
                    </div>

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
