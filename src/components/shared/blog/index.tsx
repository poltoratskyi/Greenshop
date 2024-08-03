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

export const Blog = () => {
  return (
    <div className={Style.blog}>
      <div className="container">
        <h2 className={Style.title}>Our Blog Posts</h2>
        <p className={Style.descr}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>

        <div className={Style.content}>
          {blogData.map((item) => (
            <div style={{ textAlign: "center" }} key={item.id}>
              <img src={item.imgUrl} alt={item.title} />
              <div className={Style.info}>
                <span>{item.heading}</span>
                <h3>{item.title}</h3>
                <p>{item.descr}</p>
                <a href={item.link}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
