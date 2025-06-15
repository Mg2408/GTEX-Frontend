import React from "react";
import { Layout } from "antd";
import Header from "../components/Header/Header";
import PrivateFooter from '../components/Footer/PrivateFooter';
import LandingSection from "./LandingSection";





const { Content } = Layout;

const CustomLayout = () => {
  return (
    <Layout
      style={{


        // backgroundImage: "url(" + { bg1.jpg } + ")",// Set the background image
        // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundSize: "100%",
        background: "transparent"


      }}
    >

      <Header />

      <Content
        style={{
          padding: "0px",
          background: "transparent",
          borderRadius: "10px",
          margin: "0px 0",
          flex: 1,
        }}
      >
        <LandingSection />
      </Content>

      <PrivateFooter >
      </PrivateFooter>


    </Layout>
  );
};

export default CustomLayout;
