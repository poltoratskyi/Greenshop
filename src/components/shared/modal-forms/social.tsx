import Style from "./modal-forms.module.scss";
import Button from "../../ui/button";
import { svgFacebook, svgGithub, svgGoogle } from "./static-data";

interface Props {
  location: string;
  google: string;
  facebook: string;
  github: string;
}

const Social: React.FC<Props> = ({ location, google, facebook, github }) => {
  return (
    <>
      <div className={Style.extra}>
        <span className={Style.line}></span>
        <p>{location}</p>
        <span className={Style.line}></span>
      </div>

      <Button svgLeft={svgGoogle} button className="google" value={google} />

      <Button
        svgLeft={svgFacebook}
        button
        className="facebook"
        value={facebook}
      />

      <Button svgLeft={svgGithub} button className="github" value={github} />
    </>
  );
};

export default Social;
