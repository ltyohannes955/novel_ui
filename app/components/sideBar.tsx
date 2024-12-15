"use client";
import React from "react";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import { GoHome, GoHeart } from "react-icons/go";
import { MdOutlineBook, MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
export default function SideBar() {
  return (
    <>
      <div className="w-20 bg-[#424D3C] h-screen flex flex-col items-center sticky">
        <div className="m-5">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
        </div>
        <div className="flex flex-col h-full items-center justify-between">
          <div className="m-5">
            <Link href={"/"}>
              <GoHome
                data-tooltip-id="tooltip"
                data-tooltip-content="Home"
                className="text-white text-3xl hover:cursor-pointer mb-5"
              />
            </Link>
            <Link href={"/posts"}>
              <GoHeart
                data-tooltip-id="tooltip"
                data-tooltip-content="My Posts"
                className="text-white text-3xl hover:cursor-pointer mb-5 "
              />
            </Link>
            <Link href={"/books"}>
              <MdOutlineBook
                data-tooltip-id="tooltip"
                data-tooltip-content="My Books"
                className="text-white text-3xl hover:cursor-pointer "
              />
            </Link>
          </div>

          <div className="w-full flex flex-col items-center">
            <hr
              className="mb-5 w-1/2"
              style={{ borderTop: "3px solid white" }}
            ></hr>
            <Link href={"/profile"}>
              <IoSettingsOutline
                data-tooltip-id="tooltip"
                data-tooltip-content="settings"
                className="text-white text-3xl hover:cursor-pointer mb-5 "
              />
            </Link>
            <Link href={""}>
              <MdOutlineLogout
                data-tooltip-id="tooltip"
                data-tooltip-content="Logout"
                className="text-white text-3xl hover:cursor-pointer mb-10 "
              />
            </Link>
            <Tooltip
              id="tooltip"
              place="left"
              style={{ backgroundColor: "white", color: "#424D3C" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
