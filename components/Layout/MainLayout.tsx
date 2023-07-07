import { FC, PropsWithChildren } from "react";
import { Footer, Navbar } from "../ui";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
