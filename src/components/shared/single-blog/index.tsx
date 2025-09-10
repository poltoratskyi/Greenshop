"use client";

import { useBlogStore } from "@/store";
import { useEffect } from "react";
import Image from "next/image";
import Pathname from "@/components/ui/pathname";
import Loader from "@/components/ui/loader";

interface Props {
  id: number;
}

const SingleBlog: React.FC<Props> = ({ id }) => {
  const singleBlog = useBlogStore((state) => state.singleBlog);
  const singleIsLoading = useBlogStore((state) => state.singleIsLoading);
  const loadSingleBlog = useBlogStore((state) => state.loadSingleBlog);

  useEffect(() => {
    loadSingleBlog(id);
  }, [id]);

  if (singleIsLoading) {
    return (
      <>
        <Pathname />

        <>
          <Loader item />;
        </>
      </>
    );
  }

  return (
    <>
      {singleBlog.map((blog) => (
        <div key={blog.id}>
          <Pathname
            second="Blog"
            secondLink="/blog"
            thirdPath
            name={blog.title}
          />

          <section className="m-[50px_0_100px] max-xs:m-[25px_0_50px]">
            <div className="container">
              <div className="relative flex items-center mb-[30px] max-xs:mb-[5px] max-xs:flex-col">
                <h1 className="font-[600] text-[26px] leading-[40px] text-[#3d3d3d]  text-center max-xs:text-[16px] w-full max-xs:leading-[24px]">
                  {blog.title}
                </h1>

                <div className="absolute right-0 max-xs:relative">
                  <span className="font-[400] text-[14px] leading-[24px] text-[#46a358] mr-[5px]">
                    {blog.date}
                  </span>

                  <span className="font-[400] text-[14px] leading-[24px] text-[#46a358]">
                    {blog.year}
                  </span>

                  <span className="font-[400] text-[14px] leading-[24px] text-[#3d3d3d] py-0 px-[10px]">
                    |
                  </span>

                  <span className="font-[400] text-[14px] leading-[24px] text-[#46a358]">
                    {blog.heading}
                  </span>
                </div>
              </div>

              <div className="w-[600px] max-xs:w-[100%] m-[0_auto] block">
                <Image
                  width={600}
                  height={600}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={blog.imgUrl}
                  alt={blog.title}
                  priority={id === 1}
                />

                <h2 className="font-[500] text-[20px] leading-[24px] text-[#3d3d3d] text-center m-[20px_0_10px] max-xs:[5px] max-xs:text-[16px]">
                  {blog.subtitle}
                </h2>

                <p className="font-[400] text-[14px] leading-[24px] text-[#727272] text-center">
                  {blog.descr}
                </p>
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default SingleBlog;
