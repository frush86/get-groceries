import { useState } from "react";
import styled from "styled-components";
import { motion } from "motion/react";

export default function ProductCard({ product, toggleRecent }) {
  const [isRemoved, setIsRemoved] = useState(false);

  function handleRemove() {
    setIsRemoved(true);
    setTimeout(() => toggleRecent(product.id), 300);
  }

  return (
    <Product
      animate={isRemoved ? { transform: "translateY(200px)", opacity: 0 } : {}}
      transition={{ duration: 0.3 }}
      onClick={handleRemove}
    >
      {product.name}
    </Product>
  );
}

const Product = styled(motion.div)`
  background-color: #e76f51;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
  cursor: pointer;
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
