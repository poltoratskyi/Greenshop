import Image from "next/image";

import Link from "next/link";

import Style from "./blog.module.scss";

import { blogData, svgRight } from "./static-data";

interface Item {
  id: number;
  imgUrl: string;
  date: string;
  heading: string;
  title: string;
  descr: string;
  link: string;
}
[];

const Blog: React.FC = () => {
  return (
    <section className={Style.blog}>
      <div className="container">
        <h2 className={Style.title}>Our Blog Posts</h2>
        <p className={Style.descr}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>

        <div className={Style.content}>
          {blogData.map((item: Item) => (
            <div className={Style.wrapper} key={item.id}>
              <Image
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={item.imgUrl}
                alt={item.title}
              />

              <div className={Style.info}>
                <div className={Style.date}>
                  <span>{item.date}</span>
                  <span className={Style.element}>|</span>
                  <span>{item.heading}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.descr}</p>
                <Link href={item.link}>
                  Read More
                  {svgRight}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
