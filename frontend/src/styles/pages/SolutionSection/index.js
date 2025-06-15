import styled from "styled-components";

export const SolutionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 40px 60px;
  background-color: #f5f5f5;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const IconWrapper = styled.div`
  font-size: 40px;
  margin-top: 40px;
`;

export const CardContent = styled.div`
  padding: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
  }

  p {
    font-size: 14px;
    color: #666666;
    margin-bottom: 20px;
    min-height: 40px;
  }

  button {
    padding: 6px 16px;
    background: transparent;
    color: #1890ff;
    border: 1px solid #1890ff;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background: #1890ff;
      color: #fff;
    }
  }
`;
