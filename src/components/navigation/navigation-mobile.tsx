"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { TiThMenu } from "react-icons/ti";

const NavigationMobile: FC = () => {
  const router = useRouter();

  return (
    <nav className="flex lg:hidden  justify-between text-3xl align-center">
      <ul className="">
        <li className="bg-red-500">
          <TiThMenu />
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMobile;
