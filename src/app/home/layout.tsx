import { Navbar } from "@/components/layout/navbar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative flex min-h-screen flex-1 flex-col px=-6 pb-6 pt-10 max-md:pb-14 sm:px-14">
      <Navbar />
      <div className="flex ">
        <section className="flex min-h-screen flex-1 flex-col pb-6 pt-10 max-md:pb-14 ">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};
export default HomeLayout;
