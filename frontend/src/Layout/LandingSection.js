import React from "react";
import SolutionsSection from "../pages/Solutions/CardSections";
import { Container } from "../styles/components/Layout";

const LandingSection = () => {
  return (
    <Container>

      {/* Top Section: Text + Right Image */}
      <div
        style={{
          padding: "40px 60px",
          background: "#ffffff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left Text */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 700,
              marginBottom: "10px",
              lineHeight: "1.5",
              color: "#1a1a1a",
            }}
          >
            GT- EX
            <br />
            <span style={{ fontWeight: 600 }}>
              Guidewire Testing - EXavalu
            </span>
          </h1>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.6",
              color: "#444",
              marginTop: "10px",
              maxWidth: "800px",
            }}
          >
            Transform your Guidewire testing with our AI-powered, end-to-end automation platform.
            Deliver faster releases, higher quality, and deeper insights with seamless integration
            across your testing lifecycle.
          </p>
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
        <div style={{ maxWidth: "80%" }}>

          <p style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "10px" }}>
            In the fast-paced world of insurance platforms like Guidewire, testing often becomes the bottleneck. As product features evolve rapidly and business rules shift, QA teams struggle to keep up with manual test creation, bulky regression cycles, and late-stage defect detection. These challenges not only slow down delivery but also increase risk to quality and compliance. We saw a clear need for a smarter, more streamlined approach — one built specifically for the realities of Guidewire environments.

            That’s why we built our GT- EX Platform — a purpose-built suite of tools that blends GenAI, BDD automation, and predictive analytics into a single powerful solution. Whether it’s auto-generating G-Unit tests from business requirements, identifying hidden defect patterns, pinpointing regression scope using business rules, or detecting performance drift before it hits production — our platform gives QA teams the speed, accuracy, and confidence they need.

            More than just tools, this platform brings together certified Guidewire SDETs, built-in best practices, and seamless integration across testing stages. The result? Shorter cycles, fewer defects, and a dramatically more efficient path to high-quality Guidewire releases.
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
