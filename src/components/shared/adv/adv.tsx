import Image from "next/image";

import Style from "./adv.module.scss";

import Button from "../../ui/button";

const svgRight = (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <path
      d="m15.1956 17.7007c.387.394 1.0202.3997 1.4142.0127l5.0909-5c.1915-.188.2993-.4451.2993-.7134s-.1078-.5254-.2993-.7134l-5.0909-5.00005c-.394-.38699-1.0272-.38129-1.4142.01274-.3869.39403-.3812 1.02717.0128 1.41416l3.3463 3.28655h-15.5547c-.55228 0-1 .4477-1 1s.44772 1 1 1h15.5547l-3.3463 3.2866c-.394.3869-.3997 1.0201-.0128 1.4141z"
      fill="#fff"
    ></path>
  </svg>
);

const AdvData = [
  {
    id: 1,
    imgUrl: "/adv/adv_1-min.png",
    title: "Summer cactus",
    subTitle: "succulents",
    descr:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
  },

  {
    id: 2,
    imgUrl: "/adv/adv_2-min.png",
    title: "Styling Trends",
    subTitle: "much more",
    descr:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
  },
];

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
          {AdvData.map((item: Item) => (
            <div className={Style.info} key={item.id}>
              <Image
                src={item.imgUrl}
                width={235}
                height={235}
                alt={item.title}
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 575px) 100vw"
              />

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
