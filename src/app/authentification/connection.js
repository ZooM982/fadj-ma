"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const Connection = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true); // Déclenche la soumission

    toast.loading("Connexion en cours...");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        formData
      );

      if (response.status === 200) {
        toast.dismiss();
        toast.success("Connexion réussie ! 🎉");

        // Sauvegarder le token dans localStorage
        localStorage.setItem('token', response.data.token);

        setTimeout(() => {
          router.push("/Admin/dashboard/");
        }, 3000); 
      } else {
        throw new Error("Identifiants invalides");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Échec de la connexion. Vérifiez vos informations.");
      setError("Identifiants invalides ou problème serveur.");
      console.error("Erreur:", error);
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <section>
      <div className="mx-auto">
        <form
          action=""
          className="md:w-[532px] mx-auto mb-5"
          onSubmit={handleSubmit}
        >
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="grid">
            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              className="border h-[46px] rounded-md my-2 px-3 text-black-400 outline-[#a7dbf5]"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              className="border h-[46px] rounded-md my-2 px-3 text-black-400 outline-[#a7dbf5]"
              name="password"
              placeholder="Mot de passe"
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-5 text-right">
            <button type="button">Mot de passe oublié</button>
          </div>
          <div className="h-[46px] text-center rounded-md border border-gray-300 bg-[#a7dbf5] mx-auto py-1">
            <button 
              type="submit" 
              className="my-1"
              disabled={isSubmitting} // Désactive le bouton pendant la soumission
            >
              {isSubmitting ? "Connexion..." : "Se connecter"} {/* Affiche un texte différent pendant la soumission */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Connection;
