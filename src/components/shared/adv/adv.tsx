import Image from "next/image";

import Style from "./adv.module.scss";

import Button from "../../shared/button";

import { svgRight, advData } from "./static-data";

interface Item {
  id: number;
  imgUrl: string;
  title: string;
  subTitle: string;
  descr: string;
}
[];

const Adv: React.FC = () => {
  return (
    <section className={Style.adv}>
      <div className="container">
        <div className={Style.content}>
          {advData.map((item: Item) => (
            <div className={Style.info} key={item.id}>
              <div className={Style.img}>
                <Image
                  width={600}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  src={item.imgUrl}
                  alt={item.title}
                />
              </div>

              <div className={Style.wrapper}>
                <h3 className={Style.title}>
                  {item.title} <br /> & {item.subTitle}
                </h3>

                <p className={Style.descr}>{item.descr}</p>

                <Button
                  link={true}
                  value="Find More"
                  className="adv"
                  svgRight={svgRight}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adv;
