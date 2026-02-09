import React from "react";
import "./FloatingSocial.css";

const FloatingSocial = () => {
  return (
    <div className="floating-social">

      <div className="social-item">
        <a href="tel:9550815979" className="social-btn call">
          <i className="bi bi-telephone-fill"></i>
          <span>Call Us</span>
        </a>
      </div>

      <div className="social-item">
        <a
          href="https://wa.me/919550815979"
          target="_blank"
          rel="noreferrer"
          className="social-btn whatsapp"
        >
          <i className="bi bi-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
      </div>

      <div className="social-item">
        <a
          href="https://www.instagram.com/yourpage"
          target="_blank"
          rel="noreferrer"
          className="social-btn instagram"
        >
          <i className="bi bi-instagram"></i>
          <span>Instagram</span>
        </a>
      </div>

      <div className="social-item">
        <a
          href="https://www.facebook.com/yourpage"
          target="_blank"
          rel="noreferrer"
          className="social-btn facebook"
        >
          <i className="bi bi-facebook"></i>
          <span>Facebook</span>
        </a>
      </div>

    </div>
  );
};

export default FloatingSocial;
