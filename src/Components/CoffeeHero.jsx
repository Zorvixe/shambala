import React from "react";
import { useNavigate } from "react-router-dom";
import "./CoffeeHero.css";

const CoffeeHero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="coffee-hero"
      onClick={() => navigate("/coffee-products")}
      style={{ cursor: "pointer" }}
    >
      <div className="coffee-overlay">
        <div className="coffee-hero-inner">

          {/* CONTENT */}
          <div className="coffee-hero-content">
            <h1 className="coffee-title">
              PREMIUM <br /> FILTER COFFEE
            </h1>

            <button
              className="coffee-btn"
              onClick={(e) => {
                e.stopPropagation(); // prevent double navigation
                navigate("/coffee-products");
              }}
            >
              SHOP NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoffeeHero;
