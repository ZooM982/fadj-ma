"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token manquant");
        return;
      }

      try {
        const response = await fetch(
          "https://fadj-ma-server2.onrender.com/api/users/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Envoie le token dans les headers
            },
          }
        );

        if (!response.ok) {
          throw new Error("Utilisateur non authentifié");
        }

        const data = await response.json();
        setUser(data); // Sauvegarde les informations utilisateur dans le state
      } catch (error) {
        console.error(
          "Erreur de récupération des informations utilisateur:",
          error
        );
      } finally {
        setIsLoading(false); // Indiquer la fin du chargement
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
