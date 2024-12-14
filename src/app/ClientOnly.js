// ClientOnly.js
"use client";

import React, { useState, useEffect } from "react";

const ClientOnly = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Ne rien afficher pendant le rendu côté serveur
  }

  return <>{children}</>; // Affiche l'enfant une fois le client monté
};

export default ClientOnly;
