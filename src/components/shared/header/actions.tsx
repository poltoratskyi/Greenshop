import Link from "next/link";

import Style from "./header.module.scss";

import { useUIStore } from "../../../utils/store";

import { svgCart, svgLogin, svgSearch } from "./static-data";

const Actions: React.FC = () => {
  const setOpenSearch = useUIStore((state) => state.setOpenSearch);
  const setOpenModal = useUIStore((state) => state.setOpenModal);

  return (
    <div className={Style.actions}>
      <span
        onClick={() => {
          setOpenSearch && setOpenSearch(true);
        }}
      >
        {svgSearch}
      </span>

      <Link href="/cart">{svgCart}</Link>

      <Link
        onClick={() => {
          setOpenModal(true);
        }}
        className={Style.login}
        href="/login"
      >
        {svgLogin}
        Login
      </Link>
    </div>
  );
};

export default Actions;
