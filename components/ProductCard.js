import { useState } from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import Image from "next/image";

import { getImageForProduct } from "@/utils/getImageForProduct";

export default function ProductCard({ product, toggleRecent }) {
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
    >
      {
        <Image
          src={getImageForProduct(product.name)}
          alt="Product"
          width={45}
          height={45}
        />
      }
      {product.name}
    </Product>
  );
}

const Product = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: #e76f51;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  height: 120px;
  @media (max-width: 430px) {
    width: 140px;
    height: 140px;
  }
`;

// import { motion } from "motion/react";
// import styled from "styled-components";

// export default function ProductCard({ product, toggleRecent }) {
//   return (
//     <Product onClick={() => toggleRecent(product.id)}>{product.name}</Product>
//   );
// }

// const Product = styled.div`
//   background-color: #e76f51;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 120px;
//   height: 120px;
//   padding: 5px;
//   margin: 2px;
//   border-radius: 5px;
// `;
