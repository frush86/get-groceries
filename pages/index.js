import styled from "styled-components";

import List from "@/components/List";
import AddedRecent from "@/components/AddedRecent";

export default function HomePage({
  selectProduct,
  deleteProduct,
  products,
  deletedProducts,
  selectedProducts,
}) {
  return (
    <>
      <ListContainer>
        <List
          deleteProduct={deleteProduct}
          products={products}
          selectedProducts={selectedProducts}
        />
      </ListContainer>
      <AddedRecent
        deletedProducts={deletedProducts}
        selectProduct={selectProduct}
      />
    </>
  );
}

const ListContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 25px;
`;
