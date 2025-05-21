"use client";

import Link from "next/link";
import Image from "next/image";
import { ItemVariation } from "../../../types";
import Style from "./catalog.module.scss";
import {
  calculateDiscountPercentage,
  saveViewedProduct,
} from "../../../lib/client";
import { svgCart, svgHeart } from "./static-data";
import {
  useCartStore,
  useItemStore,
  useSearchStore,
  useUIStore,
  useWishlistStore,
} from "../../../store";
import Price from "../../ui/cart/price";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { svgDelete } from "./static-data";

interface Props {
  id: number;
  name: string;
  imgUrl: string;
  variations: ItemVariation[];
  variationId?: number;
}

const Card: React.FC<Props> = ({
  id,
  name,
  imgUrl,
  variations,
  variationId,
}) => {
  const { data: session } = useSession();

  const pathname = usePathname();

  const deleteWishlistItem = useWishlistStore(
    (state) => state.deleteWishlistItem
  );

  const isSearchOpen = useUIStore((state) => state.isSearchOpen);
  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);
  const setIsModalSizeOpen = useUIStore((state) => state.setIsModalSizeOpen);
  const setOpenedModalType = useUIStore((state) => state.setOpenedModalType);

  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const resetSearchResults = useSearchStore(
    (state) => state.resetSearchResults
  );

  const loadModalSingleItem = useItemStore(
    (state) => state.loadModalSingleItem
  );

  const openModalWithItem = (boolean: boolean, id: number) => {
    setOpenedModalType(boolean);
    loadModalSingleItem(id);
    setIsModalSizeOpen(true);
  };

  const closeSearchPanel = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    resetSearchResults();
  };

  return (
    <>
      <div>
        <div className={Style.block}>
          <Link
            onClick={() => {
              if (isSearchOpen) {
                closeSearchPanel();
              }

              saveViewedProduct({ id, name, imgUrl, variations });

              window.scrollTo({
                top: 0,
              });

              document.body.style.overflow = "auto";
            }}
            className={Style.img}
            href={`/item/${id}`}
          >
            <Image
              width={600}
              height={600}
              style={{
                width: "100%",
                height: "auto",
              }}
              src={imgUrl}
              alt={name}
            />
          </Link>

          <div className={Style.control}>
            {!session ? (
              <Link
                className={
                  pathname === "/login"
                    ? `${Style.favorite} ${Style.active}`
                    : Style.favorite
                }
                href="/login"
              >
                {svgHeart}
              </Link>
            ) : (
              <span
                className={Style.favorite}
                onClick={() => openModalWithItem(false, id)}
              >
                {svgHeart}
              </span>
            )}

            <span
              className={Style.cart}
              onClick={() => openModalWithItem(true, id)}
            >
              {svgCart}
            </span>

            {pathname === "/profile/wishlist" && (
              <span
                className={Style.delete}
                onClick={() => deleteWishlistItem(id)}
                aria-label="Delete item"
              >
                {svgDelete}
              </span>
            )}
          </div>

          {variations[variationId || 0].onSale && (
            <div className={Style.percent}>
              {calculateDiscountPercentage(
                variations[variationId || 0].price,
                variations[variationId || 0].sale
              )}
              {"% OFF"}
            </div>
          )}
        </div>

        <Link
          onClick={() => {
            if (isSearchOpen) {
              closeSearchPanel();
            }

            window.scrollTo({
              top: 0,
            });

            saveViewedProduct({ id, name, imgUrl, variations });

            document.body.style.overflow = "auto";
          }}
          className={Style.title}
          href={`/item/${id}`}
        >
          {name}
        </Link>
      </div>

      <Price
        className="catalog"
        variations={variations}
        variationId={variationId ? variationId : 0}
      />
    </>
  );
};

export default Card;
