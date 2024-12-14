"use client"; // Assurez-vous que ce fichier est traité comme un composant client

import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { useRouter } from "next/navigation";
import axios from "axios";

const TableMedocs = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const router = useRouter();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://fadj-ma-server2.onrender.com/api/product/"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const handleViewDetails = (name) => {
    router.push(`/products/${name}`);
  };

  // Fonction pour paginer les produits
  const paginate = (pageNumber) => {
    if (pageNumber === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      pageNumber === "next" &&
      currentPage < Math.ceil(products.length / itemsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  // Calcul des produits actuellement affichés
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="">
      <div className="w-full h-auto bg-[#fff] text-left">
        {/* Conteneur défilable */}
        <div className="overflow-x-auto ">
          <table className="mx-auto w-full min-w-[600px]">
            <thead>
              <tr className="border-t-[#000]">
                <th className="p-2 text-left">Nom du médicament</th>
                <th className="p-2 text-left">ID du médicament</th>
                <th className="p-2 text-left">Nom de groupe</th>
                <th className="p-2 text-left">Stock en quantité</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((product) => (
                <tr
                  key={product._id}
                  className="border border-t-[#000] h-[40px]"
                >
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product._id}</td>
                  <td className="p-2">{product.groupename}</td>
                  <td className="p-2">{product.quantity}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleViewDetails(product.name)}
                      className="text-blue-600 underline"
                    >
                      Voir tous les détails
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}
      <div className=" flex justify-end">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default TableMedocs;
