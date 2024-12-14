"use client"; // Assurez-vous que ce fichier est traité comme un composant client

import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { useRouter } from "next/navigation"; // Utiliser useRouter depuis next/navigation
import axios from "axios";

const TableMedocs = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

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
    <section>
      <div className="w-full bg-[#fff] text-left">
        <table className="mx-auto w-full overflow-x-scroll">
          <thead className="w-1/5">
            <tr className="border-t-[#000]">
              <th className="p-1">Nom du médicament</th>
              <th className="p-1">ID du médicament</th>
              <th className="p-1">Nom de groupe</th>
              <th className="p-1">Stock en quantité</th>
              <th className="p-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product) => (
              <tr key={product._id} className="border border-t-[#000] h-[34px]">
                <td className="p-1">{product.name}</td>
                <td className="p-1">{product._id}</td>
                <td className="p-1">{product.groupename}</td>
                <td className="p-1">{product.quantity}</td>
                <td className="flex p-1">
                  <button onClick={() => handleViewDetails(product.name)}>
                    Voir tous les détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-end">
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
