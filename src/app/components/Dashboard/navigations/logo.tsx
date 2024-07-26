import Image from "next/image";
import logo from "../../../car.png";

const Logo = () => {
  return (
    <section className="flex justify-between bg-[#1d242e]">
      <div className="logo w-1/3 h-16 flex p-2 ">
        <Image className="w-14" src={logo} alt="logo" />
        <h1 className="title-site my-auto text-[24px] font-semibold">Fadj-Ma</h1>
      </div>
    </section>
  );
};

export default Logo;
