"use client";
import Logo from "../navigations/logo";
import TopnavLeft from "./topnav/topnavLeft";

const Topnav = () => {
  return (
    <section className="flex">
      <div className="logo w-1/3 h-full flex">
        <Logo />
      </div>
      <div className="w-full h-16">
        <TopnavLeft />
      </div>
    </section>
  );
};

export default Topnav;
