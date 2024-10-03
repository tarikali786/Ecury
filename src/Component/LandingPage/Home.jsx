import Footer from "../Common/Footer";
import About from "./About";
import ChooseUs from "./ChooseUs";
import Contact from "./Contact";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import Service from "./Service";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <ChooseUs />
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      <GetStarted />
      <Contact />
      <Footer />,
    </>
  );
};

export default Home;
