import React, { useState, useEffect } from "react";
import axios from "axios";
import onClose from "../Dashboard/modal/modal";

const ProduitAdd = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [groupename, setGroupename] = useState();

  useEffect(() => {
    axios
      .get("https://fadj-ma-server2.onrender.com/api/product/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://fadj-ma-server2.onrender.com/api/products/", {
        name,
        description,
        price,
        quantity,
        groupename,
      });
      setName("");
      setDescription("");
      setPrice();
      setQuantity();
      setGroupename();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="z-40 w-full">
      <form
        onSubmit={handleSubmit}
        className="mx-auto md:h-52 bg-white-700 flex flex-wrap"
      >
        <input
          className="border rounded-md w-[220px] mx-auto my-2 px-3 h-[50px]"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom du médicament"
          required
        />
        <br />
        <textarea
          className="border rounded-md w-[220px] mx-auto my-2 px-3 h-[50px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <br />
        <input
          className="border rounded-md w-[220px] mx-auto my-2 px-3 h-[50px]"
          type="text"
          value={groupename}
          onChange={(e) => setGroupename(e.target.value)}
          placeholder="Groupe du médiacament"
          required
        />
        <br />
        <input
          className="border rounded-md w-[220px] mx-auto my-2 px-3 h-[50px]"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Prix"
          required
        />
        <br />
        <input
          className="border rounded-md w-[220px] mx-auto my-2 px-3 h-[50px]"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantité en stock"
        />
        <br />
        <button
          type="submit"
          className="bg-[#a7dbf5] rounded-md my-3 h-[50px] w-[200px] mx-auto "
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default ProduitAdd;
