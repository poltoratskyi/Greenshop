import Style from "./checkbox.module.scss";

interface Props {
  name: string;
  quantityItems: number;
  isDisabled: boolean;
  inputId: string;

  onSelectedName: () => void;
  onUnselectedName: () => void;
}

const Checkbox: React.FC<Props> = ({
  name,
  quantityItems,
  isDisabled,
  inputId,

  onSelectedName,
  onUnselectedName,
}) => {
  return (
    <>
      <div className={Style.checkbox}>
        <input
          className={Style.input}
          id={inputId}
          type="checkbox"
          disabled={isDisabled}
          onChange={(e) => {
            !isDisabled && e.target.checked
              ? onSelectedName()
              : onUnselectedName();
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
