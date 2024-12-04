import ProductCard from "./ProductCard";

import styled from "styled-components";

export default function List({ deleteProduct, products, selectedProducts }) {
  if (
    (!products || products.length === 0) &&
    (!selectedProducts || selectedProducts.length === 0)
  )
    return <p>Please start adding groceries</p>;
  return (
    <>
      <ProductContainer>
        {products
          .slice()
          .reverse()
          .map((product) => (
            <section key={product.id}>
              <ProductCard deleteProduct={deleteProduct} product={product} />
            </section>
          ))}

        {selectedProducts.map((product) => (
          <section key={product.id}>
            <ProductCard deleteProduct={deleteProduct} product={product} />
          </section>
        ))}
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
`;
