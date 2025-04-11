import { Delete, IImage, Price, Quantity, Total } from "../../ui/cart";
import ItemInfo from "../../ui/item-info";
import Style from "./item-table.module.scss";
import { CartItemVariation } from "../../../types";
import { useCartStore } from "../../../store";

interface Props {
  hiddenColumns: boolean;
  hiddenQtyBtns: boolean;
  pathName: string;
  id: number;
  itemId: number;
  imgUrl: string;
  name: string;
  sku: string;
  quantity: number;
  singleItemPrice: number;
  variationId: number;
  variations: CartItemVariation[];
}

const Tbody: React.FC<Props> = ({
  hiddenColumns,
  hiddenQtyBtns,
  pathName,
  id,
  itemId,
  imgUrl,
  quantity,
  sku,
  name,
  singleItemPrice,
  variationId,
  variations,
}) => {
  const deleteCartItem = useCartStore((state) => state.deleteCartItem);

  return (
    <>
      <td
        className={`${
          pathName === "/checkout" ? `${Style.td} ${Style.checkout}` : Style.td
        }`}
      >
        <div className={Style.info}>
          <IImage
            itemId={itemId}
            imgUrl={imgUrl}
            name={name}
            id={id}
            variations={variations}
          />

          <ItemInfo
            showQuantity={false}
            variations={variations}
            name={name}
            imgUrl={imgUrl}
            id={id}
            itemId={itemId}
            sku={sku}
            variationId={variationId}
          />
        </div>
      </td>

      {!hiddenColumns && (
        <td
          className={`${
            pathName === "/checkout"
              ? `${Style.td} ${Style.checkout}`
              : Style.td
          }`}
        >
          <Price
            className="table"
            variationId={variationId}
            variations={variations}
          />
        </td>
      )}

      <td
        className={`${
          pathName === "/checkout" ? `${Style.td} ${Style.checkout}` : Style.td
        }`}
      >
        <Quantity hiddenQtyBtns={hiddenQtyBtns} id={id} quantity={quantity} />
      </td>

      <td
        className={`${
          pathName === "/checkout" ? `${Style.td} ${Style.checkout}` : Style.td
        }`}
      >
        <Total pathName={pathName} singleItemPrice={singleItemPrice} />
      </td>

      {!hiddenColumns && (
        <td
          className={`${
            pathName === "/checkout"
              ? `${Style.td} ${Style.checkout}`
              : Style.td
          }`}
        >
          <Delete itemId={id} onClick={deleteCartItem} />
        </td>
      )}
    </>
  );
};
export default Tbody;
