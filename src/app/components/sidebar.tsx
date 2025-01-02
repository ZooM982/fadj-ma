import Profil from "./Dashboard/navigations/profil";
import NavLinks from "./navlink";
import Logout from "../authentification/deconnexion";

const Sidebar = () => {
  return (
    <div className="w-full h-full md:w-[299px] bg-[#283342] text-white ">
      <div className="">
        <Profil />
      </div>
      <div className="flex w-full justify-between md:justify-stretch  md:grid">
      <div className="w-[70%] md:w-[100%] ">
        <NavLinks />
      </div>
      <div className="md:mt-[430px]">
        <Logout />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
