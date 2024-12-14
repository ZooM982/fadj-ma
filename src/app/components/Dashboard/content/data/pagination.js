import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav className="grid md:flex justify-between items-center w-full">
      <div className="py-2 my-auto mx-auto md:mx-0">
        <p>
          Affichage de {currentPage === 1 ? 1 : (currentPage - 1) * itemsPerPage + 1} à{" "}
          {Math.min(currentPage * itemsPerPage, totalItems)} sur {totalItems}{" "}
        </p>
      </div>
      <div className="flex space-x-2 mx-auto md:mx-0 ">
        <button
          onClick={() => paginate("prev")}
          disabled={currentPage === 1}
          className={`px-1 py-1 rounded-full w-[30px] h-[30px] ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
          }`}
        >
          <BiChevronLeft className="h-5 w-5" />
        </button>

        <div>
            <p>Page {currentPage}</p>
        </div>

        <button
          onClick={() => paginate("next")}
          disabled={currentPage === totalPages}
          className={`px-1 py-1 rounded-full w-[30px] h-[30px] ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
          }`}
        >
          <BiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
