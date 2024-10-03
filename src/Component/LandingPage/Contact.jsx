import Img1 from "../../assets/img/771_pixian_ai 1.png";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Input, message } from "antd";
const { TextArea } = Input;
import "./index.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation before submission
    if (
      !formdata.name ||
      !formdata.email ||
      !formdata.mobile ||
      !formdata.message
    ) {
      message.error("Please fill out all fields");
      return;
    }

    try {
      const response = await axios.post(
        "https://admin.secury.ai/api/v1/landing/contact-us/",
        formdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        message.success("Message submitted successfully");
        setFormData({ name: "", email: "", mobile: "", message: "" }); // Clear the form
      } else {
        message.error("Failed to submit the message");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      message.error("An error occurred while submitting the form");
    }
  };

  return (
    <div className="section contact-container" id="contact">
      <h2>Get In Touch</h2>
      <h1>
        Have a question? Reach out to us via email, phone, or the contact form
        below. We’re eager to assist you.
      </h1>
      <div className="contact-box">
        <div className="contact-img">
          <img src={Img1} alt="Contact Us" />
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <Input
                size="large"
                placeholder="Enter Name"
                prefix={<UserOutlined className="iconinput" />}
                className="inputField"
                name="name"
                value={formdata.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email ID</label>
              <Input
                size="large"
                placeholder="Enter Email Id"
                prefix={<MailOutlined className="iconinput" />}
                className="inputField"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Mobile Number</label>
              <Input
                size="large"
                placeholder="Enter Mobile Number"
                prefix={<PhoneOutlined className="iconinput" />}
                className="inputField"
                name="mobile"
                value={formdata.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Message</label>
              <TextArea
                rows={4}
                className="inputField"
                name="message"
                value={formdata.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
