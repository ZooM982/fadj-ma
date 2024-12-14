"use client";

import Image from "next/image";
import pic from "../../../profil.webp";
import React, { useEffect, useState } from "react";
import { useUser } from "../../userContexte";  

const Profil = () => {
  const { user, isLoading } = useUser(); 
  const [clientLoaded, setClientLoaded] = useState(false);

  useEffect(() => {
    setClientLoaded(true);  // S'assure que le rendu a lieu côté client uniquement
  }, []);

  if (!clientLoaded || isLoading) {
    return <div>Chargement...</div>;  
  }

  if (!user) {
    return <div>Erreur: impossible de récupérer les informations du user.</div>;  
  }

  return (
    <div className="corp-profil flex mb-3 p-3 text-[14px]">
      <div className="img-profil rounded-full">
        <Image className="rounded-full w-16" src={pic} alt="pic" />
      </div>
      <div className="user-name ml-2 w-full">
        <h3>{user.firstname && user.lastname ? `${user.firstname} ${user.lastname}` : "Nom utilisateur"}</h3>
        <span className="text-muted">{user.email || "email@example.com"}</span>
        <p className="post text-sm">{user.role || "Administrateur"}</p>
      </div>
    </div>
  );
};

export default Profil;
