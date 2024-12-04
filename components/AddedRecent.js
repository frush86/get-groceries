import styled from "styled-components";

import RecentCard from "./RecentCard";

export default function AddedRecent({ deletedProducts, selectProduct }) {
  return (
    <>
      <h2>V Recently bought</h2>
      <ProductContainer>
        {deletedProducts
          .slice()
          .reverse()
          .map((product) => (
            <section
              key={product.id}
              onClick={() => selectProduct(product)}
              style={{ cursor: "pointer" }}
            >
              <RecentCard product={product} />
            </section>
          ))}
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;
