import React from "react";
import SolutionsSection from "../pages/Solutions/CardSections";
import { Container } from "../styles/components/Layout";

const LandingSection = () => {
  return (
    <Container>

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
          <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "30px" }}>
            GT- EX  Guidewire Testing - EXavalu
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px" }}>
            Transform your Guidewire testing with our AI-powered, end-to-end automation platform.
            Deliver faster releases, higher quality, and deeper insights with seamless integration across your testing lifecycle.
          </p>
          {/* <button
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
          </button> */}
        </div>
      </div>
      <SolutionsSection />


    </Container>
  );
};

export default LandingSection;
