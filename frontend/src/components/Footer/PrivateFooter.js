import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/pages/login';
import novoLogo from '../../assets/images/exavalu_white1.png';
import { PrivateFooterbox } from '../../styles/components/Footer';
import { LinkedinOutlined } from '@ant-design/icons';
import useMetaData from "../../context/metaData";

const PrivateFooter = () => {
  const { theme } = useMetaData();

  return (
    <PrivateFooterbox theme={theme}>
      <Container>
        <Row gutter={32}>
          <Col md={4} sm={12} xs={24}>
            <ul>
              <li><a>HOME</a></li>
              <li><a>INSIGHTS</a></li>
              <li><a>NEWS & EVENTS</a></li>
              <li><a>CAREERS</a></li>
              <li><a>CONTACT US</a></li>
            </ul>
          </Col>

          <Col md={4} sm={12} xs={24}>
            <ul>
              <li><b>WHO WE ARE</b></li>
              <li><a>Company Overview</a></li>
              <li><a>Leadership Team</a></li>
            </ul>
          </Col>

          <Col md={6} sm={24} xs={24}>
            <ul>
              <li><b>WHAT WE DO</b></li>
              <li><b>Industry Expertise</b></li>
              <li><a>- Insurance</a></li>
              <li><a>- Banking & Financial Services</a></li>
              <li><a>- Healthcare & Life Sciences</a></li>
              <li><b>Service Offerings</b></li>
              <li><a>- Business & Technology Strategy</a></li>
              <li><a>- Technology Solutions</a></li>
              <li><a>- Innovation</a></li>
              <li><a>- Privacy & Compliance Solutions</a></li>
            </ul>
          </Col>

          <Col md={4} sm={24} xs={24}>
            <ul className="partners-list">
              <li><b>PARTNERS</b></li>
              <Row gutter={[8, 4]}>
                <Col span={12}>
                  <ul className="inner-list">
                    <li><a>Guidewire</a></li>
                    <li><a>MuleSoft</a></li>
                    <li><a>PegaSystems</a></li>
                    <li><a>Appian</a></li>
                    <li><a>AWS</a></li>
                  </ul>
                </Col>
                <Col span={12}>
                  <ul className="inner-list">
                    <li><a>Socotra</a></li>
                    <li><a>Salesforce</a></li>
                    <li><a>OneTrust</a></li>
                    <li><a>UiPath</a></li>
                  </ul>
                </Col>
              </Row>
            </ul>
          </Col>

          <Col md={6} sm={24} xs={24} className="footer-contact">
            <img src={novoLogo} alt="logo" />
            <p><strong>+1- 888-EXAVALU (888-392-8258)</strong></p>
            <p>info@exavalu.com</p>
            <a className="linkedin-icon" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined />
            </a>
          </Col>
        </Row>

        <Row justify="space-between" align="middle" className="footer-bottom">
          <Col xs={24} sm={12}>
            <p className="copyright">
              ©2025 www.exavalu.com All Rights Reserved.
            </p>
          </Col>
          <Col xs={24} sm={12}>
            <div className="red-line" />
          </Col>
        </Row>
      </Container>

    </PrivateFooterbox>
  );
};

export default PrivateFooter;
