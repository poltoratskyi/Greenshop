import { Review, Wrapper } from "../../layout";
import { info } from "./static-data";
import Style from "./support.module.scss";

const Support: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Review title="Support">
          <h3 className={Style.title}>Need Help? We are Here for You!</h3>

          <p className={Style.subtitle}>
            Your satisfaction is our priority! If you have any questions or need
            assistance, our dedicated support team is always ready to help
          </p>

          <p className={Style.subtitle}>
            Choose the most convenient way to reach us from the options below,
            and we will get back to you as soon as possible
          </p>

          <ul className={Style.lists}>
            {info.map((item, index) => (
              <li className={Style.list} key={index}>
                <div className={Style.icon}>{item.svg}</div>

                <p className={Style.descr}>{item.descr}</p>
              </li>
            ))}
          </ul>
        </Review>
      </Wrapper>
    </>
  );
};

export default Support;
