import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CoffeeHero from "./Components/CoffeeHero";
import OrganicProducts from "./Components/OrganicProducts";
import CoffeeProducts from "./Components/CoffeeProducts";
import Promo2 from "./Components/Promo2";
import Footer from "./Components/Footer";
import ProductDetails from "./Components/ProductDetails";
import FloatingSocial from "./Components/FloatingSocial";
import HomeOrganicProducts from "./Components/HomeOrganicProducts";
import HomeCoffeeProducts from "./Components/HomeCoffeeProducts";
import OrganicHero from "./Components/OrganicHero";

function Home() {
  return (
    
    <>
         <Navbar />
      <Hero />
       <FloatingSocial />
      <CoffeeHero />
      <OrganicHero/>
       <HomeOrganicProducts />
       <HomeCoffeeProducts />
      <Promo2 />
      <Footer />
    
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Product Details Page */}
        <Route path="/coffee-products" element={<CoffeeProducts />} />
        <Route path="/organic-products" element={<OrganicProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<CoffeeHero />} />

        <Route path="/organic/:category" element={<OrganicProducts />} />
      <Route path="/coffee/:category" element={<CoffeeProducts />} />
      <Route path="/products/:category" element={<CoffeeHero />} />




      </Routes>
       
    </BrowserRouter>
  );
}

export default App;
