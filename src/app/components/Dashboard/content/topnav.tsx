"use client";
import Logo from "../navigations/logo";
import TopnavLeft from "./topnav/topnavLeft";

const Topnav = () => {
  return (
    <section className="grid md:flex">
      <div className="w-full md:w-[372px] md:h-full">
        <Logo />
      </div>
      <div className="w-full h-16">
        <TopnavLeft />
      </div>
    </section>
  );
};

export default Topnav;
