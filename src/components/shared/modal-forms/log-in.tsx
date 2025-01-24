import Link from "next/link";

import Style from "./modal-forms.module.scss";

import Button from "../button";
import Social from "./social";

interface Props {
  overflow?: boolean;
}

const LogIn: React.FC<Props> = ({ overflow }) => {
  return (
    <div className={`${Style.log_in} ${overflow && Style.overflow}`}>
      {overflow && <h2 className={Style.text_reg}>Log In</h2>}

      <h4>Log in to your account to continue.</h4>

      <form action="#" method="post">
        <input
          className={Style.log_in__name}
          id="login_id"
          name="username"
          type="text"
          placeholder="Enter your username"
          autoComplete="off"
        />

        <input
          className={Style.log_in__password}
          id="login-password_id"
          name="password"
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
        />

        <div className={Style.reset}>
          <Link href="#">Forgot Password?</Link>
        </div>

        <Button button className="log_in" value="Log In" />
      </form>

      <Social
        location="Or log in with"
        google="Login with Google"
        facebook="Login with Facebook"
        github="Login with Github"
      />
    </div>
  );
};

export default LogIn;
