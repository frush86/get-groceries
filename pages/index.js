import styled from "styled-components";

import List from "@/components/List";
import RecentList from "@/components/RecentList";

export default function HomePage({ products, toggleRecent }) {
  return (
    <>
      <List toggleRecent={toggleRecent} products={products} />
      <RecentList toggleRecent={toggleRecent} products={products} />
    </>
  );
}

const ListContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 25px;
`;
