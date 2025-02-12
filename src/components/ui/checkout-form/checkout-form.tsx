import Style from "./checkout-form.module.scss";

interface Props {
  children: React.ReactNode;
}

const Form: React.FC<Props> = ({ children }) => {
  return <form className={Style.form}>{children}</form>;
};

export default Form;
