import Style from "./adv.module.scss";

import { Button } from "../../ui/button";

const svg = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8126 8.79419H3.56258"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.2748 4.27587C10.2748 4.27587 14.8123 6.72162 14.8123 8.79312C14.8123 10.8661 10.2748 13.3126 10.2748 13.3126"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AdvData = [
  {
    id: 1,
    imgUrl: "adv/adv_1-min.png",
    title: "Summer cactus",
    subTitle: "succulents",
    descr:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
  },

  {
    id: 2,
    imgUrl: "adv/adv_2-min.png",
    title: "Styling Trends",
    subTitle: "much more",
    descr:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
  },
];

export const Adv = () => {
  return (
    <div className={Style.adv}>
      <div className="container">
        <div className={Style.content}>
          {AdvData.map((item) => (
            <div className={Style.info} key={item.id}>
              <img src={item.imgUrl} alt={item.title} />

              <div className={Style.wrapper}>
                <h3 className={Style.title}>
                  {item.title} <br /> & {item.subTitle}
                </h3>

                <p className={Style.descr}>{item.descr}</p>

                <Button value="Find More" className="adv" svgRight={svg} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
