import styled from "styled-components";
import Lottie from "lottie-react";

import animationData from "/assets/animations/food.json";
import ProductCard from "./ProductCard";

export default function List({ products, toggleRecent }) {
  // Filter non-recent products
  const nonRecentProducts =
    products?.filter((product) => !product.isRecent) || [];

  // Check if there are no products or no non-recent products
  const isEmpty =
    !products || products.length === 0 || nonRecentProducts.length === 0;

  if (isEmpty) {
    return (
      <EmptyContainer>
        <p>🛒 Add products 😋</p>
        {/* <Lottie animationData={animationData} /> */}
      </EmptyContainer>
    );
  }

  return (
    <ProductList>
      {nonRecentProducts.map((product) => (
        <section key={product.id}>
          <ProductCard product={product} toggleRecent={toggleRecent} />
        </section>
      ))}
    </ProductList>
  );
}

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  width: 100%;
`;
