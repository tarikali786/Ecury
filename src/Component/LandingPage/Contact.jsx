import Img1 from "../../assets/img/771_pixian_ai 1.png";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { TextArea } = Input;
import "./index.css";
const Contact = () => {
  return (
    <div className="section contact-container" id="contact">
      <h2>Get In Touch</h2>
      <h1>
        Have a question? Reach out to us via email, phone, or the contact form
        below. We’re eager to asssist you
      </h1>
      <div className="contact-box">
        <div className="contact-img">
          <img src={Img1} alt="" />
        </div>
        <div className="contact-form">
          <div>
            <label>Name</label>
            <Input
              size="large"
              placeholder="Enter Name"
              prefix={<UserOutlined className="iconinput" />}
              className="inputField"
            />
          </div>
          <div>
            <label>Eamil ID</label>
            <Input
              size="large"
              placeholder="Enter  Email Id"
              prefix={<MailOutlined className="iconinput" />}
              className="inputField"
            />
          </div>
          <div>
            <label>Message</label>

            <TextArea rows={4} className="inputField" />
          </div>
          <button type="submit" className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
