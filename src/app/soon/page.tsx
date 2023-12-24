"use client";

import MainPage from "@/components/pages/main-page";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Duke from "../../assets/images/duke.jpg";
import Gbunny from "../../assets/images/gbunny.jpg";
import Jesse from "../../assets/images/jesse.jpg";
import TeamNavigation from "@/components/navigation/team-navigation";

const SoonPage: FC = ({}) => {
  return (
    <MainPage>
      <h1 className="flex justify-center mt-72 mb-48 text-3xl">
        This Page is in Progress, stay tuned.
      </h1>
    </MainPage>
  );
};

export default SoonPage;
