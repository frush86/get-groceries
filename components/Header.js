import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <h1>Wochenliste</h1>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2a9d8f;
  color: white;
  padding: 1px;
`;
