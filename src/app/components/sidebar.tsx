import Profil from "./Dashboard/navigations/profil"
import NavLinks from "./navlink";
import Logout from "../authentification/deconnexion"

const Sidebar = () => {
  return (
    <div className="sidebar w-full h-full md:w-72">
      <div className="">
        <Profil />
      </div>
      <div className="focus:bg-[red] ">
        <NavLinks />
      </div>
      <div className="mt-[300px]">
        <Logout />
      </div>
    </div>
  );
};

export default Sidebar;
