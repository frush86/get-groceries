import styled from "styled-components";

export default function RecentCard({ product, toggleRecent }) {
  return (
    <Product onClick={() => toggleRecent(product.id)}>{product.name}</Product>
  );
}

const Product = styled.div`
  background-color: #2a9d8f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 119px;
  height: 50px;
  padding: 5px;
  margin: 2px;
  border-radius: 5px;
`;
