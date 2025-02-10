"use client";

import Style from "./item-table.module.scss";
import LoaderItem from "../loaders/default";
import Table from "./table";
import { useCartStore } from "../../../store";
import { usePathname } from "next/navigation";

interface Props {
  hiddenColumns: boolean;
  hiddenQtyBtns: boolean;
  headerData: string[];
}

const ItemTable: React.FC<Props> = ({
  hiddenColumns,
  headerData,
  hiddenQtyBtns,
}) => {
  const isLoading = useCartStore((state) => state.isLoading);
  const pathName = usePathname();

  return (
    <>
      {isLoading ? (
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
              <th
                style={{ textAlign: "left" }}
                className={`${
                  pathName === "/checkout"
                    ? `${Style.title} ${Style.checkout}`
                    : Style.title
                }`}
              >
                Loading...
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                className={`${
                  pathName === "/checkout"
                    ? `${Style.td} ${Style.checkout}`
                    : Style.td
                }`}
              >
                <LoaderItem cart />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <Table
          hiddenColumns={hiddenColumns}
          hiddenQtyBtns={hiddenQtyBtns}
          headerData={headerData}
          pathName={pathName}
        />
      )}
    </>
  );
};

export default ItemTable;
