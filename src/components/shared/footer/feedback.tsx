// Feedback.tsx
import Style from "./footer.module.scss";
import Accept from "./accept";
import NavList from "./nav-list";
import { account, help, category, titles } from "./static-data";

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
