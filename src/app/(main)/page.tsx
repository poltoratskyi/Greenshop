import Blog from "../../components/shared/blog";
import Adv from "../../components/shared/adv";
import Banner from "../../components/shared/banner";
import Catalog from "../../components/shared/catalog";

const Home: React.FC = () => {
  return (
    <>
      <Banner />

      <Catalog />

      <Adv />

      <Blog />
    </>
  );
};

export default Home;
