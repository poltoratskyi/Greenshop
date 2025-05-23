import Style from "./blog.module.scss";
import Card from "./card";
import { title, descr, blogData } from "./static-data";

const Blog: React.FC = () => {
  return (
    <section className={Style.blog}>
      <div className="container">
        <h2 className={Style.title}>{title}</h2>
        <p className={Style.descr}>{descr}</p>

        <div className={Style.content}>
          {blogData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
