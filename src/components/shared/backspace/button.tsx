"use client";

import { useRouter } from "next/navigation";

import { svgBackspace } from "./static-data";

const Button: React.FC = () => {
  const router = useRouter();

  return <button onClick={() => router.back()}>{svgBackspace}</button>;
};

export default Button;
