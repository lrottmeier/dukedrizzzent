import { FC, ReactNode } from "react";

type MainPageProps = {
  children: ReactNode;
  additionalClasses?: string;
};

const MainPage: FC<MainPageProps> = ({ children }) => {
  // return <main className="w-full flex flex-col">{children}</main>;
  return <main className="w-full grid col-span-12">{children}</main>;
};

export default MainPage;
