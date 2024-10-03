import Img1 from "../../assets/img/unsplash_0E_vhMVqL9g.png";
import Button from "../Common/Button";
import "./index.css";
const GetStarted = () => {
  return (
    <div className="section gestarted-container">
      <img src={Img1} alt="" />
      <h2>Experience Authenticity Reinforced by Advanced AI Technology</h2>
      <p>Secure, seamless and intuitive product verification</p>
      <Button text="Get Started" link={"https://secury.ai "} />
    </div>
  );
};

export default GetStarted;
