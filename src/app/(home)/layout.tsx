import React from "react";
import { Navbar } from "./navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="felx flex-col min-h-screen">
    <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;