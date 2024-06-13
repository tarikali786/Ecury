import Icon1 from "../../assets/icon/serialization.png";
import Icon2 from "../../assets/icon/Anti-Counterfeiting.png";
import Icon3 from "../../assets/icon/serialization (1).png";
import Icon4 from "../../assets/icon/serialization (2).png";
import Icon5 from "../../assets/icon/serialization (3).png";
import Icon6 from "../../assets/icon/serialization (4).png";
import Icon7 from "../../assets/icon/serialization (5).png";
import Icon8 from "../../assets/icon/serialization (6).png";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <div id="service" className="section service-container">
      <h2>Our Services</h2>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h1>
      <div className="service-cards">
        <div className="service-card">
          <div className="service-icon">
            <img src={Icon1} alt="" />
          </div>
          <div className="card-content">
            <h3>Serialization</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link to="#" className="readMore">
              Read more
            </Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={Icon2} alt="" />
          </div>
          <div className="card-content">
            <h3>Anti-Counterfeiting</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link to="#" className="readMore">
              Read more
            </Link>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={Icon3} alt="" />
          </div>
          <div className="card-content">
            <h3>Track & Trace</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link to="#" className="readMore">
              Read more
            </Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={Icon4} alt="" />
          </div>
          <div className="card-content">
            <h3>Product Recall</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link to="#" className="readMore">
              Read more
            </Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={Icon5} alt="" />
          </div>
          <div className="card-content">
            <h3>Expiry Recall</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link to="#" className="readMore">
              Read more
            </Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={Icon6} alt="" />
          </div>
          <div className="card-content">
            <h3>Institutional Supply Coding</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link to="#" className="readMore">
              Read more
            </Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={Icon7} alt="" />
          </div>
          <div className="card-content">
            <h3>E-Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link to="#" className="readMore">
              Read more
            </Link>
          </div>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <img src={Icon8} alt="" />
          </div>
          <div className="card-content">
            <h3>AI Powered Market Cohort Analytics</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <Link to="#" className="readMore">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
