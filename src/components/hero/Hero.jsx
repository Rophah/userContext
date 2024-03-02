import { useContext } from "react";
import ThemeContext from "../../context/themeContext"
import "./Hero.css";
import heroImg from "../../assets/phone.svg";

const Hero = () => {

  const {theme} = useContext(ThemeContext);
  return (
    <div className="--bgcolor" data-theme= {theme}>
      <div className="container --flex-between hero-height">
        <div className="hero-text">
          <h1>
            Visit villa shop landing page
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, ad! Nulla aliquam enim omnis ad quo doloribus, quia deleniti a quaerat obcaecati reiciendis provident dolor.</p>
          <div className="btn">
            <button className="btn-p">Learn more</button>
            <button className="btn-p-2">Sign up</button>
          </div>  
        </div>
        <div className="hero-Img">
          <img src={heroImg} alt="Landing shop" width={200} />
        </div>
      </div> 
    </div>  
  );
};

export default Hero;
