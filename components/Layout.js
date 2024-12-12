import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, addProduct }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer addProduct={addProduct} />
    </>
  );
}
