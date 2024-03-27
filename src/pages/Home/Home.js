import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./home.css";
import Fade from "react-reveal/Fade";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import resume from "../../assets/docs/resume.pdf";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };
  return (
    <div
      className="container-fluid home-container"
      id="home"
      // style={{
      //   backgroundImage: `url("https://cdni.iconscout.com/illustration/premium/thumb/programming-concept-woman-programmer-make-site-or-web-interface-project-female-character-website-designer-developer-4539267-3774194.png?f=webp")`,
      //   backgroundPosition: "right",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "dark" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>
      <div className="container home-content">
        <Fade left>
          <h2>Hi👋,I am Rashmi</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer",
                  "Mern Developer",
                  "Data Analysis",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Fade>
        <Fade bottom>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send/send?phone=1234567890"
              rel="noreferrer"
              target="_blank"
            >
              Hire me
            </a>
            {/* <button className="btn btn-hire">Hire me</button> */}
            <a className="btn btn-cv" href={resume} download="Rashmi.pdf">
              My Resume
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
