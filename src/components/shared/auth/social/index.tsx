"use client";

import { signIn } from "next-auth/react";
import Style from "./social.module.scss";
import Button from "../../../ui/button";
import { svgFacebook, svgGithub, svgGoogle } from "./static-data";
import { useState } from "react";

interface Props {
  location: string;
  google: string;
  facebook: string;
  github: string;
}

const Social: React.FC<Props> = ({ location, google, facebook, github }) => {
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [isLoadingFacebook, setIsLoadingFacebook] = useState(false);
  const [isLoadingGithub, setIsLoadingGithub] = useState(false);

  return (
    <>
      <div className={Style.social}>
        <span className={Style.line}></span>
        <p className={Style.location}>{location}</p>
        <span className={Style.line}></span>
      </div>

      <Button
        onClick={() => {
          setIsLoadingGoogle(true);
          signIn("google", {
            callbackUrl: "/",
            redirect: true,
          }).finally(() => setIsLoadingGoogle(false));
        }}
        isLoading={isLoadingGoogle}
        svgLeft={svgGoogle}
        type="button"
        className="google"
        value={google}
      />

      <Button
        onClick={() => {
          setIsLoadingFacebook(true);
          signIn("facebook", {
            callbackUrl: "/",
            redirect: true,
          }).finally(() => setIsLoadingFacebook(false));
        }}
        isLoading={isLoadingFacebook}
        svgLeft={svgFacebook}
        type="button"
        className="facebook"
        value={facebook}
      />

      <Button
        onClick={() => {
          setIsLoadingGithub(true);
          signIn("github", {
            callbackUrl: "/",
            redirect: true,
          }).finally(() => setIsLoadingGithub(false));
        }}
        isLoading={isLoadingGithub}
        svgLeft={svgGithub}
        type="button"
        className="github"
        value={github}
      />
    </>
  );
};

export default Social;
