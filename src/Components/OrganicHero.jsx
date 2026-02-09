import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrganicHero.css";

const OrganicHero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="organic-hero"
      onClick={() => navigate("/organic-products")}
    >
      <div className="organic-overlay">
        <div className="organic-hero-inner">

          {/* CONTENT */}
          <div className="organic-hero-content">
            <h1 className="organic-title">
              ORGANIC GROCERIES
            </h1>

            <button
              className="organic-btn"
              onClick={(e) => {
                e.stopPropagation(); // prevent double trigger
                navigate("/organic-products");
              }}
            >
              SHOP ORGANIC
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrganicHero;
