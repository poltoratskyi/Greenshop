import Link from "next/link";
import Style from "./order.module.scss";
import { svgThanks } from "./static-data";

interface Props {
  title: string;
  descr: React.ReactNode;
}

const Info: React.FC<Props> = ({ title, descr }) => {
  return (
    <>
      <div className={Style.header}>
        {svgThanks}

        <h2 className={Style.title}>{title}</h2>
      </div>

      <div className={Style.descr}>{descr}</div>

      <Link className={Style.link} href="/">
        Continue Shopping
      </Link>
    </>
  );
};

export default Info;
