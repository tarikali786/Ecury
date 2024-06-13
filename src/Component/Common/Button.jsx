import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./button.css";
const Button = ({ text, arrow }) => {
  return (
    <div className="button">
      {text}
      {arrow && <ArrowForwardIosIcon />}
    </div>
  );
};

export default Button;
