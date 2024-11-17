import Style from "./modal-forms.module.scss";

import Social from "./social";

import Button from "../button";

interface Props {
  overflow?: boolean;
}

const SignUp: React.FC<Props> = ({ overflow }) => {
  return (
    <div className={`${Style.log_in} ${overflow && Style.overflow}`}>
      {overflow && <h2 className={Style.text_reg}>Sign Up</h2>}

      <h3>Sign up to get started.</h3>

      <form action="#" method="post">
        <input
          className={Style.sign_up__name}
          id="sign_up__id"
          name="username"
          type="text"
          placeholder="Enter your username"
          autoComplete="off"
        />

        <input
          id="sign_up__email-id"
          name="email"
          type="email"
          className={Style.sign_up__email}
          placeholder="Enter your email address"
          autoComplete="off"
        />

        <input
          className={Style.sign_up__password}
          id="sign_up__password-id"
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />

        <input
          className={Style.confirm_password}
          id="confirm_password-id"
          name="password"
          type="password"
          placeholder="Confirm Password"
          autoComplete="off"
        />

        <Button button className="sign_up" value="Create an account" />
      </form>
      <Social
        location="Or sign up with"
        google="Continue with Google"
        facebook="Continue with Facebook"
        github="Continue with Github"
      />
    </div>
  );
};

export default SignUp;
