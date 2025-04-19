import Style from "./checkbox.module.scss";

interface Props {
  name: string;
  quantityItems: number;
  isDisabled: boolean;
  inputId: string;
  checked: boolean;

  onToggle: () => void;
}

const Checkbox: React.FC<Props> = ({
  name,
  quantityItems,
  isDisabled,
  inputId,
  checked,

  onToggle,
}) => {
  return (
    <>
      <div className={Style.checkbox}>
        <input
          className={Style.input}
          id={inputId}
          type="checkbox"
          checked={checked}
          disabled={isDisabled}
          onChange={() => {
            if (!isDisabled) onToggle();
          }}
        ></input>

        <label className={Style.label} htmlFor={inputId}>
          <span className={Style.check}></span>
          <span className={Style.text}>{name}</span>
        </label>
      </div>

      <span>{quantityItems}</span>
    </>
  );
};

export default Checkbox;
