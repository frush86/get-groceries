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
    <>
      <ToggleContainer>
        <StyledToggle onClick={() => setIsGrouped(!isGrouped)}>
          {isGrouped ? (
            <Image
              src="/icons/grid.png"
              alt="Shoppingcart"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src="/icons/list.png"
              alt="Shoppingcart"
              width={30}
              height={30}
            />
          )}
        </StyledToggle>
      </ToggleContainer>
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
                      width={35}
                      height={35}
                    />
                  ) : (
                    <Image
                      src="/icons/shoppingCart.png"
                      alt="Shoppingcart"
                      width={35}
                      height={35}
                    />
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
    </>
  );
}

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

const StyledToggle = styled.div`
  padding: 5px;
  color: black;
  cursor: pointer;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
`;

const CategorySection = styled.div``;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-left: 5px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Section = styled(motion.section)``;

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
