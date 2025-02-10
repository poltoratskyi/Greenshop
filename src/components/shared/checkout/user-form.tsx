import Style from "./checkout.module.scss";

const UserForm: React.FC = () => {
  return (
    <div className={Style.form}>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
};

export default UserForm;
