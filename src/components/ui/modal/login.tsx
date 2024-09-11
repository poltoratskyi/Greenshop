import Link from "next/link";

import Style from "./modal.module.scss";

import Input from "../input";
import Button from "../button";
import Social from "./social";

const Login: React.FC = () => {
  return (
    <div className={Style.login}>
      <h3>Enter your username and password to login.</h3>

      <div className={Style.scrollbar}>
        <form action="#" method="post">
          <Input
            className="login"
            id="login"
            name="username"
            type="text"
            inputPlaceholder="Enter your username"
          />

          <Input
            className="login-password"
            id="login-password"
            name="password"
            type="password"
            inputPlaceholder="Enter your password to login"
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
    </div>
  );
};

export default Login;
