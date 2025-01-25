"use client";

import { useRef } from "react";
import { useClickAway } from "react-use";
import Style from "./modal-choose-item-size.module.scss";
import { useUIStore, useItemStore } from "../../../store";
import { svgClose } from "./static-data";
import ItemList from "./item-list";
import Skeleton from "../../ui/skeleton/modal-item-size";

const ModalChooseItemSize: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const modalItem = useItemStore((state) => state.modalItem);
  const modalIsLoading = useItemStore((state) => state.modalIsLoading);

  const modalSize = useUIStore((state) => state.modalSize);
  const setOpenModalSize = useUIStore((state) => state.setOpenModalSize);

  useClickAway(ref, () => {
    if (modalSize) {
      setOpenModalSize(false);
    }
  });

  if (modalIsLoading) {
    return (
      <>
        <div
          className={`${
            modalSize ? `${Style.overlay} ${Style.visible}` : Style.overlay
          }`}
        ></div>

        <div
          ref={ref}
          className={`${
            modalSize ? ` ${Style.modal} ${Style.active}` : `${Style.modal}`
          } `}
        >
          <div className={Style.header}>
            <h2 className={Style.title}>Select Size</h2>

            <span
              onClick={() => setOpenModalSize(false)}
              className={Style.close}
            >
              {svgClose}
            </span>
          </div>

          <div className={Style.skeleton}>
            {modalIsLoading &&
              [...new Array(1)].map((_, index: number) => (
                <Skeleton key={index} width="100%" height={350} uniqueKey="7" />
              ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={`${
          modalSize ? `${Style.overlay} ${Style.visible}` : Style.overlay
        }`}
      ></div>

      <div
        ref={ref}
        className={`${
          modalSize ? ` ${Style.modal} ${Style.active}` : `${Style.modal}`
        } `}
      >
        <div className={Style.header}>
          <h2 className={Style.title}>Select Size</h2>

          <span onClick={() => setOpenModalSize(false)} className={Style.close}>
            {svgClose}
          </span>
        </div>

        <div className={Style.content}>
          {modalItem.map((variation) => (
            <div key={variation.id}>
              <ItemList {...variation} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ModalChooseItemSize;
