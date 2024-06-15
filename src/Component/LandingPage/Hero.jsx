import Bgimg from "../../assets/img/herobg.png";
import Logo from "../../assets/img/Logo.png";
import Button from "../Common/Button";
import { useState } from "react";
import { Button as AntdButton, Drawer } from "antd";
import MenuIcon from "@mui/icons-material/Menu";


import "./index.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="hero-header">
      <div className="hero-logo-image">
        <img src={Logo} alt="" />
      </div>
      <div className="hero-header-item">
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </nav>
        <div className="MobileMenu">
          <AntdButton onClick={showDrawer} className="mobileMenuIcon">
            <MenuIcon className="menu-icon" />
          </AntdButton>
          <Drawer onClose={onClose} open={open}>
            <div className="mobileMenuItem">
              <a href="#home">Home</a>

              <a href="#about">About</a>

              <a href="#contact ">Contact Us</a>

              <a href="#blog">Blog</a>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <div id="home" className="Hero-component">
      <img src={Bgimg} alt="" className="bgImage" />
      {/* Header */}
      <Header />

      {/* Hero ccontent */}
      <div className="hero-content">
        <h1>Revolutionize Your</h1>
        <h2>Security with QR</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          provident vero dolores laudantium neque quam perspiciatis eaque illo
          culpa commodi. Asperiores perferendis dolores sequi hic nesciunt,
          omnis natus enim! Provident?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          provident vero dolores laudantium neque quam perspiciatis eaque illo
          culpa commodi. Asperiores perferendis dolores sequi hic nesciunt,
          omnis natus enim! Provident?
        </p>
        <Button text="Explore Services" />
      </div>
    </div>
  );
};

export default Hero;
