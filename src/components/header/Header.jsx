import { useContext } from "react";
import ThemeContext from "../../context/themeContext"
import "./Header.css";
import { FaMoon, FaSun } from "react-icons/fa";
import logoImg from "../../assets/logo.png"

const Header = () => {

  const {theme ,ToggleTheme, changeBkg} = useContext(ThemeContext);
 
  return (
    <header data-theme={theme}>
      <div className="container --flex-between">
        <div className="imgVilla">
          <img src={logoImg} alt="Logo" width={170}/>  
        </div>
        <ul className="--flex-between">
          <li className="--menu">Home</li>
          <li className="--foreground --menu">About</li>
        </ul>
        
        <div onClick={ToggleTheme}>
          <div className="button">
            <FaMoon className="moon positioning" size={15}/>
            <FaSun className="sun positioning" size={15}/>
            <div className={changeBkg ? "ball move" : "ball"}></div>
          </div>
        </div> 
      </div>
      
    </header>
  );
};

export default Header;
