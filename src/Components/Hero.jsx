import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasCounted, setHasCounted] = useState(false);
  const navigate = useNavigate();
  const statsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (hasCounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasCounted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  // ✅ UPDATED STATS DATA
  const stats = [
    { end: 500, label: "Products", suffix: "+" },
    { end: 98, label: "Organic", suffix: "%" },
    { end: 24, label: "Support", suffix: "/7" },
  ];

  return (
    <section className="hero-section">
      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/vdio/hero.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="hero-content">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 col-md-8">
              <div className={`hero-text ${isVisible ? "animate" : ""}`}>
                <h1 className="hero-title">
                  Premium <span className="text-green">Organic</span> Products
                </h1>

                <p className="hero-description">
                  Discover the finest coffee and organic products sourced
                  directly from sustainable farms. Pure, natural, and delicious.
                </p>

                <div className="hero-buttons">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => navigate("/products")}
                  >
                    Shop Now
                  </button>
                </div>

                {/* ================= STATS ================= */}
                <div ref={statsRef} className="hero-stats mt-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <span className="stat-number">
                        {hasCounted ? (
                          <CountUp
                            end={stat.end}
                            suffix={stat.suffix}
                            duration={3.6}
                            delay={index * 0.4}
                          />
                        ) : (
                          <span>0</span>
                        )}
                      </span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <div className="scroll-indicator">
        <div className="scroll-circle"></div>
      </div>
    </section>
  );
};

/* ======================================================
   COUNTUP COMPONENT (Suffix-aware)
====================================================== */
const CountUp = ({ end, suffix = "", duration = 2.5, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);

  useEffect(() => {
    let startTime = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, delay]);

  return (
    <>
      <span className="count-main">{count.toLocaleString()}</span>
      {count === end && suffix && (
        <span className="count-suffix">{suffix}</span>
      )}
    </>
  );
};

export default Hero;
