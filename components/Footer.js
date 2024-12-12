import styled from "styled-components";
import { useState, useEffect } from "react";

import Form from "./Form";

export default function Footer({ addProduct }) {
  const [footerBottom, setFooterBottom] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const isKeyboardOpen =
        window.innerHeight < document.documentElement.clientHeight;
      if (isKeyboardOpen) {
        setFooterBottom(
          document.documentElement.clientHeight - window.innerHeight
        );
      } else {
        setFooterBottom(0);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledFooter style={{ bottom: `${footerBottom}px` }}>
      <Form addProduct={addProduct} />
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100%;
  background-color: #264653;
  padding: 1rem;
  text-align: center;
  transition: bottom 0.3s ease-in-out;
`;
