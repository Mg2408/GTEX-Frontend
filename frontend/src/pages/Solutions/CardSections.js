import React from "react";
import styled from "styled-components";
import {
    AppstoreAddOutlined,
    FileSearchOutlined,
    ProfileOutlined,
    ThunderboltOutlined,
    ReloadOutlined,
    LineChartOutlined,
} from "@ant-design/icons";
import policyImg from "../../assets/images/images69.jpeg"

// Background image URLs (replace with your actual image paths or imports)
const bgImages = [
    policyImg,
    // claimsImg,
    // billingImg,
    // integrationImg,
    // regressionImg,
    // performanceImg,
];


const solutions = [
    {
        title: "Policy Automation",
        description: "Automate policy validation and lifecycle workflows.",
        icon: <AppstoreAddOutlined style={{ fontSize: "30px", color: "#1890ff" }} />,
    },
    {
        title: "Claims Validation",
        description: "Streamline claims testing with prebuilt scenarios.",
        icon: <FileSearchOutlined style={{ fontSize: "30px", color: "#52c41a" }} />,
    },
    {
        title: "Billing Automation",
        description: "Ensure billing systems are accurate and reliable.",
        icon: <ProfileOutlined style={{ fontSize: "30px", color: "#faad14" }} />,
    },
    {
        title: "Integration Testing",
        description: "Validate third-party integrations confidently.",
        icon: <ThunderboltOutlined style={{ fontSize: "30px", color: "#eb2f96" }} />,
    },
    {
        title: "Regression Suite",
        description: "Deploy regression suites for Guidewire upgrades.",
        icon: <ReloadOutlined style={{ fontSize: "30px", color: "#722ed1" }} />,
    },
    {
        title: "Performance Checks",
        description: "Monitor performance and stability under load.",
        icon: <LineChartOutlined style={{ fontSize: "30px", color: "#13c2c2" }} />,
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
  width: 85%;
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
  padding: 20px 16px 30px;
  text-align: center;
`;

const IconWrapper = styled.div`
  background: #eef1f5;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #2b2b2b;
`;

const Description = styled.p`
  font-size: 14px;
  color: #5a5a5a;
  margin-bottom: 20px;
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
    return (
        <CardsWrapper>
            {solutions.map((item, index) => (
                <Card key={index} bg={bgImages[index % bgImages.length]}>

                    <Overlay>
                        <IconWrapper>{item.icon}</IconWrapper>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <ActionLink>Click Here</ActionLink>
                    </Overlay>
                </Card>
            ))}
        </CardsWrapper>
    );
};

export default SolutionCards;
