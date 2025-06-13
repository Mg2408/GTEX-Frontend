import styled from "styled-components";

export const PrivateFooterbox = styled.div`
  background-color: #1f1f1f;
  padding: 60px 0 20px;
  color: #fff;

  ul {
    list-style: none;
    padding-left: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
      font-size: 14px;

      a {
        color: #ccc;
        text-decoration: none;

        &:hover {
          color: #e1473d;
        }
      }

      b {
        font-weight: 600;
        font-size: 14px;
        display: inline-block;
        margin-top: 10px;
        color: #ffffff;
      }
    }
  }

  .inner-list {
    padding-left: 0;
    li {
      margin-bottom: 5px;
    }
  }

  .footer-contact {
    text-align: left;
    img {
      height: 50px;
      margin-bottom: 10px;
    }
    p {
      margin: 5px 0;
      font-size: 14px;
      color: #ccc;
    }
    .linkedin-icon {
      display: inline-block;
      margin-top: 10px;
      font-size: 22px;
      color: white;

      &:hover {
        color: #e1473d;
      }
    }
  }

  .footer-bottom {
    padding-top: 40px;
    .copyright {
      font-size: 12px;
      color: #fff;
    }
    .red-line {
      width: 100%;
      height: 4px;
      background-color: #e1473d;
      margin-top: 10px;
    }
  }
`;

