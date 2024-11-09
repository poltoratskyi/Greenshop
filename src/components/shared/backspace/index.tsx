"use client";

import { useRouter } from "next/navigation";

import Style from "./backspace.module.scss";

import { svgBackspace } from "./static-data";

interface Props {
  text?: string;
}

const Backspace: React.FC<Props> = ({ text }) => {
  const router = useRouter();

  return (
    <nav className={Style.backspace}>
      <button onClick={() => router.back()}>{svgBackspace}</button>

      {text && <h2>{text}</h2>}
    </nav>
  );
};

export default Backspace;
