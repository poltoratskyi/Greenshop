import Delete from "../../ui/delete";
import Total from "../../ui/total";
import Price from "../../ui/price";
import Info from "../../ui/info";
import IImage from "../../ui/image";
import Quantity from "../../ui/quantity";
import Style from "./item-table.module.scss";
import { CartItemVariation } from "../../../types";

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
          <Info
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
        <Total singleItemPrice={singleItemPrice} />
      </td>

      {!hiddenColumns && (
        <td
          className={`${
            pathName === "/checkout"
              ? `${Style.td} ${Style.checkout}`
              : Style.td
          }`}
        >
          <Delete id={id} />
        </td>
      )}
    </>
  );
};
export default Tbody;
