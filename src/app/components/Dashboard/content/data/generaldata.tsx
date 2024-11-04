"use client"

import { FaMoneyBills } from "react-icons/fa6";
import { LiaFirstAidSolid } from "react-icons/lia";
import { IoWarningOutline } from "react-icons/io5";
import { BsShieldPlus } from "react-icons/bs";
import { BiSolidChevronsRight } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from 'axios'

const Generaldata = () => {
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
    <div className="general-data flex">
      <div className="card bg-[#fff] rounded-md w-[212px] mx-auto h-[152px] border border-[#2cb381]">
        <div className="card-body text-center">
          <div className="icon text-center mx-auto my-2 w-1/4 ">
            <span className="text-5xl font-bold text-[#2cb381]">
              <BsShieldPlus />
            </span>
          </div>
          <h1 className="my-1 font-bold">BIEN</h1>
          <p>Statut de l`inventaire</p>
        </div>
        <div className="card-footer bg-[#a6dbcb] text-sm mt-[12px] h-[24px] rounded-b-md  border border-t-[#2cb381]">
          <button className="flex mx-auto">
            Afficher le rapport détaillé{" "}
            <span className="my-auto">
              <BiSolidChevronsRight />
            </span>
          </button>
        </div>
      </div>
      <div className="card bg-[#fff] rounded-md w-[212px] mx-auto h-[152px] border border-[#f8d202]">
        <div className="card-body text-center">
          <div className="icon text-center mx-auto my-2 w-1/4 ">
            <span className="text-5xl font-bold text-[#f8d202]">
              <FaMoneyBills />
            </span>
          </div>
          <h1 className="my-1 font-bold">4.800.432 FCFA</h1>
          <p>Revenu</p>
        </div>
        <div className="card-footer bg-[#f2e9ac] text-sm mt-[12px] h-[24px] rounded-b-md  border border-t-[#f8d202]">
          <button className="flex mx-auto">
            Afficher le rapport détaillé{" "}
            <span className="my-auto">
              <BiSolidChevronsRight />
            </span>
          </button>
        </div>
      </div>
      <div className="card bg-[#fff] rounded-md w-[212px] mx-auto h-[152px] border border-[#03a9f5]">
        <div className="card-body text-center">
          <div className="icon text-center mx-auto my-2 w-1/4 ">
            <span className="text-5xl font-bold text-[#03a9f5]">
              <LiaFirstAidSolid />
            </span>
          </div>
          <h1 className="my-1 font-bold">{products.length}</h1>
          <p>Médicaments disponible</p>
        </div>
        <div className="card-footer bg-[#a7dcf5] text-sm mt-[12px] h-[24px] rounded-b-md  border border-t-[#03a9f5]">
          <button className="flex mx-auto">
            visité l`inventaire{" "}
            <span className="my-auto">
              <BiSolidChevronsRight />
            </span>
          </button>
        </div>
      </div>
      <div className="card bg-[#fff] rounded-md w-[212px] mx-auto h-[152px] border border-[#f1574e]">
        <div className="card-body text-center">
          <div className="icon text-center mx-auto my-2 w-1/4 ">
            <span className="text-5xl font-bold text-[#f1574e]">
              <IoWarningOutline />
            </span>
          </div>
          <h1 className="my-1 font-bold">01</h1>
          <p>Pénurie de médicaments</p>
        </div>
        <div className="card-footer bg-[#eebfbf] text-sm mt-[12px] h-[24px] rounded-b-md  border border-t-[#f1574e]">
          <button className="flex mx-auto">
            Resoudre maintenant{" "}
            <span className="my-auto">
              <BiSolidChevronsRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Generaldata;
