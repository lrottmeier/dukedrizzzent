"use client";

import MainPage from "@/components/pages/main-page";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Duke from "../../assets/images/duke.jpg";
import Gbunny from "../../assets/images/gbunny.jpg";
import Jesse from "../../assets/images/jesse.jpg";
import TeamNavigation from "@/components/navigation/team-navigation";

const ProducersPage: FC = ({}) => {
  return (
    <MainPage>
      <TeamNavigation />
      <div className=" flex flex-col justify-center py-16 ">
        <div className="flex justify-around">
          {/* <p className="flex w-1/2 text-1xl text-center py-20">
            Our diverse roster of artists represents a wide range of musical
            styles and genres. From emerging newcomers to established giants, at
            Dukedrizz ent., you'll find talented artists from around the world.
            Our artists are visionaries who breathe life into music and tell
            stories that touch, inspire, and move.
          </p> */}
        </div>
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 w-80 gap-40">
            <li>
              <Link href="">
                <Image
                  className="rounded-md grayscale hover:grayscale-0"
                  src={Duke}
                  alt="Money"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  className="rounded-md grayscale hover:grayscale-0"
                  src={Gbunny}
                  alt="Money"
                />
              </Link>
            </li>
            <li>
              <Link href="">
                <Image
                  className="rounded-md grayscale hover:grayscale-0"
                  src={Jesse}
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

export default ProducersPage;
