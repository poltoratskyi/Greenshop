"use client";

import { useBlogStore } from "@/store";
import { useEffect } from "react";
import Card from "./cart";
import { usePathname } from "next/navigation";

const Blog: React.FC = () => {
  const blog = useBlogStore((state) => state.blog);
  const loadBlog = useBlogStore((state) => state.loadBlog);
  const isLoading = useBlogStore((state) => state.isLoading);

  const pathname = usePathname();
  const isBlogPage = pathname === "/blog";

  useEffect(() => {
    loadBlog();
  }, []);

  if (isBlogPage && isLoading) {
    return (
      <section
        className={
          isBlogPage
            ? "m-[50px_0_100px] max-xs:m-[25px_0_50px]"
            : "mb-[100px] max-xs:m-[25px_0_50px]"
        }
      >
        <div className="container">
          <h2
            className={
              isBlogPage
                ? "font-[600] text-[26px] leading-[40px] text-[#3d3d3d] text-center mb-[35px] max-xs:text-[18px] max-xs:mb-[5px] max-xs:leading-[24px]"
                : "font-[600] text-[26px] leading-[40px] text-[#3d3d3d] text-center mb-[15px] max-xs:text-[18px] max-xs:mb-[5px] max-xs:leading-[24px]"
            }
          >
            {isBlogPage ? "Blogs" : "Our Blog Posts"}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      className={
        isBlogPage
          ? "m-[50px_0_100px] max-xs:m-[25px_0_50px]"
          : "mb-[100px] max-xs:m-[25px_0_50px]"
      }
    >
      <div className="container">
        <h2
          className={
            isBlogPage
              ? "font-[600] text-[26px] leading-[40px] text-[#3d3d3d] text-center mb-[35px] max-xs:text-[18px] max-xs:mb-[5px] max-xs:leading-[24px]"
              : "font-[600] text-[26px] leading-[40px] text-[#3d3d3d] text-center mb-[15px] max-xs:text-[18px] max-xs:mb-[5px] max-xs:leading-[24px]"
          }
        >
          {isBlogPage ? "Blogs" : "Our Blog Posts"}
        </h2>

        {!isBlogPage && (
          <p className="font-[400] text-[14px] leading-[24px] text-[#727272] text-center mb-[35px] max-xs:mb-[25px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
        )}

        <div
          className={`grid ${isBlogPage ? "grid-cols-3" : "grid-cols-4"} gap-[45px] max-xs:grid-cols-2 max-xs:gap-[20px] max--xs:grid-cols-1`}
        >
          {(isBlogPage ? blog : blog.slice(0, 4)).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
