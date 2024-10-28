import Link from "next/link";

import Style from "./login.module.scss";

import Button from "../../shared/button";
import Social from "./social";

const Login: React.FC = () => {
  return (
    <div className={Style.login}>
      <h3>Enter your username and password to login.</h3>

      <form action="#" method="post">
        <input
          className={Style.login_name}
          id="login_id"
          name="username"
          type="text"
          placeholder="Enter your username"
          autoComplete="off"
        />

        <input
          className={Style.login_password}
          id="login-password_id"
          name="password"
          type="password"
          placeholder="Enter your password to login"
          autoComplete="off"
        />

        <div className={Style.reset}>
          <Link href="#">Forgot Password?</Link>
        </div>

        <Button button={true} className="enter" value="Login" />
      </form>

      <Social
        location="Or login with"
        google="Login with Google"
        facebook="Login with Facebook"
        github="Login with Github"
      />
    </div>
  );
};

export default Login;
