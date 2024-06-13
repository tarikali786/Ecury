import Logo from "../../assets/img/Logo.png";
import PlayStore from "../../assets/img/Group (4).png";
import AppleStore from "../../assets/img/App Store.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import CallIcon from "@mui/icons-material/Call";
import "./footer.css";

const Footer = () => {
  return (
    <div className="section footer-container">
      <img src={Logo} alt="" />
      <div className="footer-cards">
        <div className="footer-card">
          <h2>About Secury</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id
            numquam vel nulla expedita provident iusto!
          </p>
          <div className="socialIcon">
            <a href="#" target="_blank">
              <FacebookRoundedIcon />
            </a>
            <a href="#" target="_blank">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank">
              <XIcon />
            </a>
            <a href="#" target="_blank">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="footer-card">
          <h2>Quick Link</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Our Privacy</p>
          <p>Our Team</p>
        </div>
        <div className="footer-card">
          <h2>Contact</h2>
          <p>
            <LocationOnIcon className="locationIcon" /> xyz location
          </p>
          <p>
            <EmailIcon className="locationIcon" />
            securyai@gmail.com
          </p>
          <p>
            <CallIcon className="locationIcon" />
            9085527881
          </p>
        </div>
        <div className="footer-card">
          <h2>Get Our App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id
          </p>
          <img src={PlayStore} alt="" className="appPlaystore" /> <br />
          <img src={AppleStore} alt="" className="appPlaystore" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
