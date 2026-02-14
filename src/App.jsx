import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";


// Layout components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatingSocial from "./Components/FloatingSocial";
import PageWrapper from "./Components/PageWrapper";
// Home sections
import Hero from "./Components/Hero";
import CoffeeHero from "./Components/CoffeeHero";
import OrganicHero from "./Components/OrganicHero";
import HomeOrganicProducts from "./Components/HomeOrganicProducts";
import HomeCoffeeProducts from "./Components/HomeCoffeeProducts";
import Promo2 from "./Components/Promo2";

// Pages
import OrganicProducts from "./Components/OrganicProducts";
import CoffeeProducts from "./Components/CoffeeProducts";
import ProductDetails from "./Components/ProductDetails";


// ======================
// Home Page Layout
// ======================
function Home() {
  return (
    <>
      <Hero />
      <CoffeeHero />
      <OrganicHero />
      <HomeOrganicProducts />
      <HomeCoffeeProducts />
      <Promo2 />
    </>
  );
}


// ======================
// App Root
// ======================
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Global Header */}
      <Navbar />
   <PageWrapper>
      {/* Routes */}
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<CoffeeProducts />} />
        

        {/* Product pages */}
        <Route path="/coffee-products" element={<CoffeeProducts />} />
        <Route path="/organic-products" element={<OrganicProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Category routes */}
        <Route path="/organic/:category" element={<OrganicProducts />} />
        <Route path="/coffee/:category" element={<CoffeeProducts />} />
        <Route path="/products/:category" element={<CoffeeHero />} />

      </Routes>
</PageWrapper>
      {/* Global Footer + Floating UI */}
      <Footer />
      <FloatingSocial />

    </BrowserRouter>
  );
}

export default App;
