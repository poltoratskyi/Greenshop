import { usePathname } from "next/navigation";

import Style from "./mobile-header.module.scss";

const TopInfo: React.FC = () => {
  const pathname = usePathname();

  return (
    <div id="top-info" className={Style.top_info}>
      <>
        {pathname !== "/" && (
          <h4 className={Style.text}>Summer sale - up to 20% off!</h4>
        )}

        <p className={`${Style.text} ${Style.delivered}`}>
          Fresh flowers delivered to your door!
        </p>
      </>
    </div>
  );
};

export default TopInfo;
