import { JSX } from "react";

import FeedbackInput from "../../ui/feedback-input";

import Style from "./footer.module.scss";

import { serviceText } from "./static-data";

const Service: React.FC = () => {
  return (
    <div className={Style.service}>
      <div className={Style.label}>
        <div className={Style.info}>
          {serviceText.map((item, index: number) => (
            <div className={Style.inner} key={index}>
              <>{item.svg}</>

              <h3 className={Style.title}>{item.title}</h3>

              <p className={Style.descr}>{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className={Style.newsletters}>
          <h3 className={Style.title}>Would you like to join newsletters?</h3>

          <FeedbackInput />

          <p className={Style.descr}>
            &quot;We usually post offers and challenges in newsletter.
            We&rsquo;re your online houseplant destination. We offer a wide
            range of houseplants and accessories shipped directly from our
            (green)house to yours!&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
