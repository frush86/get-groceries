import styled from "styled-components";

import List from "@/components/List";
import RecentList from "@/components/RecentList";

export default function HomePage({ products, deleteProduct, toggleRecent }) {
  return (
    <>
      <List toggleRecent={toggleRecent} products={products} />
      <RecentList
        deleteProduct={deleteProduct}
        toggleRecent={toggleRecent}
        products={products}
      />
    </>
  );
}
