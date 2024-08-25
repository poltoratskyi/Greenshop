import Image from "next/image";

import Style from "./banner.module.scss";

import { Button } from "../../ui/button";

export const Banner: React.FC = () => {
  return (
    <div className={Style.banner}>
      <div className="container">
        <div className={Style.content}>
          <div className={Style.info}>
            <span>Welcome to GreenShop</span>
            <h1>
              Let’s Make a <br /> Better <mark>Planet</mark>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>

            <Button className="banner" value="shop now" />
          </div>

          <Image
            src="/catalog/Lily-min.png"
            width={500}
            height={500}
            priority={true}
            alt="Main-banner.jpg"
          />
        </div>
      </div>
    </div>
  );
};
