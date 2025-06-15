import React, { useState, useEffect, Children } from "react";
import {
  Avatar,
  Button,
  Grid,
  Menu,
  Popover,
  Space,
  theme,
  Typography,
  Badge,
  Card,
  Modal,
  Radio
} from "antd";
import {
  MenuOutlined,
  CloseCircleOutlined
} from "@ant-design/icons";
import SearchIcon from "../../../src/assets/images/search-icon.png";
import SearchIconDark from "../../../src/assets/images/share.png";
import ProfileIcon from "../../../src/assets/images/profile_img.png";
import novoLogo from '../../../src/assets/images/exavalu.png';
import {
  NavbarHeader,
  Container,
  UserNameStyle,
  AccountManagementButtonStyle,
  CloseButtonStyle,
  AvatarStyle
} from "../../../src/styles/components/Navbar/index";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/svg/home";

import {
  NotificationAlertStyle,
  NotificationStyle,
} from "../../styles/components/Navbar/index";
import useMetaData from "../../context/metaData";
import { BellFilled } from "@ant-design/icons";

import notificationImage from '../../../src/assets/images/notification_popup.png';
import redirect from '../../../src/assets/images/share.png';
const { Text } = Typography;
const { useToken } = theme;
const { useBreakpoint } = Grid;

export default function PrivateNavbar() {
  const { theme } = useMetaData();
  const { token } = useToken();
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState(ProfileIcon);
  const [popOverOpen, setPopOverOpen] = useState(false);
  const [open, setOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMode, setSelectedMode] = useState("light");
  const notifications = 1;

  useEffect(() => {
    setUserImage(ProfileIcon);
  }, []);
  const redirectURL = () => {
    handlePopoverClose();
    navigate("/account-settings");
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  const handlePopoverClose = () => {
    setPopOverOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setPopOverOpen(newOpen);
  };

  const onThemeChange = () => {
    setIsModalOpen(true);
  }

  const content = (
    <div className="user-profile-Modal">
      <div className="profile-iamge">
        <CloseButtonStyle theme={theme}>
          <Button icon={<CloseCircleOutlined />} onClick={handlePopoverClose} />
        </CloseButtonStyle>
        {userImage.length > 0 ? (
          <span className="usericon">
            {" "}
            <img src={userImage} />
          </span>
        ) : (
          <AvatarStyle>
            <Avatar size={90}>MD</Avatar>
          </AvatarStyle>
        )}
      </div>
      <UserNameStyle theme={theme}>
        <Typography.Title level={4}>Michael Doe</Typography.Title>
      </UserNameStyle>
      <AccountManagementButtonStyle theme={theme}>
        <Button shape="round" onClick={redirectURL}>
          <Text>Manage your Account</Text>
        </Button>
      </AccountManagementButtonStyle>

    </div>
  );

  const handleRedirection = () => {
    navigate('/notificationDetails')
    setOpen(false)
  }

  const handleNotificationOpen = (newOpen) => {
    setOpen(newOpen)
  }

  const notificationContent = (

    <div>
      <img className="image" src={notificationImage}></img>
      <p className={`${theme === 'dark' ? 'sigin-title-dark' : 'sigin-title'}`}>Tasks/Notifications <a onClick={() => handleRedirection()}><img src={redirect} /></a></p>
      <Card className="notification-card">

      </Card>
    </div>
  )

  const menuItems = [
    {
      key: "home",
      icon: <HomeIcon />,
    },
    {
      key: "dashboard",

      label: "ABOUT US"
    },
    {
      key: "accountdashboard",

      label: "WHAT WE DO"
    },
    {
      key: "accountinfo",

      label: "CLIENT STORIES"
    },
    {
      key: "resources",

      label: "RESOURSES"
    },
    {
      key: "careers",

      label: "CAREERS"
    },
    {
      key: "contactus",

      label: "CONTACT US"
    },

  ];


  const [current, setCurrent] = useState("projects");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);

    if (e.key == 'dashboard' || e.key == 'home') {
      navigate('/');
    } else if (e.key == 'commercialProperty') {
      navigate('/commercialProperty');
    }
    else if (e.key == 'vacantBuildings') {
      navigate('/vacantBuildings');
    } else if (e.key == 'flood') {
      navigate('/flood');
    }
  };

  const styles = {
    headercard: {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      margin: "0 auto",
      maxWidth: token.screenXL,
      // padding: screens.md ? `0px ${token.paddingLG}px` : `0px ${token.padding}px`
    },
    menu: {
      backgroundColor: "transparent",
      borderBottom: "none",
      marginLeft: screens.md ? "0px" : `-${token.size}px`,
      width: screens.lg ? "inherit" : token.sizeXXL,
    },
    menuContainer: {
      alignItems: "center",
      display: "flex",
      gap: token.size,
      width: "100%",
    },
  };

  const handleOk = () => {
    setIsModalOpen(false);
    localStorage.setItem('theme', selectedMode);
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setSelectedMode(e.target.value);
  };

  return (
    <NavbarHeader theme={theme}>
      <Container>
        <nav>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ flex: '0 0 auto' }}>
              <a href="#">
                <img src={novoLogo} alt="logo" style={{height:"50px"}} />
              </a>
            </div>
            <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>
              <Menu
                style={styles.menu}
                mode="horizontal"
                items={menuItems}
                onClick={onClick}
                selectedKeys={[current]}
                overflowedIndicator={
                  <Button
                    color="#fff"
                    type="text"
                    icon={<MenuOutlined style={{ color: theme === 'dark' ? "#fff" : "#000" }} />}
                  />
                }
              />
            </div>

            <Space>
              <div
                className="search-box search"

              >
                <div className="search-feild">
                  <span className="search-icons">
                    {
                      theme === 'dark' ? <img src={SearchIconDark} /> : <img src={SearchIcon} />
                    }

                  </span>

                  <input type="text" placeholder="Search" />
                </div>
                <Popover theme={theme}
                  onOpenChange={handleOpenChange}
                  open={popOverOpen}
                  placement="bottom"
                  content={content}
                  trigger="click"
                  // overlayClassName="custom-pophover-dark"
                  overlayClassName={theme === 'dark' ? 'custom-pophover-dark' : 'custom-pophover'}
                >
                  <span style={{ cursor: "pointer" }}>
                    {userImage.length > 0 ? (
                      <span className="usericon">
                        {" "}
                        <img src={userImage} />
                      </span>
                    ) : (
                      <Avatar size={30}>MD</Avatar>
                    )}
                  </span>
                </Popover>
              </div>
            </Space>
            <Popover
              onOpenChange={handleNotificationOpen}
              open={open}
              placement="bottom"
              content={notificationContent}
              trigger="click"
              overlayStyle={{
                height: 150,
                maxWidth: 450,
                padding: 0,
              }}
              overlayClassName={theme === 'dark' ? 'custom-pophover-dark-notification' : ''}
            >
              {
                notifications == 0 ? (
                  <NotificationStyle>
                    <Button shape="circle" icon={<BellFilled />} />
                  </NotificationStyle>
                ) : <>

                  <NotificationAlertStyle>
                    <Badge count={notifications} size="small" offset={[-6, 7]}>
                      <Button shape="circle" icon={<BellFilled />} />
                    </Badge>
                  </NotificationAlertStyle>
                </>
              }
            </Popover>
          </div>
        </nav>
      </Container>
      <Modal
        title="Dark mode"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <Radio.Group onChange={handleChange} value={selectedMode}>
          <Radio.Button value="light">
            <span role="img" aria-label="Light">
              ☀️
            </span>{" "}
            Light
          </Radio.Button>
          <Radio.Button value="dark">
            <span role="img" aria-label="Dark">
              🌙
            </span>{" "}
            Dark
          </Radio.Button>
        </Radio.Group>
      </Modal>
    </NavbarHeader>
  );
}