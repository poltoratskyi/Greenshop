import Style from "./common-form-elements.module.scss";

interface Props {
  id: string;
  name: string;
  placeholder: string;
}

const Textarea: React.FC<Props> = ({ id, name, placeholder, ...props }) => {
  return (
    <textarea
      className={Style.textarea}
      name="message"
      id={id}
      cols={30}
      rows={5}
      placeholder={placeholder}
      {...props}
    ></textarea>
  );
};

export default Textarea;
