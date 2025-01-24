// Feedback.tsx
import React from "react";
import Style from "./footer.module.scss";
import Accept from "./accept";
import NavList from "./nav-list";
import { account, help, category } from "./static-data";

const titles = {
  account: "My Account",
  help: "Help & Guide",
  category: "Category",
};

const Feedback: React.FC = () => {
  return (
    <div className={Style.feedback}>
      <NavList title={titles.account} items={account} />
      <NavList title={titles.help} items={help} />
      <NavList title={titles.category} items={category} />

      <Accept />
    </div>
  );
};

export default Feedback;
