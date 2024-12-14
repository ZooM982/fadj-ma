import Profil from "./Dashboard/navigations/profil";
import NavLinks from "./navlink";
import Logout from "../authentification/deconnexion";

const Sidebar = () => {
  return (
    <div className="w-full h-full md:w-72 bg-[#283342] text-white ">
      <div className="">
        <Profil />
      </div>
      <div className="flex justify-between md:justify-stretch  md:grid">
      <div className="w-[70%] sm:w-[100%] ">
        <NavLinks />
      </div>
      <div className="md:mt-[300px]">
        <Logout />
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
