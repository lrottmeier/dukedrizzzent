"use client";

import MainPage from "@/components/pages/main-page";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Drizzz from "../../assets/images/drizzz.jpg";
import TeamNavigation from "@/components/navigation/team-navigation";

const ArtistsPage: FC = ({}) => {
  return (
    <MainPage>
      <TeamNavigation />
      <div className="flex justify-around">
        <ul className="grid grid-cols-1">
          <li>
            <Link href="drizzz">
              <Image
                className="rounded-md relative w-80 mt-16 mb-44 grayscale hover:grayscale-0"
                src={Drizzz}
                alt="Money"
              />
            </Link>
          </li>
        </ul>
      </div>
    </MainPage>
  );
};

export default ArtistsPage;
