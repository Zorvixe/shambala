import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-col brand">
            <button
              className="footer-brand-btn"
              onClick={() => navigate("/")}
            >
              <img
                src="/vdio/assets/logo3.png"
                alt="Shambala Amma Coffee Works"
                className="logo-img"
              />
              <span className="brand-name">
                Shambala Amma Coffee Works
              </span>
            </button>

            <p className="brand-desc">
              100% pure organic products directly from sustainable farms to your table.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => navigate("/organic-products")}>Organic Products</a></li>
              <li><a onClick={() => navigate("/coffee-products")}>Coffee Products</a></li>
             
              {/* <li><a href="9550815979">Contact</a></li> */}

            </ul>
          </div>

          {/* CATEGORIES */}
          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><a onClick={() => navigate("/organic/millets")}>Millets</a></li>
              <li><a onClick={() => navigate("/organic/flours")}>Flours</a></li>
              <li><a onClick={() => navigate("/organic/honey")}>Honey</a></li>
              <li><a onClick={() => navigate("/coffee-products")}>Coffee</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li>
               <a href="https://www.google.com/maps?q=17.385443,78.3298051"> <i className="bi bi-geo-alt-fill"></i>
               Gooncha Hills Main St, Kokapet, Gandipet, Telangana 500075, India</a>
              </li>
              <li>
                <i className="bi bi-telephone-fill"></i>
              +91 95508 15979
              </li>
              <li>
                <i className="bi bi-envelope-fill"></i>
                Shambalaammacoffeeworks@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <a href="https://www.zorvixetechnologies.com/">
          <p>© 2026 Zorvixe Technologies. All rights reserved.</p>
        </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
