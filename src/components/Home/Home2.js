import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME INTRODUCE MYSELF
            </h1>
            <p className="home-about-body">
              I am a generalist engineering student specializing in Modeling and 
              Decision Support at
              <i>
                <b className="purple"> École Centrale Casablanca </b>
              </i>
              , with hands-on experience in
              <i>
                <b className="purple"> data science </b>,
                <b className="purple"> Machine Learning </b> 
              </i>
              , and
              <i>
                <b className="purple"> engineering solutions </b>.
              </i>
              <br />
              <br />Through internships at 
              <i>
                <b className="purple"> AXA Group </b>
              </i>
              , a global leader in insurance and asset management, and
              <i>
                <b className="purple"> OCP Group </b>
              </i>
              , the world’s first and largest exporter of phosphates and derivatives, I’ve developed 
              predictive models, explored generative AI workflows, and created impactful data-driven tools.
              <br />
              <br />
              I am passionate about transforming raw data into compelling stories, uncovering valuable 
              insights, and driving innovative solutions through 
              <i>
                <b className="purple"> data analytics </b>
              </i>
              and 
              <i>
                <b className="purple"> machine learning. </b>
              </i>
              <br />
              <br />
              Whenever possible, I seize opportunities to broaden my expertise by pursuing certifications
               and learning new technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img 
                src={myImg} 
                alt="Avatar" 
                style={{ width: '220px', height: '220px', objectFit: 'cover' }} 
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>FIND ME ON</h2>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CHAYMAE2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chaymae~dahhassi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/*<li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>*/}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
