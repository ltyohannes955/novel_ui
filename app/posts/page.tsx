import React from "react";
import Hero from "../components/hero";
import Link from "next/link";
import { GoHeart } from "react-icons/go";
export default function Posts() {
  const posts = [
    {
      id: 6,
      title: "First Post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eius suscipit maiores ullam ducimus quidem alias veritatis possimus modi at sapiente, iusto ipsa corrupti nostrum unde veniam sequi. Sequi!",
      like_count: 1000,
      catagory: "catagory",
    },
    {
      id: 7,
      title: "First Post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eius suscipit maiores ullam ducimus quidem alias veritatis possimus modi at sapiente, iusto ipsa corrupti nostrum unde veniam sequi. Sequi!",
      like_count: 1000,
      catagory: "catagory",
    },
  ];
  return (
    <>
      <div>
        <Hero />
        <div className="w-full pl-20 pr-40 flex flex-col items-end">
          <p>My posts</p>
          <hr
            className="mb-5 w-full"
            style={{ borderTop: "1px solid #424D3C" }}
          ></hr>
        </div>
        <div className="flex flex-wrap justify-around">
          {posts.map((post) => (
            <>
              <div
                className="m-8 h-64 w-5/12 rounded-3xl border-2 border-[#424D3C] flex flex-col justify-around"
                key={post.id}
              >
                <Link href={`/posts/${post.id}`}>
                  <div>
                    <div className="flex justify-between p-4">
                      <p className="text-4xl text-[#424D3C]">{post.title}</p>
                      <div className="flex justify-center items-center gap-1">
                        <GoHeart className="text-[#88593B]" />
                        {post.like_count > 10000 && post.like_count < 99999 ? (
                          <p className="text-[#88593B]">
                            {post.like_count / 1000}k
                          </p>
                        ) : post.like_count > 99999 ? (
                          <p className="text-[#88593B]">
                            {post.like_count / 100000}M
                          </p>
                        ) : (
                          <p className="text-[#88593B]">{post.like_count}</p>
                        )}
                        <p className="text-[#88593B] ml-4">{post.catagory}</p>
                      </div>
                    </div>
                    <p className="p-5 text-[#88593B] text-xl ">
                      {post.content}
                    </p>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
