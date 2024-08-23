import Image from "next/image";
import Link from "next/link";

import Style from "./blog.module.scss";

const blogData = [
  {
    id: 1,
    imgUrl: "blog/blog_1-min.png",
    heading: "September 12 I Read in 6 minutes",
    title: "Cactus & Succulent Care Tips",
    descr: "Cacti are succulents are easy care plants for any home or patio.",
    link: "#",
  },
  {
    id: 2,
    imgUrl: "blog/blog_2-min.png",
    heading: "September 13 I Read in 2 minutes",
    title: "Top 10 Succulents for Your Home",
    descr: "Best in hanging baskets. Prefers medium to high light.",
    link: "#",
  },
  {
    id: 3,
    imgUrl: "blog/blog_3-min.png",
    heading: "September 15 I Read in 3 minutes",
    title: "Cacti & Succulent Care Tips",
    descr: "Cacti and succulents thrive in containers and because most are..",
    link: "#",
  },
  {
    id: 4,
    imgUrl: "blog/blog_4-min.png",
    heading: "September 15 I Read in 2 minutes",
    title: "Best Houseplants Room by Room",
    descr: "The benefits of houseplants are endless. In addition to..",
    link: "#",
  },
];

export const Blog: React.FC = () => {
  return (
    <section className={Style.blog}>
      <div className="container">
        <h2 className={Style.title}>Our Blog Posts</h2>
        <p className={Style.descr}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>

        <div className={Style.content}>
          {blogData.map((item) => (
            <div style={{ textAlign: "center" }} key={item.id}>
              <Image src={item.imgUrl} alt={item.title} />
              <div className={Style.info}>
                <span>{item.heading}</span>
                <h3>{item.title}</h3>
                <p>{item.descr}</p>
                <Link href={item.link}>
                  Read More
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path
                      d="m15.1956 17.7007c.387.394 1.0202.3997 1.4142.0127l5.0909-5c.1915-.188.2993-.4451.2993-.7134s-.1078-.5254-.2993-.7134l-5.0909-5.00005c-.394-.38699-1.0272-.38129-1.4142.01274-.3869.39403-.3812 1.02717.0128 1.41416l3.3463 3.28655h-15.5547c-.55228 0-1 .4477-1 1s.44772 1 1 1h15.5547l-3.3463 3.2866c-.394.3869-.3997 1.0201-.0128 1.4141z"
                      fill="#46a358"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
