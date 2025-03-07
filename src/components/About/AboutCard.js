import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple"> Chaymae Dahhassi </span>
            from <span className="purple"> Meknès, Morocco.</span>
            <br />
            <br />
            I am currently working as a <span className="purple"> Data and Process Analyst </span> at GIE AXA and AXA France in Paris.
            <br />
            <br />
            I am also completing my <span className="purple"> MSc in Generalist Engineering </span> at Ecole Centrale Casablanca.
            <br />
            <br />
            Apart from my professional and academic pursuits, here are some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Punch Needle
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Behind every delay, there is a blessing"{" "}
          </p>
          <footer className="blockquote-footer">Arabic proverb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
