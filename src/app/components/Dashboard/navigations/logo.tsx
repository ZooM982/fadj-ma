import Image from "next/image";
import logo from "../../../car.png";

const Logo = () => {
  return (
    <section className="w-full flex justify-between bg-[#1d242e]">
      <div className="text-white mx-auto h-16 flex p-2 ">
        <Image className="w-14" src={logo} alt="logo" />
        <h1 className="title-site my-auto text-[24px] font-semibold">Fadj-Ma</h1>
      </div>
    </section>
  );
};

export default Logo;
