import Style from "./blog.module.scss";

import BlogCard from "./blog-cart";

import { blogData } from "./static-data";

let title = "Our Blog Posts";
let descr =
  "We are an online plant shop offering a wide range of cheap and trendy plants.";

const Blog: React.FC = () => {
  return (
    <section className={Style.blog}>
      <div className="container">
        <h2 className={Style.title}>{title}</h2>
        <p className={Style.descr}>{descr}</p>

        <div className={Style.content}>
          {blogData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
