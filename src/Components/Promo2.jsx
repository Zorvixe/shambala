import React from "react";
import "./Promo2.css";

const Promo2 = () => {
  return (
    <section className="promo-banner">
      <div className="banner-images">
        {/* Image 1 - Left */}
        <div className="banner-img-container left">
          <img
            src="/vdio/assets/p2.png"
            alt="Promotion 1"
            className="poster-img"
          />
        </div>

        {/* PROMOTION TEXT IN BETWEEN */}
        <div className="promo-text">
          <div className="promo-content">
            <h3>Limited Time Offers</h3>
            <p className="promo-offer">
              Buy Now & Save <span>Up to 20%</span>
            </p>
          </div>
        </div>

        {/* Image 2 - Right */}
        <div className="banner-img-container right">
          <img
            src="/vdio/assets/p1.png"
            alt="Promotion 2"
            className="poster-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Promo2;
