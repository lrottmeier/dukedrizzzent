"use client";

import MainPage from "@/components/pages/main-page";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Mj from "../../assets/images/mj.jpg";
import Yero from "../../assets/images/yero.jpg";
import TeamNavigation from "@/components/navigation/team-navigation";

const PartnersPage: FC = ({}) => {
  return (
    <MainPage>
      <TeamNavigation />
      <div className=" flex flex-col justify-center py-16 ">
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 w-80 gap-40">
            <li>
              <Link href="">
                <Image
                  className="rounded-md grayscale hover:grayscale-0"
                  src={Mj}
                  alt="Money"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  className="rounded-md grayscale hover:grayscale-0"
                  src={Yero}
                  alt="Money"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </MainPage>
  );
};

export default PartnersPage;
