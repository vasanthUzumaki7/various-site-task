import ExactPiece from "./components/sections/ExactPiece";
import ShoppingGuide from "./components/sections/ShoppingGuide";
import ProductsCollections from "./components/sections/ProductCollections";
import Banner from "./components/sections/Banner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Banner />
          <ProductsCollections />
          <ExactPiece />
          <ShoppingGuide />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
