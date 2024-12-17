import Style from "./backspace.module.scss";

import Button from "./button";

interface Props {
  text?: string;
}

const Backspace: React.FC<Props> = ({ text }) => {
  return (
    <nav className={Style.backspace}>
      <Button />

      {text && <h2>{text}</h2>}
    </nav>
  );
};

export default Backspace;
