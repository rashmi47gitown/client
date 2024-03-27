import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <div className="container project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a odit
        ab, eligendi cupiditate, minima quasi excepturi modi et quo delectus,
        iusto dolor atque aliquam aspernatur eveniet! Ipsam eum nobis omnis id
        voluptatibus quas eos maxime ipsum facere numquam, voluptate qui et
        animi doloribus nulla eius molestiae unde tempore ad
      </p>
      {/* card design */}
      <div className="row" id="ads">
        <Fade top>
          <div className="col-md-4">
            <div className="card rounded">
              <div card-image>
                <span className="card-notify-badge">Full Stack</span>
                <img src="project1.jpg" alt="Project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase">Weather webapp</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://weather-app-beta-beige.vercel.app/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade top>
          <div className="col-md-4">
            <div className="card rounded">
              <div card-image>
                <span className="card-notify-badge">Full Stack</span>
                <img src="portfolio.jpg" alt="Project2" />
                {/* <img src="project1.png" alt="Project 1" /> */}
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Bootstrap</span>
              </div>
              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase">Portfolio website</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://rashmi-portfolio-site.netlify.app/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </Fade>

        <Fade top>
          <div className="col-md-4">
            <div className="card rounded">
              <div card-image>
                <span className="card-notify-badge">Full Stack</span>
                <img
                  src="https://reactjsexample.com/content/images/2020/04/WEATHER-APP.png"
                  alt="Project1"
                />
                {/* <img src="project1.png" alt="Project 1" /> */}
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase">Weather webapp</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://weather-app-beta-beige.vercel.app/"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
