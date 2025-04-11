"use client";

import Style from "./favorites.module.scss";
import Empty from "../../empty";
import { Review, Wrapper } from "../../layout";
import { useWishlistStore } from "@/store/wishlist";
import Slider from "@/components/ui/slider";
import { SwiperSlide } from "swiper/react";
import ItemList from "../../catalog/card";
import ItemsWrapper from "../../catalog/wrapper";
import CatalogStyle from "../../../shared/catalog/catalog.module.scss";
import { useEffect } from "react";
import Loader from "@/components/ui/loader";
import { OrderDetailsItem } from "@/components/ui/order";
import SizeSelectionModal from "@/components/ui/size-selection-modal";

const Favorites: React.FC = () => {
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  const createdAt = useWishlistStore((state) => state.createdAt);
  const isLoading = useWishlistStore((state) => state.isLoading);
  const loadUserWishlist = useWishlistStore((state) => state.loadUserWishlist);

  useEffect(() => {
    loadUserWishlist();
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Review title="Wishlist">
          <Loader />
        </Review>
      </Wrapper>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <Wrapper>
        <Review title="Wishlist">
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
        <Review title="Wishlist">
          <Slider lastPoint={3.4}>
            {wishlistItems.map((item) => (
              <SwiperSlide key={item.id}>
                <OrderDetailsItem
                  className="text"
                  label="Category"
                  value={item.item.category.name}
                />

                <OrderDetailsItem
                  className="text"
                  label="SKU"
                  value={item.item.sku}
                />

                <OrderDetailsItem
                  className="text"
                  label="Size"
                  value={item.item.variations[item.variationId].size.shortName}
                />

                <OrderDetailsItem
                  className="text"
                  label="Date Placed"
                  value={new Date(createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                />

                <ItemsWrapper gridUnset>
                  <div className={CatalogStyle.list}>
                    <ItemList
                      id={item.item.id}
                      name={item.item.name}
                      imgUrl={item.item.imgUrl}
                      variations={item.item.variations}
                      variationId={item.variationId}
                    />
                  </div>
                </ItemsWrapper>
              </SwiperSlide>
            ))}
          </Slider>
        </Review>
      </Wrapper>

      <SizeSelectionModal />
    </>
  );
};

export default Favorites;
