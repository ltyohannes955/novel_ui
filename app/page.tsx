"use client";
import React, { useEffect } from "react";
import Image from "next/image";
export default function Home() {
  const [quote, setQuote] = React.useState<any[]>([]);

  const posts = [
    {
      id: 1,
      title: "First Post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eius suscipit maiores ullam ducimus quidem alias veritatis possimus modi at sapiente, iusto ipsa corrupti nostrum unde veniam sequi. Sequi!",
      like_count: 1000,
    },
    {
      id: 2,
      title: "First Post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eius suscipit maiores ullam ducimus quidem alias veritatis possimus modi at sapiente, iusto ipsa corrupti nostrum unde veniam sequi. Sequi!",
      like_count: 1000,
    },
    {
      id: 3,
      title: "First Post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eius suscipit maiores ullam ducimus quidem alias veritatis possimus modi at sapiente, iusto ipsa corrupti nostrum unde veniam sequi. Sequi!",
      like_count: 1000,
    },
    {
      id: 4,
      title: "First Post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eius suscipit maiores ullam ducimus quidem alias veritatis possimus modi at sapiente, iusto ipsa corrupti nostrum unde veniam sequi. Sequi!",
      like_count: 1000,
    },
    {
      id: 5,
      title: "First Post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eius suscipit maiores ullam ducimus quidem alias veritatis possimus modi at sapiente, iusto ipsa corrupti nostrum unde veniam sequi. Sequi!",
      like_count: 1000,
    },
    {
      id: 6,
      title: "First Post",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt eius suscipit maiores ullam ducimus quidem alias veritatis possimus modi at sapiente, iusto ipsa corrupti nostrum unde veniam sequi. Sequi!",
      like_count: 1000,
    },
  ];

  const fetchQuote = async () => {
    try {
      const respons = await fetch("https://random-word-api.herokuapp.com/word");

      if (!respons.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await respons.json();
      setQuote(data[0]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <>
      <div>
        <div className="w-full flex">
          <div className="m-16  h-24 w-3/12 rounded-3xl border-2 border-[#424D3C] flex items-center justify-around">
            <Image
              className="-ml-10"
              src={"/newNovel.svg"}
              alt="logo"
              width={35}
              height={35}
            />
            <div>
              <p className="text-2xl text-[#424D3C] ">New Novel</p>
              <p className="text-sm text-[#88593B]">create and write</p>
            </div>
          </div>

          <div className="m-16 h-56 w-3/12 rounded-3xl border-2 border-[#424D3C] flex flex-col justify-around items-center">
            <div className="w-full flex justify-around">
              <Image src={"/noteIcon.svg"} alt="logo" width={35} height={35} />
              <p className="text-2xl text-[#424D3C] ">Quote of the day</p>
            </div>
            <p className="p-5 text-[#88593B]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus et rerum omnis, quidem laborum nulla iure quia, facilis
              vitae id recusandae laboriosam distinctio officiis earum sequi
              placeat beatae aperiam voluptatum.
            </p>
          </div>

          <div className="m-16 h-56 w-3/12 rounded-3xl border-2 border-[#424D3C] flex flex-col justify-around items-center">
            <div className="w-full flex justify-around">
              <Image src={"/noteIcon.svg"} alt="logo" width={35} height={35} />
              <div className="flex flex-col items-end">
                <p className="text-2xl text-[#424D3C] ">Word of the day</p>
                <p className="text-2xl text-[#424D3C] ">Lorem</p>
              </div>
            </div>
            <p className="p-5 text-[#88593B]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus et rerum omnis, quidem laborum nulla iure quia, facilis
              vitae id recusandae laboriosam distinctio officiis earum sequi
              placeat beatae aperiam voluptatum.
            </p>
          </div>
        </div>
        <div className="w-full pl-20 pr-40 flex flex-col items-end">
          <p>Recent posts</p>
          <hr
            className="mb-5 w-full"
            style={{ borderTop: "1px solid #424D3C" }}
          ></hr>
        </div>
        <div className="flex flex-wrap justify-around">
          {posts.map((post) => (
            <>
              <div
                className="m-8 h-64 w-4/12 rounded-3xl border-2 border-[#424D3C] flex flex-col justify-around"
                key={post.id}
              >
                <div className="flex justify-between p-4">
                  <p className="text-3xl text-[#424D3C]">{post.title}</p>
                  <p className="text-[#88593B]">{post.like_count}</p>
                </div>
                <p className="p-5 text-[#88593B] text-xl ">{post.content}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
