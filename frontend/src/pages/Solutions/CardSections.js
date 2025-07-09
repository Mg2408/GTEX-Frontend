import React from "react";
import styled from "styled-components";
import {
  RobotOutlined,         
  BugOutlined,           
  CodeOutlined,           
  ThunderboltOutlined,    
  DashboardOutlined,      
  TeamOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import genai from "../../assets/images/GenAi.jpeg"
import defectpattern from "../../assets/images/Defectpattern.jpeg"
import automation from "../../assets/images/Automation.png"
import intelligence from "../../assets/images/Intellegent.jpeg"
import performance from "../../assets/images/performance.jpeg"
import people from "../../assets/images/people.jpeg"
import requirements from "../../assets/images/requirements.jpg"
import dashboard from "../../assets/images/dashboardbg2.jpg"

// Background image URLs (replace with your actual image paths or imports)
const bgImages = [
  genai,
  defectpattern,
  automation,
  intelligence,
  performance,
  people,
  requirements,
  dashboard

];

const solutions = [
  {
    title: "GenAI Based G-Unit Tests",
    description: "AI-powered requirements and auto-generated G-Unit tests for faster readiness",
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
    title: "GenAI BDD Assistant",
    description: "Automatically converts business requirements into structured BDD scenarios for rapid test automation",
    icon: <ExperimentOutlined style={{ fontSize: "30px", color: "#faad14" }} />,
    bgImages: requirements,
    action: () => {
      window.open("http://127.0.0.1:5002/jira", "_blank");
    }
  },
  {
    title: "Intelligent Regression",
    description: "Targeted regression powered by business rule intelligence",
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
    title: "AI-Powered Test Data Creation",
    description: "Smart test data generation tailored to business context, reducing manual effort and boosting coverage",
    icon: <TeamOutlined style={{ fontSize: "30px", color: "#13c2c2" }} />,
    bgImages: people,
    action: () => {
      window.open("http://127.0.0.1:5002/test", "_blank");
      // Add your navigation logic here for this card
    }
  },
   {
    title: "Guidewire Test Automation Solution",
    description: "Accelerate testing with a modular, enterprise-ready framework tailored for Guidewire",
    icon: <CodeOutlined style={{ fontSize: "30px", color: "#faad14" }} />,
    bgImages: automation,
    action: () => {
      window.open("https://www.exavalu.com/guidewire-test-automation-solution/", "_blank");
    }
  },
   {
    title: "Dashboard",
    description: "A visual display of important information, metrics, and key performance indicators, designed to provide a quick overview of a specific area or process",
    icon: <CodeOutlined style={{ fontSize: "30px", color: "#faad14" }} />,
    bgImages: dashboard,
    action: () => {
      window.open("https://www.exavalu.com/guidewire-test-automation-solution/", "_blank");
    }
  },
];

const CardsWrapper = styled.div`
  padding: 40px;
  background-image: url("images70.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-items: center;
  width: 100%;
  max-width: 1400px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SecondRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-items: center;
  width: 100%;
  max-width: 1400px;

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
  height: 400px;
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
  height: 60%;
  padding: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  background: rgb(190, 218, 255);
  border-radius: 50%;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0px;
  flex-shrink: 0;
`;



const Title = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #2b2b2b;
  margin: 6px 0 8px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #5a5a5a;
  margin: 5px 0;
`;


const ActionLink = styled.button`
  background: transparent;
  border: 1.5px solid rgb(100, 53, 53);
  color: rgb(126, 47, 47);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(100, 53, 53);
    color: white;
  }
`;


const SolutionCards = () => {
  // Split solutions into first 4 and remaining 3
  const firstRowSolutions = solutions.slice(0, 4);
  const secondRowSolutions = solutions.slice(4, 8);
  
  return (
    <CardsWrapper>
      <FirstRow>
        {firstRowSolutions.map((item, index) => (
          <Card key={index} bg={item.bgImages}>
            <Overlay>
              <IconWrapper>{item.icon}</IconWrapper>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <ActionLink onClick={item.action}>Click Here</ActionLink>
            </Overlay>
          </Card>
        ))}
      </FirstRow>
      
      <SecondRow>
        {secondRowSolutions.map((item, index) => (
          <Card key={index + 4} bg={item.bgImages}>
            <Overlay>
              <IconWrapper>{item.icon}</IconWrapper>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <ActionLink onClick={item.action}>Click Here</ActionLink>
            </Overlay>
          </Card>
        ))}
      </SecondRow>
    </CardsWrapper>
  );
};

export default SolutionCards;