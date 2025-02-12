import Style from "./action-input.module.scss";
import Button from "../button";

interface Props {
  id: string;
  name: string;
  type: string;
  className?: string;
  labelClassName?: string;
  blockClassName?: string;
  inputClassName?: string;
  label: string;
  placeholder: string;
  buttonText: string;
  buttonClassName: string;
}

const ActionInput: React.FC<Props> = ({
  id,
  name,
  type,
  className,
  labelClassName,
  blockClassName,
  inputClassName,
  label,
  placeholder,
  buttonText,
  buttonClassName,
}) => {
  const formClass = Style[className || ""];
  const labelClass = Style[labelClassName || ""];
  const blockClass = Style[blockClassName || ""];
  const inputClass = Style[inputClassName || ""];

  return (
    <form className={`${Style.form} ${formClass}`}>
      <label className={`${Style.label} ${labelClass}`} htmlFor={name}>
        {label}
      </label>

      <div className={`${Style.block} ${blockClass}`}>
        <input
          id={id}
          name={name}
          type={type}
          className={`${Style.input} ${inputClass}`}
          placeholder={placeholder}
          autoComplete="off"
        />

        <Button button className={buttonClassName} value={buttonText} />
      </div>
    </form>
  );
};

export default ActionInput;
