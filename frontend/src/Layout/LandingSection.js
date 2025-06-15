import React from "react";
import SolutionsSection from "../pages/Solutions/CardSections";

const LandingSection = () => {
  return (
    <div>
      {/* Top Section: Text + Right Image */}
      <div
        style={{
          padding: "0px 30px",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "0px",
        }}
      >
        {/* Left Text */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "20px",
              lineHeight: "1.4",
            }}
          >
            Guidewire Test Automation.
            <br />
            Solutions, Specially Made For You.
          </h1>
        </div>

        {/* Right Image */}
        <div style={{ flex: 1, textAlign: "right" }}>
          <img
            src="guideherohero.png"
            alt="Placeholder"
            style={{ maxWidth: "100%", height: "auto", maxHeight: "350px" }}
          />
        </div>
      </div>

      {/* Bottom Full-Width Background Section With Text */}
      <div
        style={{
          marginTop: "0px",
          backgroundImage: `url("modern-data-platform-wrapper-banner.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 60px",
          color: "white",
          borderRadius: "0px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "60%" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}>
            ExaRTA – Exavalu's Rapid Test Automation Framework
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
            Exavalu's No-Risk POC to assess your current state and jumpstart your automation
            journey. Partner with us to elevate your Quality Engineering practice. We are committed
            to delivering best-in-class standards, helping you navigate the complexities of
            Guidewire testing with confidence and precision.
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Take A Complementary Maturity Assessment
          </button>
        </div>
      </div>
       <SolutionsSection />
    </div>
  );
};

export default LandingSection;
