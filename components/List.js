import styled from "styled-components";
import { motion } from "motion/react";
import Image from "next/image";

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
        <p>empty cart</p>
        <Image
          src="/icons/shoppingCart.png"
          alt="Shoppingcart"
          width={100}
          height={100}
        />
      </EmptyContainer>
    );
  }

  return (
    <ProductList>
      {nonRecentProducts.map((product) => (
        <Section
          key={product.id}
          initial={{ transform: "translateY(50px)", opacity: 0 }}
          animate={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <ProductCard toggleRecent={toggleRecent} product={product} />
        </Section>
      ))}
    </ProductList>
  );
}

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Section = styled(motion.section)``;
