import styled from "styled-components";

export default function RecentCard({ product }) {
  return <Product>{product.name}</Product>;
}

const Product = styled.div`
  background-color: #f4a261;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
`;
