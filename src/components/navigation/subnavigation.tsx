"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  SiApplemusic,
  SiInstagram,
  SiSpotify,
  SiTiktok,
  SiYoutubetv,
} from "react-icons/si";

const Subnavigation: FC = () => {
  const router = useRouter();

  return (
    <nav className="hidden lg:flex justify-around text-3xl align-center">
      <ul className="flex text-center flex-col gap-3 ">
        <li>
          <Link href="https://www.instagram.com/dukedrizzzentertainment/">
            <SiInstagram />
          </Link>
        </li>
        <li>
          <Link href="https://open.spotify.com/artist/2YG389zdUKa5bTguffqoFe">
            <SiSpotify />
          </Link>
        </li>
        <li>
          <Link href="https://music.apple.com/eg/artist/yungdrizzz/1560875574">
            <SiApplemusic />
          </Link>
        </li>
        <li>
          <SiTiktok />
        </li>
        <li>
          <SiYoutubetv />
        </li>
      </ul>
    </nav>
  );
};

export default Subnavigation;
