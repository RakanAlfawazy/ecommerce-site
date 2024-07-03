import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin: 0.5rem 0;
  text-decoration: none;
`;

const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.5rem 0;
  text-decoration: none;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover ${ProductName},
  &:hover ${ProductDescription} {
    text-decoration: none;
  }
`;

const ProductItem = ({ product }) => {
  return (
    <ProductCard>
      <StyledLink to={`/product/${product.id}`}>
        <ProductImage src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>{product.price}</ProductPrice>
      </StyledLink>
    </ProductCard>
  );
};

export default ProductItem;
