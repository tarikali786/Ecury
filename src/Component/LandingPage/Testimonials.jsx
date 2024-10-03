import Img1 from "../../assets/img/Ellipse 15.png";
import icon1 from "../../assets/icon/Group 77.png";

const Testimonials = () => {
  return (
    <div className="section testimonial-container" id="blog">
      {/* <h2>Testimonials</h2> */}
      <h1>What Our Clients Say</h1>
      <div className="testimonial-cards">
        {[1, 2, 3, 4, 5].map((item) => (
          <div className="testimonial-box" key={item}>
            <div className="user-details">
              <div>
                <img src={Img1} alt="" />
              </div>
              <p>Jhon Cham</p>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              adipisci sunt repudiandae, soluta voluptatum unde in dolor,
              tenetur perferendis possimus quis impedit similique velit
              molestiae, autem voluptate excepturi odio nostrum. user-details
            </p>

            <div className="icon-container">
              {[1, 2, 3, 4, 5].map((item) => (
                <img src={icon1} alt="" key={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
