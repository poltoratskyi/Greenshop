import Style from "./checkout-form.module.scss";

interface Props {
  id: string;
  type: string;
  name: string;
  label: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({ id, type, label, name, placeholder }) => {
  return (
    <div className={Style.block}>
      <label className={Style.label} htmlFor={name}>
        {label} <span>*</span>
      </label>
      <input
        className={Style.input}
        id={id}
        placeholder={placeholder}
        type={type}
        name={name}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
