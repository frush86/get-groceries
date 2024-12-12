import styled from "styled-components";
import Form from "./Form";

export default function Footer({ addProduct }) {
  useEffect(() => {
    const handleResize = () => {
      const root = document.documentElement;
      // Update custom property for dynamic height
      root.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial height

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
`;
