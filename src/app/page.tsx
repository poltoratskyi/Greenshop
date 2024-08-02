import { Blog } from "../components/shared/blog";
import { Adv } from "../components/shared/adv";
import { Banner } from "../components/shared/banner";

export default function Home() {
  return (
    <>
      <Banner />
      <Adv />
      <Blog />
    </>
  );
}
