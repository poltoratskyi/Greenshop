import Style from "./login.module.scss";

import Social from "./social";

import Button from "../../shared/button";

const Register: React.FC = () => {
  return (
    <div className={Style.register}>
      <h3>Enter your email and password to register.</h3>

      <form action="#" method="post">
        <input
          className={Style.register_name}
          id="register_id"
          name="username"
          type="text"
          placeholder="Enter your username"
          autoComplete="off"
        />

        <input
          id="register-email_id"
          name="email"
          type="email"
          className={Style.register_email}
          placeholder="Enter your email address"
          autoComplete="off"
        />

        <input
          className={Style.register_password}
          id="register-password_id"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />

        <input
          className={Style.confirm_password}
          id="confirm-password_id"
          name="password"
          type="password"
          placeholder="Confirm Password"
          autoComplete="off"
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
