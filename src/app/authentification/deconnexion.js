"use client";

import { SlLogout } from "react-icons/sl";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://fadj-ma-server2.onrender.com/api/users/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        localStorage.removeItem("token");

        toast.success("Déconnexion réussie !");

        router.push("/authentification/connection");
      } else {
        throw new Error("Erreur lors de la déconnexion");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la déconnexion");
    }
  };

  return (
    <div className="h-[48px] me-3 md:me-0 flex items-center bg-inheritp-3 text-sm font-medium hover:bg-[#009099] bg-[#009099]-ative focus:bg-[#009099] hover:text-[#fff] md:flex-none">
      <span className="md:ml-5 text-[24px]">
        <SlLogout />
      </span>
      <button
        className="ml-3 text-[14px] h-full hidden md:block"
        onClick={handleLogout}
      >
        Déconnexion
      </button>
    </div>
  );
};

export default Logout;
