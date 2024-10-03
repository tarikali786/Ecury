import Bgimg from "../../assets/img/herobg.png";
import Logo from "../../assets/img/logoScury.png";
import Button from "../Common/Button";
import { useState } from "react";
import { Button as AntdButton, Drawer } from "antd";
import MenuIcon from "@mui/icons-material/Menu";
import { BackTop } from "antd";

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
        <h1>Revolutionize Your Product Security </h1>
        <h2>With Advance Secury Ecosystem</h2>
        <p>
          In an era where counterfeiting presents substantial challenges across
          diverse sectors such as Pharmaceuticals, FMCG, Capital Goods, and
          Luxury Goods, our innovative platform delivers a sophisticated,
          layered security architecture. This multi-tiered approach to security
          is meticulously designed to safeguard each aspect of the product
          lifecycle. Our app-based closed ecosystem not only facilitates
          comprehensive product serialization but also ensures the utmost
          authenticity and integrity throughout the supply chain, empowering
          businesses to confidently combat counterfeiting threats and many other
          challenges as smooth scan and go supply chain management, Batch
          recall, customer connect and more..
        </p>
        <Button text="Explore Services" />
      </div>
      <div>
        <BackTop duration={100} className="backtoTop" />
      </div>
    </div>
  );
};

export default Hero;
