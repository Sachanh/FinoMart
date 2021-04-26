import "./styles.css";
import {
  Navbar,
  Home,
  ProductListing,
  AddToWishlist,
  AddToCart,
  Footer
} from "./Component";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<AddToWishlist />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
      <Footer />
    </div>
  );
}
