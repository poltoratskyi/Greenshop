import Style from "./auth-form.module.scss";

interface Props {
  overflow?: boolean;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthForm: React.FC<Props> = ({ title, subtitle, overflow, children }) => {
  return (
    <div className={`${Style.formCard} ${overflow && Style.overflow}`}>
      {overflow && <h2 className={Style.title}>{title}</h2>}

      <h4 className={Style.subtitle}>{subtitle}</h4>

      {children}
    </div>
  );
};

export default AuthForm;
