import React from "react";
import styled from "styled-components";
import {
  RobotOutlined,         
  BugOutlined,           
  CodeOutlined,           
  ThunderboltOutlined,    
  DashboardOutlined,      
  TeamOutlined,
} from "@ant-design/icons";
import genai from "../../assets/images/GenAi.jpeg"
import defectpattern from "../../assets/images/Defectpattern.jpeg"
import automation from "../../assets/images/Automation.png"
import intelligence from "../../assets/images/Intellegent.jpeg"
import performance from "../../assets/images/performance.jpeg"
import people from "../../assets/images/people.jpeg"

// Background image URLs (replace with your actual image paths or imports)
const bgImages = [
  genai,
  defectpattern,
  automation,
  intelligence,
  performance,
  people,

];

const solutions = [
  {
    title: "GenAI Based Requirements & G-Unit Tests",
    description: "AI-powered requirements and auto-generated G-Unit tests for faster readiness.",
    icon: <RobotOutlined style={{ fontSize: "30px", color: "#1890ff" }} />,
    bgImages: genai,
    action: () => {
      window.open("http://127.0.0.1:5001", "_blank");
    }
  },
  {
    title: "Defect Pattern Analysis",
    description: "Proactively detect and prevent defects with intelligent pattern analysis",
    icon: <BugOutlined style={{ fontSize: "30px", color: "#52c41a" }} />,
    bgImages: defectpattern,
    action: () => {
      window.open("http://127.0.0.1:5002/defect", "_blank");
    }
  },
  {
    title: "BDD Based Test Automation Framework",
    description: "Pre-built BDD packs delivering rapid, scalable Guidewire automation",
    icon: <CodeOutlined style={{ fontSize: "30px", color: "#faad14" }} />,
    bgImages: automation,
    action: () => {
      window.open("http://127.0.0.1:5002/jira", "_blank");
    }
  },
  {
    title: "Intelligent Regression",
    description: "Targeted regression powered by business rule intelligence.",
    icon: <ThunderboltOutlined style={{ fontSize: "30px", color: "#eb2f96" }} />,
    bgImages: intelligence,
    action: () => {
      window.open("http://127.0.0.1:5000", "_blank");
    }
  },
  {
    title: "Performance Drift Detection Utility",
    description: "Early detection of performance issues across releases",
    icon: <DashboardOutlined style={{ fontSize: "30px", color: "#722ed1" }} />,
    bgImages: performance,
    action: () => {
      window.open("http://127.0.0.1:5002/performance", "_blank");
    }
  },
  {
    title: "People and Process - GW Certified SDETs",
    description: "Certified experts ensuring consistent, standards-driven automation.",
    icon: <TeamOutlined style={{ fontSize: "30px", color: "#13c2c2" }} />,
    bgImages: people,
    action: () => {
      window.open("http://127.0.0.1:5002/test", "_blank");
      // Add your navigation logic here for this card
    }
  },
];

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 40px;
  background-image: url("images70.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-items: center;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  height: 390px;
  width: 100%;
  max-width: 350px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const Overlay = styled.div`
  background-color: rgba(255, 255, 255, 0.92);
  position: absolute;
  bottom: 0;
  width: 100%;
  height:60%;
  padding: 5px 16px 30px;
  text-align: center;
`;

const IconWrapper = styled.div`
  background:rgb(190, 218, 255);
  border-radius: 50%;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 0px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #2b2b2b;
`;

const Description = styled.p`
  font-size: 14px;
  color: #5a5a5a;
 
`;

const ActionLink = styled.button`
  background: transparent;
  border: 1.5px solid rgb(100, 53, 53);
  color: rgb(126, 47, 47);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(100, 53, 53);
    color: white;
  }
`;

const SolutionCards = () => {
  return (
    <CardsWrapper >
      {solutions.map((item, index) => (
        <Card key={index} bg={item.bgImages}>
          <Overlay>
            <IconWrapper>{item.icon}</IconWrapper>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            <ActionLink onClick={item.action}>Click Here</ActionLink>
          </Overlay>
        </Card>
      ))}
    </CardsWrapper>
  );
};

export default SolutionCards;