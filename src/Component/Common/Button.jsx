import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./button.css";
import { Link } from "react-router-dom";
const Button = ({ text, arrow, link }) => {
  return (
    <Link className="button" to={link}>
      {text}
      {arrow && <ArrowForwardIosIcon />}
    </Link>
  );
};

export default Button;
