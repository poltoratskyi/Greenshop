import Link from "next/link";

import Style from "./modal.module.scss";

import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const svgClose = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 513.552 513.552"
    enableBackground=":new 0 0 513.552 513.552;"
    fill="#46a358"
  >
    <g>
      <g>
        <path d="M510.132,489.755c-0.476-0.556-0.995-1.075-1.552-1.552L276.9,256.382l231.822-231.68c5.577-5.577,5.577-14.619,0-20.196 c-5.577-5.577-14.619-5.577-20.196,0l-231.68,231.822L25.167,4.506c-5.577-5.577-14.619-5.577-20.196,0s-5.577,14.619,0,20.196 l231.822,231.68L4.972,488.062c-5.966,5.109-6.661,14.087-1.552,20.053c5.109,5.966,14.087,6.661,20.053,1.552 c0.556-0.476,1.075-0.995,1.552-1.552l231.822-231.68l231.68,231.822c5.109,5.966,14.087,6.661,20.053,1.552 C514.546,504.699,515.241,495.721,510.132,489.755z"></path>
      </g>
    </g>
  </svg>
);

const facebook = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clipPath="url(#clip0_9_1018)">
      <path
        d="M13.3308 3.32083H15.1566V0.140826C14.8416 0.0974924 13.7583 -7.62939e-06 12.4966 -7.62939e-06C6.71993 -7.62939e-06 8.2916 6.54166 8.0616 7.49999H5.15576V11.055H8.06076V20H11.6224V11.0558H14.4099L14.8524 7.50083H11.6216C11.7783 5.14749 10.9874 3.32083 13.3308 3.32083Z"
        fill="#3B5999"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_1018">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const google = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clipPath="url(#clip0_9_990)">
      <path
        d="M16.4336 17.6055C14.6992 19.0703 12.4493 20 10 20C6.35547 20 3.15621 17.9922 1.42188 15.0625L2.07117 12.0695L4.94922 11.5352C5.61719 13.6914 7.63278 15.2734 10 15.2734C11.1484 15.2734 12.2148 14.9102 13.0938 14.2656L15.8594 14.6875L16.4336 17.6055Z"
        fill="#59C36A"
      />
      <path
        d="M16.4336 17.6055L15.8594 14.6875L13.0937 14.2656C12.2148 14.9102 11.1484 15.2734 10 15.2734V20C12.4493 20 14.6992 19.0703 16.4336 17.6055Z"
        fill="#00A66C"
      />
      <path
        d="M4.72656 10C4.72656 10.539 4.8086 11.0546 4.94922 11.5352L1.42188 15.0625C0.542969 13.5859 0 11.8515 0 10C0 8.1484 0.542969 6.41406 1.42188 4.9375L4.25285 5.42473L4.94922 8.46484C4.8086 8.94527 4.72656 9.4609 4.72656 10Z"
        fill="#FFDA2D"
      />
      <path
        d="M20 10C20 13.0468 18.5899 15.7773 16.4336 17.6055L13.0938 14.2656C13.7734 13.7734 14.3477 13.1171 14.7227 12.3437H10C9.67184 12.3437 9.41406 12.0859 9.41406 11.7578V8.24219C9.41406 7.91402 9.67184 7.65625 10 7.65625H19.25C19.5312 7.65625 19.7773 7.85543 19.8242 8.13668C19.9414 8.74609 20 9.37887 20 10Z"
        fill="#4086F4"
      />
      <path
        d="M14.7227 12.3437C14.3477 13.1171 13.7734 13.7734 13.0938 14.2656L16.4336 17.6055C18.5899 15.7773 20 13.0469 20 10C20 9.37887 19.9414 8.74609 19.8242 8.13668C19.7773 7.85543 19.5312 7.65625 19.25 7.65625H10V12.3437H14.7227Z"
        fill="#4175DF"
      />
      <path
        d="M16.5977 2.79293C16.6094 2.95699 16.5391 3.10937 16.4336 3.22652L13.9258 5.72262C13.7266 5.93355 13.3985 5.95699 13.1641 5.78121C12.2382 5.08984 11.1484 4.72656 10 4.72656C7.63278 4.72656 5.61719 6.30855 4.94922 8.46484L1.42188 4.9375C3.15621 2.00781 6.35547 0 10 0C12.332 0 14.6055 0.859375 16.3867 2.35934C16.5156 2.46484 16.5859 2.62887 16.5977 2.79293Z"
        fill="#FF641A"
      />
      <path
        d="M13.1641 5.78121C13.3984 5.95703 13.7265 5.93355 13.9257 5.72262L16.4336 3.22652C16.5391 3.10938 16.6094 2.95703 16.5976 2.79293C16.5859 2.62883 16.5156 2.46484 16.3867 2.35934C14.6055 0.859375 12.332 0 10 0V4.72656C11.1484 4.72656 12.2382 5.08984 13.1641 5.78121Z"
        fill="#F03800"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_990">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

interface Props {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

export const Modal: React.FC<Props> = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`${
        openModal ? `${Style.modal} ${Style.visible}` : Style.modal
      }`}
    >
      <div className={Style.content}>
        <div onClick={() => setOpenModal(false)} className={Style.close}>
          {svgClose}
        </div>

        <div className={Style.title}>
          <h2 className={Style.login}>Login</h2>
          <span>I</span>
          <h2 className={Style.register}>Register</h2>
        </div>

        <h3>Enter your username and password to login.</h3>

        <form action="#" method="post">
          <Input
            className="login"
            id="username"
            name="username"
            type="text"
            inputPlaceholder="Enter your username"
          />

          <Input
            className="password"
            id="password"
            name="password"
            type="password"
            inputPlaceholder="Enter your password to login"
          />

          <div className={Style.reset}>
            <Link href="#">Forgot Password?</Link>
          </div>

          <Button button={true} className="enter" value="Login" />
        </form>

        <div className={Style.extra}>
          <span className={Style.line}></span>
          <p>Or login with</p>
          <span className={Style.line}></span>
        </div>

        <Button
          svgLeft={google}
          button={true}
          className="google"
          value="Login with Google"
        />

        <Button
          svgLeft={facebook}
          button={true}
          className="facebook"
          value="Login with Facebook"
        />
      </div>

      <div className={Style.bottom_line}></div>
    </div>
  );
};
