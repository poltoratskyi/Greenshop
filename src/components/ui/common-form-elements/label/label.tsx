import Style from "./label.module.scss";

interface Props {
  label: string;
  name: string;
  mark?: string;
  feedback?: boolean;
}

const Label: React.FC<Props> = ({ label, name, mark, feedback }) => {
  return (
    <label
      className={`${Style.label} ${feedback && Style.feedback}`}
      htmlFor={name}
    >
      {label}
      {name !== mark && <span> *</span>}
    </label>
  );
};

export default Label;
