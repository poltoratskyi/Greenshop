import Style from "./modal.module.scss";

import Social from "./social";

import Input from "../input";
import Button from "../button";

const Register: React.FC = () => {
  return (
    <div className={Style.register}>
      <h3>Enter your email and password to register.</h3>

      <form action="#" method="post">
        <Input
          className="register"
          id="register"
          name="username"
          type="text"
          inputPlaceholder="Enter your username"
        />

        <Input
          id="register-email"
          name="email"
          type="email"
          className="register-email"
          inputPlaceholder="Enter your email address"
        />

        <Input
          className="register-password"
          id="register-password"
          name="password"
          type="password"
          inputPlaceholder="Password"
        />

        <Input
          className="confirm-password"
          id="confirm-password"
          name="password"
          type="password"
          inputPlaceholder="Confirm Password"
        />

        <Button button={true} className="register" value="Register" />
      </form>
      <Social
        location="Or register with"
        google="Continue with Google"
        facebook="Continue with Facebook"
        github="Continue with Github"
      />
    </div>
  );
};

export default Register;
