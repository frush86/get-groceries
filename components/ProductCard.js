import { useState } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import Image from "next/image";

import { getImageForProduct } from "@/utils/getImageForProduct";

export default function ProductCard({ product, toggleRecent, isGrouped }) {
  const [isRemoved, setIsRemoved] = useState(false);

  function handleRemove() {
    setIsRemoved(true);
    setTimeout(() => toggleRecent(product.id), 200);
  }

  return (
    <Product
      animate={isRemoved ? { transform: "translateY(200px)", opacity: 0 } : {}}
      transition={{ duration: 0.3 }}
      onClick={handleRemove}
      isGrouped={isGrouped}
    >
      {!isGrouped ? (
        <>
          <Image
            src={getImageForProduct(product.name)}
            alt="Product"
            width={45}
            height={45}
          />
          <span>{product.name}</span>
        </>
      ) : (
        <span>{product.name}</span>
      )}
    </Product>
  );
}

const Product = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #e76f51;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  height: ${({ isGrouped }) => (isGrouped ? "60px" : "100px")};

  @media (min-width: 430px) {
    width: 140px;
    height: ${({ isGrouped }) => (isGrouped ? "60px" : "100px")};
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
    text-align: center;
  }
`;
