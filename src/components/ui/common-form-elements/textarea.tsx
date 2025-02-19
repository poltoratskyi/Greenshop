import Style from "./common-form-elements.module.scss";

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
}

const Textarea: React.FC<Props> = ({
  id,
  label,
  name,
  placeholder,
  ...props
}) => {
  return (
    <div className={Style.block}>
      <label className={Style.label} htmlFor="message">
        {label}
      </label>
      <textarea
        className={Style.textarea}
        name="message"
        id={id}
        cols={30}
        rows={5}
        placeholder={placeholder}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
