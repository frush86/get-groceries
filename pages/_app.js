import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useLocalStorageState("products", {
    defaultValue: [],
  });

  const [deletedProducts, setDeletedProducts] = useLocalStorageState(
    "deletedProducts",
    { defaultValue: [] }
  );

  const [selectedProducts, setSelectedProducts] = useLocalStorageState(
    "selectedProducts",
    { defaultValue: [] }
  );

  function addProduct(productData) {
    const newProduct = { id: nanoid(), ...productData };
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  }

  function deleteProduct(id) {
    // Find the deleted product in the products array
    const deletedProduct = products.find((product) => product.id === id);

    if (deletedProduct) {
      // Add the deleted product to deletedProducts
      setDeletedProducts((prevDeletedProducts) => [
        ...prevDeletedProducts,
        deletedProduct,
      ]);
    }

    // Remove the product from the products array
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );

    // Remove the product from the selectedProducts array
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.filter((product) => product.id !== id)
    );
  }

  function selectProduct(product) {
    setSelectedProducts((prev) =>
      prev.some((p) => p.id === product.id) ? prev : [...prev, product]
    );
  }

  return (
    <>
      <Layout addProduct={addProduct}>
        <GlobalStyle />
        <Component
          {...pageProps}
          products={products}
          deletedProducts={deletedProducts}
          selectedProducts={selectedProducts}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
          selectProduct={selectProduct}
        />
      </Layout>
    </>
  );
}
