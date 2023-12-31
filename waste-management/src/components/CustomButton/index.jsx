import { Link } from "react-router-dom";
import styles from "./CustomButton.module.css";

const CustomButton = ({
  onClick,
  containerStyle,
  buttonText,
  disabled,
  buttonLink,
  icon,
  iconRight,
  isLoading = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={!disabled ? ` ${containerStyle}` : `${styles.disabled}`}
      onClick={onClick}
    >
      <Link to={buttonLink}>{buttonText}</Link>
    </button>
  );
};

export default CustomButton;
