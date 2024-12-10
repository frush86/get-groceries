import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { nanoid } from "nanoid";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [products, setProducts] = useLocalStorageState("products", {
    defaultValue: [],
  });

  function addProduct(productData) {
    const newProduct = { id: nanoid(), ...productData, isRecent: false };
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  }

  const toggleRecent = (id) => {
    setProducts((prevProducts) => {
      // Map through the products and toggle the `isRecent` property of the product with the given id
      const updatedProducts = prevProducts.map((product) =>
        product.id === id
          ? { ...product, isRecent: !product.isRecent }
          : product
      );

      // Find the toggled product
      const toggledProduct = updatedProducts.find(
        (product) => product.id === id
      );

      // Always move the toggled product to the front of the list
      return [
        toggledProduct,
        ...updatedProducts.filter((product) => product.id !== id),
      ];
    });
  };

  return (
    <>
      <Layout addProduct={addProduct}>
        <GlobalStyle />
        <Component
          {...pageProps}
          products={products}
          addProduct={addProduct}
          toggleRecent={toggleRecent}
        />
      </Layout>
    </>
  );
}
