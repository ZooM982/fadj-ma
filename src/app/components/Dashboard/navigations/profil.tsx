"use client";

import Image from "next/image";
import pic from "../../../profil.webp"

const Profil = () => {
  

  return (
    <div className="corp-profil flex mb-3 p-3 text-[14px]">
      <div className="img-profil rounded-full">
        <Image className="rounded-full w-16" src={pic} alt="pic" />
      </div>
      <div className="user-name ml-2 w-full">
        <h3>Révhieno Roll Haurly</h3>
        <span className="post text-sm ">Administrateur</span>
      </div>
    </div>
  );
};

export default Profil;
