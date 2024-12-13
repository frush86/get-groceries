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
  position: sticky;
  bottom: 0;
  z-index: 10;
  width: 100%;
  background-color: #264653;
  padding: 1rem;
  text-align: center;
  margin: 0;
`;
