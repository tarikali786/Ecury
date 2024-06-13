import Img1 from "../../assets/img/Group 1000007923.png";

import "./index.css";
const About = () => {
  return (
    <div id="about" className="section about-container">
      <div className="about-leftContent">
        <h2>About Us</h2>
        <h1>Ensuring Product Authenticity Through QR Code Authentication</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi
          maxime quae perspiciatis officia dolorum, eligendi sit repellendus
          iste corporis cumque tempore recusandae fugit dicta illum. Ipsam culpa
          maiores commodi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          sunt dolores quasi, voluptatem animi dolor cum quos iste temporibus
          delectus illo sequi expedita id officiis? Amet optio recusandae
          repellendus cupiditate?
        </p>
      </div>
      <div className="about-rightContent">
        <img src={Img1} alt="" />
      </div>
    </div>
  );
};

export default About;
