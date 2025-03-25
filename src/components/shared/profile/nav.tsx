import { signOut } from "next-auth/react";
import Style from "./profile.module.scss";
import {
  svgCart,
  svgHeart,
  svgMap,
  svgProfile,
  svgProfileOut,
  svgSupport,
} from "./static-data";
import { useState } from "react";
import Button from "@/components/ui/button";

const Nav: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onClickLogOut = () => {
    setIsLoading(true);

    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <nav className={Style.nav}>
      <ul className={Style.lists}>
        <li className={`${Style.list} ${Style.active}`}>
          {svgProfile} <span>Account Details</span>
        </li>

        <li className={Style.list}>{svgMap} Address</li>

        <li className={Style.list}>
          {svgCart} <span>Orders</span>
        </li>

        <li className={Style.list}>
          {svgHeart} <span>Wishlist</span>
        </li>

        <li className={Style.list}>{svgSupport} Support</li>
      </ul>

      <span className={Style.line}></span>

      <Button
        isLoading={isLoading}
        onClick={onClickLogOut}
        type="button"
        className="logOut"
        value="Log out"
        svgLeft={svgProfileOut}
      />
    </nav>
  );
};

export default Nav;
