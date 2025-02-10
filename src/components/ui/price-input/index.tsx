import Style from "./price-input.module.scss";

interface Props {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  autoComplete?: string;
  type?: string;
  min: number;
  max: number;
  value: string;
  showDollar?: boolean;

  handlePriceInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PriceRange: React.FC<Props> = ({
  id,
  label,
  name,
  placeholder,
  autoComplete = "off",
  type = "number",
  min,
  max,
  value,
  showDollar = false,

  handlePriceInputChange,
}) => {
  return (
    <div className={Style.column}>
      <div className={Style.content}>
        <label className={Style.label} htmlFor={id}>
          {label}
        </label>

        <input
          className={Style.input}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          min={min}
          max={max}
          onChange={(e) => handlePriceInputChange(e)}
        />
      </div>

      {showDollar && <span className={Style.currency}>$</span>}
    </div>
  );
};

export default PriceRange;
