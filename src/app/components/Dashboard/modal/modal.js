import React from "react";
import ProduitAdd from "../../products/ajoutproduit";
import Upload from "../content/data/upload"

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="z-50">
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-[#edf1f5] h-[150px] "><Upload /></div>
              <div className="bg-white text-black mb-10 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <ProduitAdd />
              </div>
              <div className='flex justify-between'>
                <button type="" onClick={onClose} className='border rounded-md my-3 h-[50px] w-[200px] mx-auto'>Annuler</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
