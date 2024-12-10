import styled from "styled-components";

export default function ProductCard({ product, toggleRecent }) {
  return (
    <Product onClick={() => toggleRecent(product.id)}>{product.name}</Product>
  );
}

const Product = styled.div`
  background-color: #e76f51;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 119px;
  height: 70px;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
`;
