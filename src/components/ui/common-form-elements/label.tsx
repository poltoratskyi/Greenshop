import Style from "./common-form-elements.module.scss";

interface Props {
  label: string;
  name: string;
}

const Label: React.FC<Props> = ({ label, name }) => {
  return (
    <label className={Style.label} htmlFor={name}>
      {label} {name !== "zip" && name !== "apartment" && <span>*</span>}
    </label>
  );
};

export default Label;
