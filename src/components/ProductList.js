import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ProductList = ({ products }) => {
  return (
    <ProductGrid>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
};

export default ProductList;
