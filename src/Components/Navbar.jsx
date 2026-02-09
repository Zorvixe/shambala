import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  /* ===========================
     SCROLL & SCREEN CHECK
  ============================ */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);

    handleScroll();
    checkScreen();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  /* ===========================
     AUTO CLOSE MOBILE NAV
  ============================ */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const nav = document.getElementById("mainNav");
      const toggler = document.querySelector(".navbar-toggler");

      if (
        isMobile &&
        nav?.classList.contains("show") &&
        !nav.contains(e.target) &&
        !toggler?.contains(e.target)
      ) {
        nav.classList.remove("show");
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMobile]);

  const closeMobileNav = () => {
    const navCollapse = document.getElementById("mainNav");
    if (isMobile && navCollapse?.classList.contains("show")) {
      navCollapse.classList.remove("show");
    }
  };

  const dropdownItems = {
    shop: ["All Products", "New Arrivals"],
    coffee: ["Whole Beans", "Ground Coffee", "Cold Brew", "Specialty", "Tea"],
    organic: ["Millets", "Flours", "Malt", "Ground nuts", "Honey", "Pickles"],
  };

  const goToCategory = (base, item) => {
    navigate(`/${base}/${item.toLowerCase().replace(/\s+/g, "-")}`);
    closeMobileNav();
  };

  return (
    <header className={`main-header ${scrolled ? "scrolled" : ""}`}>

      {/* ================= TOP STRIP ================= */}
      <div className={`top-strip ${scrolled ? "hide" : ""}`}>
        <div className="container top-strip-inner">

          {/* PHONE */}
          <span className="top-phone">+91 9550815979</span>

          {/* MOVING TEXT */}
          <div className="moving-text-wrapper">
            <div className="moving-text">
              •  Freshly Filtered Coffee • Organic Products •
              <span
                className="highlight"
                onClick={() => navigate("/products")}
              >
                Shop Now
              </span>
              • Free Delivery Above ₹999  •
            </div>
          </div>

          {/* LOCATION */}
          <div className="location-div">
            <a
              href="https://www.google.com/maps?q=17.385443,78.3298051"
              target="_blank"
              rel="noopener noreferrer"
              className="top-location-pill"
            >
              <i className="bi bi-geo-alt-fill"></i> Location
            </a>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex align-items-center">

          {/* LOGO + TITLE */}
          <button
            className="navbar-brand brand-wrap bg-transparent border-0 p-0"
            onClick={() => {
              navigate("/");
              closeMobileNav();
            }}
          >
            <div className="logo-section">
              <img
                src="/vdio/assets/logo3.png"
                alt="Shambala Amma Coffee Works"
                className="logo-img-big"
              />
              <div className="brand-title">
                <div className="brand-main">Shambala Amma</div>
                <div className="brand-sub">Coffee Works</div>
              </div>
            </div>
          </button>

          {/* TOGGLER */}
          <button
            className="navbar-toggler custom-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <i className="bi bi-list fs-1"></i>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto gap-3">

              <li className="nav-item">
                <button
                  className="nav-link bg-transparent border-0"
                  onClick={() => {
                    navigate("/");
                    closeMobileNav();
                  }}
                >
                  Home
                </button>
              </li>

              {/* SHOP */}
              {/* <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle bg-transparent border-0"
                  data-bs-toggle="dropdown"
                >
                  Shop
                </button>
                <ul className="dropdown-menu">
                  {dropdownItems.shop.map((item, i) => (
                    <li key={i}>
                      <button
                        className="dropdown-item"
                        onClick={() => goToCategory("products", item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </li> */}

              {/* COFFEE */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle bg-transparent border-0"
                  data-bs-toggle="dropdown"
                >
                  Coffee Products
                </button>
                <ul className="dropdown-menu">
                  {dropdownItems.coffee.map((item, i) => (
                    <li key={i}>
                      <button
                        className="dropdown-item"
                        onClick={() => goToCategory("coffee", item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              {/* ORGANIC */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle bg-transparent border-0"
                  data-bs-toggle="dropdown"
                >
                  Organic Products
                </button>
                <ul className="dropdown-menu">
                  {dropdownItems.organic.map((item, i) => (
                    <li key={i}>
                      <button
                        className="dropdown-item"
                        onClick={() => goToCategory("organic", item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
