"use client";

import Style from "./modal-choose-item-size.module.scss";

import { useUIStore, useCatalogStore } from "../../../store";

import { svgClose } from "./static-data";

import ItemList from "./item-list";

const ModalChooseItemSize: React.FC = () => {
  const catalog = useCatalogStore((state) => state.catalog);

  const modalSize = useUIStore((state) => state.modalSize);
  const selectedItemId = useUIStore((state) => state.selectedItemId);

  const setOpenModalSize = useUIStore((state) => state.setOpenModalSize);

  return (
    <>
      <div
        className={`${
          modalSize ? `${Style.overlay} ${Style.visible}` : Style.overlay
        }`}
      ></div>

      <div
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
          {catalog
            .filter((variation) => variation.id === selectedItemId)
            .map((variation) => (
              <div className={Style.block} key={variation.id}>
                <ItemList {...variation} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ModalChooseItemSize;
