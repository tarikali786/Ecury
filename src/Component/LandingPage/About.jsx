import Img1 from "../../assets/img/Group 1000007923.png";

import "./index.css";
const About = () => {
  return (
    <div id="about" className="section about-container">
      <div className="about-leftContent">
        <h2>Company Statement’s</h2>
        <h1>Ensuring Product Authenticity Through QR Code Authentication</h1>
        <p>
          Our mission is to empower individuals and organizations through the
          delivery of innovative solutions and unparalleled services. We are
          dedicated to fostering growth, facilitating learning, and driving
          success in a dynamic and ever-evolving environment.
        </p>
        <p>
          Our vision is to be a preeminent leader in our industry, distinguished
          by our unwavering commitment to excellence, sustainability, and the
          transformative impact we create within the communities we serve. We
          aspire to set the standard for innovation and integrity, shaping a
          better future for all stakeholders.
        </p>
      </div>
      <div className="about-rightContent">
        <img src={Img1} alt="" />
      </div>
    </div>
  );
};

export default About;
