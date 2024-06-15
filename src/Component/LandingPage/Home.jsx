import Footer from "../Common/Footer";
import About from "./About";
import ChooseUs from "./ChooseUs";
import Contact from "./Contact";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import Service from "./Service";
import Testimonials from "./Testimonials";
import { BackTop } from "antd";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <GetStarted />
      <Contact />
      <Footer />
      <div>
        <BackTop duration={100} className="backtoTop"/>
      </div>
      ,
    </>
  );
};

export default Home;
