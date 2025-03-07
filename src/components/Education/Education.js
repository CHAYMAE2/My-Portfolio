import React from "react";
import VerticalTimeline from "./VerticalTimeline";
import VerticalTimelineElement from "./VerticalTimelineElement";
import './VerticalTimeline.css';
import './VerticalTimelineElement.css';
import { IoMdSchool } from "react-icons/io";



function Education() {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  hsl(283, 91.30%, 45.10%)' }}
    date="Jan 2024 - July 2024"
    iconStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h4 className="vertical-timeline-element-title">Ecole Centrale de Lyon | exchange semester </h4>
    <h4 className="vertical-timeline-element-subtitle">Lyon, France</h4>
    <p>
    Main courses: Image Processing and Computer Vision, AI and Algorithms, Georgraphical Information Systems (QGIS)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  hsl(283, 91.30%, 45.10%)' }}
    date="2022 - 2026"
    iconStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h4 className="vertical-timeline-element-title">Ecole Centrale Casablanca | Master of Science</h4>
    <h4 className="vertical-timeline-element-subtitle">Casablanca, Morocco</h4>
    <p>
    Main courses: Mathematics, Probabilities, Statistics, Machine Learning, Graph theory, Humanities and Social Sciences, Sociology, Corporate Social Responsibility, Sustainable Development, Economics, Project Management.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  hsl(283, 91.30%, 45.10%)' }}
    date="2020 - 2022"
    iconStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h4 className="vertical-timeline-element-title"> CPGE Lycée Omar Ibn Lkhattab| MPSI-MP </h4>
    <h4 className="vertical-timeline-element-subtitle">Meknès, Morocco</h4>
    <p>
    Intensive 2-year undergraduate program in maths, physics and computer science.   
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  hsl(283, 91.30%, 45.10%)' }}
    date="2019 - 2020"
    iconStyle={{ background: 'hsl(283, 91.30%, 45.10%)', color: '#fff' }}
    icon={<IoMdSchool />}
  >
    <h4 className="vertical-timeline-element-title"> Lycée Emile | High School Diploma </h4>
    <h4 className="vertical-timeline-element-subtitle">Meknès, Morocco</h4>
    <p>
      Mathematics and Physics. Grade: with high honors
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
  );
}

export default Education;