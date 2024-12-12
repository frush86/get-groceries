import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, addProduct }) {
  return (
    <LayoutContainer>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer addProduct={addProduct} />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100); /* Use dynamic height */
`;

const StyledMain = styled.main`
  flex-grow: 1;
`;
