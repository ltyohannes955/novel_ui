import React from "react";
import Image from "next/image";
export default function Hero() {
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

        <div className="m-16 h-56 w-3/12 rounded-3xl border-2 border-[#424D3C] flex flex-col justify-around items-center">
          <div className="w-full flex justify-around">
            <Image src={"/noteIcon.svg"} alt="logo" width={35} height={35} />
            <p className="text-2xl text-[#424D3C] ">Quote of the day</p>
          </div>
          <p className="p-5 text-[#88593B]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            et rerum omnis, quidem laborum nulla iure quia, facilis vitae id
            recusandae laboriosam distinctio officiis earum sequi placeat beatae
            aperiam voluptatum.
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            et rerum omnis, quidem laborum nulla iure quia, facilis vitae id
            recusandae laboriosam distinctio officiis earum sequi placeat beatae
            aperiam voluptatum.
          </p>
        </div>
      </div>
    </>
  );
}
