import React, { useState } from "react";
import "./MobileNav.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { ImHome } from "react-icons/im";
import { SiAboutdotme } from "react-icons/si";
import { MdEngineering } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { BsProjectorFill } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  //handle
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <MdMenuOpen
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          ) : (
            <MdOutlineMenu
              size={30}
              className="mobile-nav-icon"
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">My portfolio app</span>
        </div>
        {open && (
          <Fade top>
            <div className="mobile-nav-menu">
              <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenu}
                    >
                      <ImHome /> Home
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenu}
                    >
                      <SiAboutdotme /> About
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenu}
                    >
                      <MdCastForEducation /> Education
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="techstack"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenu}
                    >
                      <MdDeveloperMode /> Techstack
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenu}
                    >
                      <BsProjectorFill /> Projects
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="work"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenu}
                    >
                      <MdEngineering /> Work experience
                    </Link>
                  </div>

                  <div className="nav-link">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenu}
                    >
                      <MdContactMail /> Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </>
  );
};

export default MobileNav;
