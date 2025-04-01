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
import { useItemStore, useSearchStore, useUIStore } from "../../../store";
import Price from "../../ui/cart/price";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

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
  const { data: session, status } = useSession();

  const pathname = usePathname();

  const isSearchOpen = useUIStore((state) => state.isSearchOpen);
  const setIsSearchOpen = useUIStore((state) => state.setIsSearchOpen);
  const setIsModalSizeOpen = useUIStore((state) => state.setIsModalSizeOpen);
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const resetSearchResults = useSearchStore(
    (state) => state.resetSearchResults
  );

  const loadModalSingleItem = useItemStore(
    (state) => state.loadModalSingleItem
  );

  return (
    <>
      <div>
        <div className={Style.block}>
          <Link
            onClick={() => {
              if (isSearchOpen) {
                setIsSearchOpen(false);
                setSearchQuery("");
                resetSearchResults();
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
                    : status === "loading"
                    ? `${Style.favorite} ${Style.loading}`
                    : Style.favorite
                }
                href="/login"
              >
                {svgHeart}
              </Link>
            ) : (
              <Link
                className={
                  pathname === "/profile/wishlist"
                    ? `${Style.favorite} ${Style.active}`
                    : status === "authenticated"
                    ? `${Style.favorite} ${Style.authenticated}`
                    : Style.favorite
                }
                href="/profile/wishlist"
              >
                {svgHeart}
              </Link>
            )}

            <span
              onClick={() => {
                loadModalSingleItem(id);
                setIsModalSizeOpen(true);
              }}
              className={Style.cart}
            >
              {svgCart}
            </span>
          </div>

          <div className={Style.control_mobile}>
            <span
              onClick={() => {
                loadModalSingleItem(id);
                setIsModalSizeOpen(true);
              }}
              className={Style.cart_mobile}
            >
              {svgCart}
            </span>
          </div>

          {variations[0].onSale && (
            <div className={Style.percent}>
              {calculateDiscountPercentage(
                variations[0].price,
                variations[0].sale
              )}
              {"% OFF"}
            </div>
          )}
        </div>

        <Link
          onClick={() => {
            if (isSearchOpen) {
              setIsSearchOpen(false);
              setSearchQuery("");
              resetSearchResults();
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
