"use client";

import { FC } from "react";
import Navigation from "../navigation/navigation";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="mb-12 mt-18 md:mt-60 mx-12 text-1xl">
      <div className="flex flex-row justify-around gap-10 md:gap-0 items-center text-center ">
        <Link href="../" className=" text-[#DE9046]">
          DUKEDRIZZENT©2023
        </Link>
        <div className="">
          <ul className="flex text-xs flex-col lg:flex-row gap-3  ">
            <li>
              <Link href="">PRIVACY POLICY</Link>
            </li>
            <p className="hidden lg:flex">|</p>
            <li>
              <Link href="">TERMS OF USE</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
