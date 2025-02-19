import Link from "next/link";
import Style from "./login.module.scss";
import Button from "../../ui/button";

const Form: React.FC = () => {
  return (
    <form className={Style.login} action="#" method="post">
      <input
        className={Style.username}
        id="login_id"
        name="username"
        type="text"
        placeholder="Username"
        autoComplete="off"
      />

      <input
        className={Style.password}
        id="login-password_id"
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="off"
      />

      <div className={Style.reset}>
        <Link href="#">Forgot Password?</Link>
      </div>

      <Button button className="logIn" value="Log In" />
    </form>
  );
};

export default Form;
