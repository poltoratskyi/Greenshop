import Style from "./checkout.module.scss";
import Logo from "../../ui/logo";
import Link from "next/link";
import { svgBackspace } from "./static-data";

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className={Style.header}>
        <Link className={Style.link} href="/">
          {svgBackspace} Continue Shopping
        </Link>

        <Logo />

        <p className={Style.phone}>
          You may call us: <a href="tel:+8801911717490">+88 019 117 17 490</a>
          <br /> Mon - Fri: 8:00 AM - 2:00 PM EST
        </p>
      </div>
    </div>
  );
};

export default Header;
