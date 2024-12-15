import styled from "styled-components";
import { motion } from "motion/react";
import Image from "next/image";

import ProductCard from "./ProductCard";

import { categories, icons } from "@/utils/getImageForProduct";
import { useState } from "react";

export default function List({ products, toggleRecent }) {
  const [isGrouped, setIsGrouped] = useState(true);

  // Filter non-recent products
  const nonRecentProducts =
    products?.filter((product) => !product.isRecent) || [];

  const isEmpty = nonRecentProducts.length === 0;

  // Group products by categories using imported categories
  const groupedProducts = Object.entries(categories).reduce(
    (acc, [category, items]) => {
      acc[category] = nonRecentProducts.filter((product) =>
        items.includes(product.name.toLowerCase())
      );
      return acc;
    },
    {}
  );

  // Find uncategorized products
  groupedProducts.uncategorized = nonRecentProducts.filter((product) => {
    // Check if product is not in any category
    return !Object.values(categories).some((items) =>
      items.includes(product.name.toLowerCase())
    );
  });

  if (isEmpty) {
    return (
      <EmptyContainer>
        <Image
          src="/icons/shoppingCart.png"
          alt="Shoppingcart"
          width={80}
          height={80}
        />
      </EmptyContainer>
    );
  }

  return (
    <div>
      <ToggleButton onClick={() => setIsGrouped(!isGrouped)}>
        {isGrouped ? "Switch to Normal View" : "Switch to Categories View"}
      </ToggleButton>
      <ProductList>
        {isGrouped ? (
          Object.entries(groupedProducts).map(([category, products]) => {
            if (products.length === 0) return null;

            return (
              <CategorySection key={category}>
                <CategoryHeader>
                  {icons[category] ? (
                    <Image
                      src={icons[category]}
                      alt={`${category} icon`}
                      width={45}
                      height={45}
                    />
                  ) : (
                    <span>Other</span>
                  )}
                </CategoryHeader>
                <ProductsGrid>
                  {products.map((product) => (
                    <Section
                      key={product.id}
                      initial={{ transform: "translateY(50px)", opacity: 0 }}
                      animate={{ transform: "translateY(0)", opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ProductCard
                        toggleRecent={toggleRecent}
                        product={product}
                        isGrouped={isGrouped}
                      />
                    </Section>
                  ))}
                </ProductsGrid>
              </CategorySection>
            );
          })
        ) : (
          <ProductsGrid>
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
          </ProductsGrid>
        )}
      </ProductList>
    </div>
  );
}

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const CategorySection = styled.div``;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Section = styled(motion.section)``;

const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: solid 1px;
  border-radius: 5px;
  border-color: #2a9d8f;
  background-color: white;
  cursor: pointer;
  margin-bottom: 20px;
`;

// import styled from "styled-components";
// import { motion } from "motion/react";
// import Image from "next/image";

// import ProductCard from "./ProductCard";

// import { getImageForProduct, categories } from "@/utils/getImageForProduct";

// export default function List({ products, toggleRecent }) {
//   // Filter non-recent products
//   const nonRecentProducts =
//     products?.filter((product) => !product.isRecent) || [];

//   const isEmpty = nonRecentProducts.length === 0;

//   // Group products by categories using imported categories
//   const groupedProducts = Object.entries(categories).reduce(
//     (acc, [category, items]) => {
//       acc[category] = nonRecentProducts.filter((product) =>
//         items.includes(product.name.toLowerCase())
//       );
//       return acc;
//     },
//     {}
//   );

//   if (isEmpty) {
//     return (
//       <EmptyContainer>
//         <Image
//           src="/icons/shoppingCart.png"
//           alt="Shoppingcart"
//           width={80}
//           height={80}
//         />
//       </EmptyContainer>
//     );
//   }

//   return (
//     <ProductList>
//       {Object.entries(groupedProducts).map(([category, products]) => {
//         if (products.length === 0) return null;

//         return (
//           <CategorySection key={category}>
//             <ProductsGrid>
//               {products.map((product) => (
//                 <Section
//                   key={product.id}
//                   initial={{ transform: "translateY(50px)", opacity: 0 }}
//                   animate={{ transform: "translateY(0)", opacity: 1 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <ProductCard toggleRecent={toggleRecent} product={product} />
//                 </Section>
//               ))}
//             </ProductsGrid>
//           </CategorySection>
//         );
//       })}
//     </ProductList>
//   );
// }

// const EmptyContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 20px;
// `;
// const CategorySection = styled.div``;

// const ProductList = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
// `;

// const ProductsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   margin-top: 5px;
// `;

// const Section = styled(motion.section)``;
