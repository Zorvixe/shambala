import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productsData from "./productsData";
import "./OrganicProducts.css";

/* ===============================
   CATEGORY LIST
================================ */
const categories = [
  "All",
  "Millets",
  "Flours",
  "Malt",
  "Ground Nuts",
  "Honey",
  "Pickles",
  "Spices",
  "Chutney Pudi",
];

/* ===============================
   URL SLUG → CATEGORY NAME
================================ */
const CATEGORY_MAP = {
  millets: "Millets",
  flours: "Flours",
  malt: "Malt",
  "ground-nuts": "Ground Nuts",
  honey: "Honey",
  pickles: "Pickles",
  spices: "Spices",
  "chutney-pudi": "Chutney Pudi",
};

const OrganicProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("All");

  /* ===============================
     SYNC URL → CATEGORY
  ================================ */
  useEffect(() => {
    if (category && CATEGORY_MAP[category]) {
      setSelected(CATEGORY_MAP[category]);
    } else {
      setSelected("All");
    }
  }, [category]);

  /* ===============================
     FILTER PRODUCTS
  ================================ */
  const filteredProducts =
    selected === "All"
      ? productsData
      : productsData.filter(
          (product) => product.category === selected
        );

  /* ===============================
     CATEGORY CLICK
  ================================ */
  const handleCategoryClick = (cat) => {
    setSelected(cat);

    if (cat === "All") {
      navigate("/organic-products");
    } else {
      navigate(`/organic/${cat.toLowerCase().replace(/\s+/g, "-")}`);
    }
  };

  return (
    <div className="container my-4">

      {/* ================= HEADER ================= */}
      <div className="mb-4">
        <h3
          className="fw-bold text-success clickable-title mb-3"
          onClick={() => navigate("/")}
        >
          Organic Products
        </h3>

        {/* CATEGORY GRID */}
        <div className="category-grid">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${
                selected === cat ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="row g-3 g-lg-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6"
          >
            <div className="product-card h-100">

              <div className="card-image-wrapper">
                <img
                  src={product.images[0]}
                  className="card-image"
                  alt={product.name}
                />

                <button
                  className="eye-btn"
                  onClick={() =>
                    navigate(`/product/${product.id}`)
                  }
                >
                  <i className="bi bi-eye"></i>
                </button>

                <div className="rating-badge">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  {product.rating}
                </div>
              </div>

              <div className="card-body p-3">
                <h6 className="fw-bold mb-2 text-truncate">
                  {product.name}
                </h6>

                <div className="price-section">
                  <span className="text-muted text-decoration-line-through me-2">
                    ₹{product.oldPrice}
                  </span>
                  <span className="fw-bold text-success fs-5">
                    ₹{product.price}
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OrganicProducts;
