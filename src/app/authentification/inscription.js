"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import toast from "react-hot-toast";

const Inscription = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "Male",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    toast.loading("Inscription en cours..."); 
    try {
      const response = await axios.post("http://localhost:8000/api/users/register", formData);

      if (response.status !== 201) {
        toast.dismiss()
        toast.error("Erreur lors de l'inscription")
        throw new Error("Erreur lors de l'inscription");
      } else {
        toast.dismiss()
        toast.success("Inscription réussie ! 🎉");
        setTimeout(() => {
          router.push("/authentification/connection"); 
        }, 3000);

      }

    } catch (error) {
      console.error("Erreur:", error);
      alert(`Erreur lors de l'inscription: ${error.message}`);
    }
  };

  return (
    <section>
      <div className="mx-auto">
        <form
          action=""
          className="md:w-[532px] mx-auto my-4 py-3"
          onSubmit={handleSubmit}
        >
          <label className="py-2 font-bold" htmlFor="">
            Vos coordonnées
          </label>
          <div className="flex justify-between md:w-1/3">
            <div className="grid md:flex">
              <label className="py-3 pr-3 font-bold" htmlFor="coordonnées">
                Homme
              </label>
              <input
                className="ml-1"
                type="radio"
                placeholder="homme"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
            </div>
            <div className="grid md:flex">
              <label className="py-3 px-3 font-bold" htmlFor="coordonnées">
                Femme
              </label>
              <input
                className="ml-1"
                type="radio"
                placeholder="femme"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid md:flex justify-between">
            <div className="grid py-2 w-full">
              <label className="py-2 font-bold" htmlFor="firstname">
                Prénom
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Prénom"
                onChange={handleChange}
                required
                className="h-[46px] outline-[#a7dbf5] px-4 border w-[256px]  rounded-md"
              />
            </div>
            <div className="grid py-2 w-full">
              <label className="py-2 font-bold" htmlFor="nom">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                name="lastname"
                placeholder="Nom"
                onChange={handleChange}
                required
                className="h-[46px] outline-[#a7dbf5] px-4 border w-[256px] ml-auto rounded-md"
              />
            </div>
          </div>
          <div className="grid py-2 w-full">
            <label>Date de naissance</label>
            <input
              type="date"
              name="birthday"
              onChange={handleChange}
              className="h-[46px] outline-[#a7dbf5] px-4 border  rounded-md"
            />
          </div>
          <div className="grid py-2 w-full">
            <label className="py-2 font-bold" htmlFor="email">
              E-mail
            </label>
            <input
              type="mail"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              id="email"
              className="h-[46px] outline-[#a7dbf5] px-4 border  rounded-md"
            />
          </div>
          <div className="grid py-2 w-full relative">
            <label className="py-2 font-bold" htmlFor="password">
              Mot de passe
            </label>
            
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mot de passe"
              onChange={handleChange}
              id="password"
              className="h-[46px] outline-[#a7dbf5] px-4 border  rounded-md"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 grid md:flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              <span className="mt-[20px] ">{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
            </button>
          </div>
          <div className="grid py-2 w-full relative">
            <label className="py-2 font-bold" htmlFor="confirm_password">
              Confirmer mot de passe
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm_password"
              name="confirmPassword"
              placeholder="Confirmer mot de passe"
              onChange={handleChange}
              required
              className="h-[46px] outline-[#a7dbf5] px-4 border  rounded-md"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 grid md:flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="h-[46px] outline-[#a7dbf5] text-center rounded-md border border-gray-300 bg-[#a7dbf5] mx-auto my-3 py-1">
            <button type="submit" className="my-1">
              S`inscrire
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Inscription;
