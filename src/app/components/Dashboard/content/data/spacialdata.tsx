"use client"


import { BiSolidChevronsRight } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from 'axios'

const Specialdata = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/product/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };
  
  return (
    <div className="special-data my-5 flex flex-wrap text-[14px]">
      <div className="spacial-card rounded-md  w-5/12 bg-[#fff] h-32 mx-auto my-5 border border-gray">
        <div className="flex justify-between p-2 px-6 border border-b-gray">
          <h2>Inventaire</h2>
          <button className="flex">
            Allez dans la Configuration{" "}
            <span className="ml-2 my-auto">
              <BiSolidChevronsRight />
            </span>
          </button>
        </div>
        <div className="flex justify-between p-2 px-6">
          <div>
            <span className="font-bold text-2xl">{products.length}</span>
            <h3>Nombre total de medicaments</h3>
          </div>
          <div>
          <span className="font-bold text-2xl">24</span>
            <h3>Groupes de médecine</h3>
          </div>
        </div>
      </div>
      <div className="spacial-card rounded-md  w-5/12 bg-[#fff] h-32 mx-auto my-5 border border-gray">
        <div className="flex justify-between p-2 px-6 border border-b-gray">
          <h2>Rapport rapide</h2>
          <select name="" id="">
            <option value="">Janvier</option>
            <option value="">Février</option>
            <option value="">Mars</option>
            <option value="">Avril</option>
          </select>
        </div>
        <div className="flex justify-between p-2 px-6">
          <div>
          <span className="font-bold text-2xl">70 856</span>
            <h3>Quantité de medicaments</h3>
          </div>
          <div>
          <span className="font-bold text-2xl">5 288</span>
            <h3>Facture générées</h3>
          </div>
        </div>
      </div>
      <div className="spacial-card rounded-md  w-5/12 bg-[#fff] h-32 mx-auto my-5 border border-gray">
        <div className="flex justify-between p-2 px-6 border border-b-gray">
          <h2>Ma pharmacie</h2>
          <button className="flex">
            Accédez à la gestion des utilisateurs{" "}
            <span className="ml-2 my-auto">
              <BiSolidChevronsRight />
            </span>
          </button>
        </div>
        <div className="flex justify-between p-2 px-6">
          <div>
          <span className="font-bold text-2xl">04</span>
            <h3>Nombre total de fournisseur</h3>
          </div>
          <div>
          <span className="font-bold text-2xl">05</span>
          <h3>Nombre total d`utilistauers</h3></div>
        </div>
      </div>
      <div className="spacial-card rounded-md  w-5/12 bg-[#fff] h-32 mx-auto my-5 border border-gray">
        <div className="flex justify-between p-2 px-6 border border-b-gray ">
          <h2>Clients</h2>
          <button className="flex">
            Allez à la page clients{" "}
            <span className="ml-2 my-auto">
              <BiSolidChevronsRight />
            </span>
          </button>
        </div>
        <div className="flex justify-between p-2 px-6">
          <div>
          <span className="font-bold text-2xl">845</span>
            <h3>Nombre total de clients</h3></div>
          <div>
          <span className="font-bold text-2xl">Adalimumab</span>
            <h3>Article frequement consulté</h3></div>
        </div>
      </div>
    </div>
  );
};

export default Specialdata;
