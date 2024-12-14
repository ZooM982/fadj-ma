"use client";

import { FaSearch } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Modal from "../modal/modal";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TableMedocs from "./data/Tablesmedoc";

const Medocs = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // État de chargement
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8000/api/product/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    } finally {
      setIsLoading(false); // Arrêter le chargement
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="md:w-[940px] pt-5 md:pt-0">
      <div className="grid md:flex justify-between z-10">
        <div>
          <h3 className="text-[24px] font-bold">
            médicaments ({products.length})
          </h3>
          <p className="text-md text-[14px]">
            liste des médicaments disponibles à la vente
          </p>
        </div>
        <div className="rounded-md px-5 border border-[#000] w-[246px] h-[46px] bg-[#fff]">
          <button onClick={openModal} className="text-[14px] flex my-auto h-full">
            <span className="my-auto">
              <FaPlus />
            </span>{" "}
            <p className="my-auto mx-2 text-sm">Nouveau médicament</p>
          </button>
        </div>
      </div>
      <div className="grid md:flex justify-between my-4 z-10">
        <div className="w-[96%] md:w-[340px] h-[38px] border rounded-md flex bg-[#fff]">
          <input
            type="text"
            placeholder="Rechercher dans l'inventaire des médicaments."
            className="w-full h-full p-3 rounded-md text-sm outline-none"
          />
          <span className="text-[24px] my-auto mr-4 ml-2">
            <FaSearch />
          </span>
        </div>
        <div className="flex my-5 md:my-0">
          <span className="text-[24px] my-auto mr-4">
            <MdFilterAlt />
          </span>
          <div className="rounded-md border border-[#000] w-[90%] md:w-[246px] h-[46px] bg-[#fff]">
            <select
              name=""
              id=""
              className="text-sm px-5 outline-none w-full h-full bg-inherit rounded-md"
            >
              <option value="" className=" text-[#000]">
                Selectionnez un groupe
              </option>
              <option value="" className=" text-[#000]">
                Antibiotiques
              </option>
              <option value="" className=" text-[#000]">
                Antihypertenseur
              </option>
              <option value="" className=" text-[#000]">
                Diabètes
              </option>
              <option value="" className=" text-[#000]">
                Maladie cardiovasculaire
              </option>
              <option value="" className=" text-[#000]">
                Produit à base de plantes
              </option>
              <option value="" className=" text-[#000]">
                Crèmes et pommades cutanées
              </option>
              <option value="" className=" text-[#000]">
                Gels et sprays anti-inflammatoires
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Indicateur de chargement */}
      {isLoading ? (
        <div className="text-center my-4">
          <p>Chargement des produits...</p>
        </div>
      ) : (
        <TableMedocs />
      )}

      <Modal isOpen={modalOpen} onClose={closeModal}></Modal>
    </section>
  );
};

export default Medocs;
