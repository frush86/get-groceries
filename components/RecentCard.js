import { useState } from "react";
import styled from "styled-components";
import { motion } from "motion/react";

export default function RecentCard({ product, toggleRecent }) {
  const [isRemoved, setIsRemoved] = useState(false);

  function handleRemove() {
    setIsRemoved(true);
    setTimeout(() => toggleRecent(product.id), 200);
  }

  return (
    <RecentProduct
      animate={isRemoved ? { transform: "translateY(-200px)", opacity: 0 } : {}}
      transition={{ duration: 0.3 }}
      onClick={handleRemove}
    >
      {product.name}
    </RecentProduct>
  );
}

const RecentProduct = styled(motion.div)`
  background-color: #2a9d8f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
  width: 120px;
  height: 60px;
  @media (max-width: 430px) {
    width: 140px;
    height: 60px;
  }
`;
