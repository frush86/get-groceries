import styled from "styled-components";
import { motion } from "motion/react";

import RecentCard from "./RecentCard";

export default function RecentList({ deleteProduct, toggleRecent, products }) {
  const recentProducts = products?.filter((product) => product.isRecent) || [];

  return (
    <>
      <RecentContainer>
        <p>Recently Used</p>
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
        <button onClick={deleteProduct}>Delete Recent</button>
      </List>
    </>
  );
}

const RecentContainer = styled.div`
  text-align: center;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10px;
`;

const Section = styled(motion.section)``;
