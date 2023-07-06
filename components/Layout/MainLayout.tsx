import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
