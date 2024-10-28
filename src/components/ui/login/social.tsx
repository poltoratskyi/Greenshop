import Style from "./login.module.scss";

import Button from "../../shared/button";

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

      <Button
        svgLeft={svgGoogle}
        button={true}
        className="google"
        value={google}
      />

      <Button
        svgLeft={svgFacebook}
        button={true}
        className="facebook"
        value={facebook}
      />

      <Button
        svgLeft={svgGithub}
        button={true}
        className="github"
        value={github}
      />
    </>
  );
};

export default Social;
