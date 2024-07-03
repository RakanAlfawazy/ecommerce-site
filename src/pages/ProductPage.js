import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const ProductName = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ProductDetails = styled.div`
  font-size: 0.875rem;
  color: #444;
  text-align: left;
  margin-top: 1rem;
`;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching the product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductDetails>
        <h3>Product Details</h3>
        <p><strong>Category:</strong> Electronics</p>
        <p><strong>Brand:</strong> Example Brand</p>
        <p><strong>Model:</strong> Example Model</p>
        <p><strong>Specifications:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia purus ut libero elementum, nec vehicula felis interdum.</p>
      </ProductDetails>
    </ProductContainer>
  );
};

export default ProductPage;
