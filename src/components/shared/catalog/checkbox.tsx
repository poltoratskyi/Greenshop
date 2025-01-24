import Style from "./catalog.module.scss";

interface Props {
  id: number;
  name: string;
  quantityItems: number;
  isDisabled: boolean;
  inputId: string;

  onSelectedName: (name: string) => void;
  onSelectedId: (id: number) => void;
}

const Checkbox: React.FC<Props> = ({
  id,
  name,
  quantityItems,
  isDisabled,
  inputId,

  onSelectedName,
  onSelectedId,
}) => {
  return (
    <>
      <div className={Style.checkbox}>
        <input
          className={Style.input}
          id={inputId}
          type="checkbox"
          disabled={isDisabled}
          onChange={() => {
            if (!isDisabled) {
              onSelectedName(name);
              onSelectedId(id);
            }
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
