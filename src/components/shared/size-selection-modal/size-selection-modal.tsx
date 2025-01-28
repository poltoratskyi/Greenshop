"use client";

import { useRef } from "react";
import { useClickAway } from "react-use";
import Style from "./size-selection-modal.module.scss";
import { useUIStore, useItemStore } from "../../../store";
import { svgClose } from "./static-data";
import Item from "./item";
import Skeleton from "../skeleton/modal-item-size";

const SizeSelectionModal: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const modalItem = useItemStore((state) => state.modalItem);
  const modalIsLoading = useItemStore((state) => state.modalIsLoading);

  const isModalSizeOpen = useUIStore((state) => state.isModalSizeOpen);
  const setIsModalSizeOpen = useUIStore((state) => state.setIsModalSizeOpen);

  useClickAway(ref, () => {
    if (isModalSizeOpen) {
      setIsModalSizeOpen(false);
    }
  });

  if (modalIsLoading) {
    return (
      <>
        <div
          className={`${
            isModalSizeOpen
              ? `${Style.overlay} ${Style.visible}`
              : Style.overlay
          }`}
        ></div>

        <div
          ref={ref}
          className={`${
            isModalSizeOpen
              ? ` ${Style.modal} ${Style.active}`
              : `${Style.modal}`
          } `}
        >
          <div className={Style.header}>
            <h2 className={Style.title}>Select Size</h2>

            <span
              onClick={() => setIsModalSizeOpen(false)}
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
          isModalSizeOpen ? `${Style.overlay} ${Style.visible}` : Style.overlay
        }`}
      ></div>

      <div
        ref={ref}
        className={`${
          isModalSizeOpen ? ` ${Style.modal} ${Style.active}` : `${Style.modal}`
        } `}
      >
        <div className={Style.header}>
          <h2 className={Style.title}>Select Size</h2>

          <span
            onClick={() => setIsModalSizeOpen(false)}
            className={Style.close}
          >
            {svgClose}
          </span>
        </div>

        <div className={Style.content}>
          {modalItem.map((variation) => (
            <div key={variation.id}>
              <Item {...variation} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SizeSelectionModal;
