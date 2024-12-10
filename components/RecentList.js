import RecentCard from "./RecentCard";
import styled from "styled-components";

export default function AddedRecent({ toggleRecent, products }) {
  const recentProducts = products?.filter((product) => product.isRecent) || [];

  return (
    <>
      <RecentContainer>
        <p>Recently bought products</p>
      </RecentContainer>

      <RecentList>
        {recentProducts.map((product) => (
          <section key={product.id}>
            <RecentCard toggleRecent={toggleRecent} product={product} />
          </section>
        ))}
      </RecentList>
    </>
  );
}

const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const RecentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  width: 100%;
  background-color: white;
`;
