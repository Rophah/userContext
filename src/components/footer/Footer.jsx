import { useContext } from "react";
import ThemeContext from "../../context/themeContext"
import "./Footer.css";

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <footer data-theme={theme}>
      <p className="footer-text">Copyright &copy; 2023 </p>
    </footer>
  );
};

export default Footer;
