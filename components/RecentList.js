import styled from "styled-components";
import { motion } from "motion/react";

import RecentCard from "./RecentCard";

export default function RecentList({ deleteProduct, toggleRecent, products }) {
  const recentProducts = products?.filter((product) => product.isRecent) || [];

  return (
    <>
      <RecentContainer>
        {recentProducts.length > 0 && <p>Recently Used</p>}
      </RecentContainer>
      <List>
        {recentProducts.map((product) => (
          <Section
            key={product.id}
            initial={{ transform: "translateY(-50px)", opacity: 0 }}
            animate={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <RecentCard toggleRecent={toggleRecent} product={product} />
          </Section>
        ))}
        {recentProducts.length > 0 && (
          <StyledButton onClick={deleteProduct}>Clear List</StyledButton>
        )}
      </List>
    </>
  );
}

const RecentContainer = styled.div`
  text-align: left;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledButton = styled.button`
  width: 120px;
  height: 60px;
  padding: 5px;
  margin: 2px;
  border: solid 1px;
  border-radius: 5px;
  border-color: #2a9d8f;
  background-color: white;
  cursor: pointer;
`;

const Section = styled(motion.section)``;
