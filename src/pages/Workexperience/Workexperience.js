import React from "react";
import "./Workexperience.css";
import { MdOutlineWorkHistory } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Workexperience = () => {
  return (
    <div className="work" id="work">
      <div className="container work-experience">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work experience
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
              color: "black",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #ffcab0",
            }}
            date="2011 - present"
            iconStyle={{ background: " #ffcab0", color: "black" }}
            icon={<MdOutlineWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(to top, #e6b980 0%, #eacda3 100%)",
              color: "black",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #ffcab0",
            }}
            date="2011 - present"
            iconStyle={{ background: " #ffcab0", color: "black" }}
            icon={<MdOutlineWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Workexperience;
