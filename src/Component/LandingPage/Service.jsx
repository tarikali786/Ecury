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
      <h1>
        Integrated Product Security Solutions for Diverse Industries Empowering
        Businesses with Comprehensive Ecosystem
      </h1>
      <div className="service-cards">
        <div className="service-card">
          <div className="service-icon">
            <img src={Icon1} alt="" />
          </div>
          <div className="card-content">
            <h3>Serialization</h3>
            <ul>
              <li>
                Implement advanced serialization techniques to ensure product
                traceability and supply chain security
              </li>
              <li>
                Comply with industry regulations, such as the Drug Supply Chain
                Security Act (DSCSA) and the Falsified Medicines Directive
                (FMD), to enhance consumer confidence and protect against
                counterfeiting.
              </li>
            </ul>
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
            <ul>
              <li>
                Utilize cutting-edge technology, such as AI-based digital
                fingerprinting, to safeguard your brand against counterfeiting
                and unauthorized distribution.
              </li>
              <li>
                Protect your intellectual property, maintain brand integrity,
                and reduce the risk of reputational damage.
              </li>
            </ul>
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
            <ul>
              <li>
                From manufacturer to end user, every step in supply chain is
                managed.
              </li>
            </ul>
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
            <ul>
              <li>
                Offer a one-click Batch Recall management system coupled with an
                automated product expiry alert mechanism.
              </li>
            </ul>
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
            <h3>Inventory Control</h3>
            <ul>
              <li>
                Ensure extensive inventory control and management down to the
                unit level for maximum efficiency.
              </li>
            </ul>
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
            <ul>
              <li>
                State of the art Bulk supply coding system with user level
                scanning
              </li>
              <li>
                System prevents unauthorized distribution from bulk supply
                channels and ensures no expired products remains in inventory of
                the client.
              </li>
            </ul>
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
            <h3>Secury Managed Services App</h3>
            <ul>
              <li>
                Manage Supply chain. Engage with customers, build loyalty, and
                drive sales.
              </li>
            </ul>
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
            <h3>AI-Driven Analytics</h3>
            <ul>
              <li>
                Leverage Artificial Intelligence to provide insightful user data
                analytics and Cohort Charts.
              </li>
              
            </ul>
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
