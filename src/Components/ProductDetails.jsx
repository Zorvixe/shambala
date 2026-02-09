import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "./productsData";
import coffeeProductsData from "./coffeeProductsData";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProducts = [...productsData, ...coffeeProductsData];
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) {
    return <h3 className="text-center mt-5">Product not found</h3>;
  }

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Swipe gesture refs (better performance)
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const isSwipingRef = useRef(false);
  const minSwipeDistance = 50;

  useEffect(() => {
    setMainImage(product.images[0]);
    setActiveIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, product]);

  // Fixed touch handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = 0;
    isSwipingRef.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwipingRef.current) return;
    e.preventDefault();
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isSwipingRef.current) return;
    
    const deltaX = touchStartXRef.current - touchEndXRef.current;
    
    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe LEFT → Next image
        setActiveIndex((activeIndex + 1) % product.images.length);
      } else {
        // Swipe RIGHT → Previous image
        setActiveIndex((activeIndex - 1 + product.images.length) % product.images.length);
      }
    }
    
    isSwipingRef.current = false;
  };

  const relatedProducts = allProducts.filter(
    p => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="fp-container fade-in">
      {/* 🔙 BACK ARROW */}
      <div className="fp-back" onClick={() => navigate(-1)}>
        ← 
      </div>

      {/* MAIN */}
      <div className="fp-main">
        {/* IMAGE SECTION */}
        <div className="fp-images slide-left">
          {/* MOBILE SLIDER WITH SWIPE + THUMBNAILS */}
          <div className="fp-mobile-slider">
            {/* Main image with swipe */}
            <div 
              className="fp-swipe-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={product.images[activeIndex]}
                alt={product.name}
                className="fp-main-img-mobile"
              />
            </div>
            
            {/* Mobile thumbnails */}
            {/* <div className="fp-mobile-thumbs">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb ${i + 1}`}
                  className={activeIndex === i ? "active-thumb" : ""}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
             */}
            {/* Dots as fallback */}
            {/* <div className="fp-dots">
              {product.images.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div> */}
          </div>

          {/* DESKTOP IMAGE */}
          <div className="fp-desktop-images">
            <img src={mainImage} alt={product.name} className="fp-main-img zoom" />
            <div className="fp-thumbs">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumb"
                  className={mainImage === img ? "active" : ""}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="fp-details slide-right">
          <h1>{product.name}</h1>

          {/* RATING */}
          <div className="fp-rating">
            {[1,2,3,4,5].map(i => (
              <i
                key={i}
                className={`bi ${i <= product.rating ? "bi-star-fill" : "bi-star"}`}
              ></i>
            ))}
            <span>{product.rating}/5</span>
          </div>

          {/* PRICE */}
          <div className="fp-price">
            <span className="old">₹{product.oldPrice}</span>
            ₹{product.price}
            <span className="unit">/ {product.unit}</span>
          </div>

          {/* 📌 DESCRIPTION HEADING */}
          <h4 className="fp-desc-title">Why You'll Love This</h4>

          {/* POINTS */}
          <ul className="fp-points">
            {product.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

          {/* ACTIONS */}
          <div className="fp-actions">
            <a href="tel:919550815979" className="btn-call">
              <i className="bi bi-telephone-fill"></i> Call
            </a>
            <a
              href={`https://wa.me/919550815979?text=I am interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa"
            >
              <i className="bi bi-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="fp-related fade-in">
          <h3>Related Products</h3>
          <div className="fp-related-grid">
            {relatedProducts.map(rp => (
              <div
                key={rp.id}
                className="fp-related-card slide-up"
                onClick={() => navigate(`/product/${rp.id}`)}
              >
                <img src={rp.images[0]} alt={rp.name} />
                <h4>{rp.name}</h4>
                <p>₹{rp.price} / {rp.unit}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
