import Style from "./single-item.module.scss";

interface Props {
  extendedDescription: string;
}

const ExtendedDescription: React.FC<Props> = ({ extendedDescription }) => {
  return <p className={Style.text}>{extendedDescription}</p>;
};

export default ExtendedDescription;
