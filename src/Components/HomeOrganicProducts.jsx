import React from "react";
import { useNavigate } from "react-router-dom";
import productsData from "./productsData";
import "./OrganicProducts.css";

const HomeOrganicProducts = () => {
  const navigate = useNavigate();

  // Show only first 8 products on home page
  const homeProducts = productsData.slice(0, 8);

  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-success title">Organic Products</h3>

        <button
          className="btn btn-outline-success fw-semibold rounded-pill px-4"
          onClick={() => navigate("/organic-products")}
        >
          View All Products
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="row g-3 g-lg-4">
        {homeProducts.map(product => (
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

                {/* CENTERED EYE BUTTON */}
                <button
                  className="eye-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${product.id}`);
                  }}
                >
                  <i className="bi bi-eye"></i>
                </button>

                {/* RATING */}
                <div className="rating-badge">
                  <i className="bi bi-star-fill text-warning me-1"></i>
                  {product.rating}
                </div>
              </div>

              <div className="card-body p-3">
                <h6 className="product-name fw-bold mb-2">
                  {product.name}
                </h6>

                <div className="price-section">
                  <span className="old-price text-muted text-decoration-line-through me-2">
                    ₹{product.oldPrice}
                  </span>
                  <span className="price fw-bold text-success fs-5">
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

export default HomeOrganicProducts;
