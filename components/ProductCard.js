import styled from "styled-components";

export default function ProductCard({ deleteProduct, product }) {
  return (
    <Product onClick={() => deleteProduct(product.id)}>{product.name}</Product>
  );
}

const Product = styled.div`
  background-color: #e76f51;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 80px;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`;
