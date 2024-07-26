'use client';

import { useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Topnav from '@/app/components/Dashboard/content/topnav';

const Page = () => {
  const { name } = useParams(); // Récupérer le nom du produit à partir des paramètres de l'URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (name) {
      fetchProductDetails(name);
    }
  }, [name]);

  const fetchProductDetails = async (productName) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/product/name/:name/${productName}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details: ", error);
    }
  };

  if (!product) return <div> 
    <Topnav /> 
  <p>Chragemnt des donées du produit</p>
  </div>

  return (
    <section>
       <Topnav /> 
      <h1>Details of {product.name}</h1>
      <p>ID: {product._id}</p>
      <p>Group Name: {product.groupename}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Description: {product.description}</p>
    </section>
  );
};

export default Page;
