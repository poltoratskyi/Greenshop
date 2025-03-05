"use client";

import Style from "./item-table.module.scss";
import Tbody from "./tbody";
import { useCartStore } from "../../../store";

interface Props {
  hiddenColumns: boolean;
  hiddenQtyBtns: boolean;
  pathName: string;
  headerData: string[];
}

const Table: React.FC<Props> = ({
  hiddenColumns,
  headerData,
  hiddenQtyBtns,
  pathName,
}) => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <table
      className={`${
        pathName === "/checkout"
          ? `${Style.table} ${Style.checkout}`
          : Style.table
      }`}
    >
      <thead
        className={`${
          pathName === "/checkout"
            ? `${Style.header} ${Style.checkout}`
            : Style.header
        }`}
      >
        <tr>
          {headerData.map((item, index) => (
            <th
              key={index}
              style={
                item === "Products"
                  ? { textAlign: "left" }
                  : item === "Subtotal"
                  ? { textAlign: "right" }
                  : {}
              }
              className={`${
                pathName === "/checkout"
                  ? `${Style.title} ${Style.checkout}`
                  : Style.title
              }`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <Tbody
              pathName={pathName}
              hiddenColumns={hiddenColumns}
              hiddenQtyBtns={hiddenQtyBtns}
              key={item.id}
              {...item}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
