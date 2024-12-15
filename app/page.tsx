"use client";
import React, { useEffect } from "react";
import Image from "next/image";
export default function Home() {
  const [quote, setQuote] = React.useState<any[]>([]);

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

        <div className="m-16 h-56 w-3/12 rounded-3xl border-2 border-[#424D3C]">
          <div className="flex justify-around">
            <Image src={"/noteIcon.svg"} alt="logo" width={35} height={35} />
            <p className="text-2xl text-[#424D3C] ">Quote of the day</p>
            <p>{quote.q}</p>
          </div>
        </div>

        <div className="m-16 h-56 w-3/12 rounded-3xl border-2 border-[#424D3C]"></div>
      </div>
    </>
  );
}
