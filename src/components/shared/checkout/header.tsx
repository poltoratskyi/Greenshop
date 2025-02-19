import Style from "./checkout.module.scss";
import Logo from "../logo";
import Link from "next/link";
import { svgBackspace } from "./static-data";

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className={Style.header}>
        <Link className={Style.link} href="/">
          {svgBackspace} Continue shopping
        </Link>

        <Logo />

        <p className={Style.phone}>
          You can reach us at: <br /> Mon - Fri: 8:00 AM - 2:00 PM EST
        </p>
      </div>
    </div>
  );
};

export default Header;
