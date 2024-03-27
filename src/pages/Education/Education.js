import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <div className="education" id="education">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Education</h2>
      <hr />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "linear-gradient(109.6deg, rgb(177, 173, 219) 11.2%, rgb(245, 226, 226) 91.1%)",
            // background:
            //   "linear-gradient(67.6deg, rgb(225, 242, 254) -2.8%, rgb(193, 224, 250) 44.6%, rgb(19, 116, 197) 102.4%)",
            color: "black",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #c4c1e0" }}
          date="2011 - present"
          iconStyle={{ background: "#c4c1e0", color: "black" }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Miami, FL
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background:
              "linear-gradient(109.6deg, rgb(177, 173, 219) 11.2%, rgb(245, 226, 226) 91.1%)",
            // background:
            //   "linear-gradient(67.6deg, rgb(225, 242, 254) -2.8%, rgb(193, 224, 250) 44.6%, rgb(19, 116, 197) 102.4%)",
            color: "black",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #c4c1e0" }}
          date="2011 - present"
          iconStyle={{ background: "#c4c1e0", color: "black" }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle text-black">
            Miami, FL
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
