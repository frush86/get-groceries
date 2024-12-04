import styled from "styled-components";
import Form from "./Form";

export default function Footer({ addProduct }) {
  return (
    <StyledFooter>
      <Form addProduct={addProduct} />
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #2a9d8f;
  padding: 1rem;
  text-align: center;
`;
