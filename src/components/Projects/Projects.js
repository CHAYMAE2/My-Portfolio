import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cnn from "../../Assets/Projects/cnn.png";
import cars from "../../Assets/Projects/cars.png";
import qgis from "../../Assets/Projects/qgis_project.png";
import climate from "../../Assets/Projects/climate.png";
import DL from "../../Assets/Projects/DL.png";
import jurisinnov from "../../Assets/Projects/jurisinnov.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Old and Recent Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are some projects I've worked on, individually or in a team.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={DL}
              isBlog={false}
              title="Deep Learning and Neural Networks - Ecole Centrale de Lyon"
              description="This group project explores Deep Learning (DL), covering its fundamentals, architectures, training techniques, and applications. It highlights DL's impact in fields like healthcare, finance, automotive, and robotics, showcasing its potential to solve real-world problems."
              ghLink={null}
              pdfLinks={[
                { name: "Project Report", link: "/report_DL_ecl.pdf" },
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={qgis}
              isBlog={false}
              title="Industrial risks in Bas Rhin - Geographical Information Systems - Ecole Centrale de Lyon"
              description="The aim of this group project is to leverage geographic information systems to examine industrial risks within the Bas-Rhin region and to discover solutions to our central question: What strategies are implemented to effectively minimise the risks induced by the presence of Seveso-classified sites in the region Bas-Rhin?. All the maps were made by us using QGIS"
              pdfLinks={[
                { name: "Project Report", link: "/report_ecl.pdf" },
                { name: "Project Presentation", link: "/Industrial risks in Bas Rhin.pptx" },
              ]}            
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={jurisinnov}
              isBlog={false}
              title="Asynchronous Architecture for Medical Records Processing and Metadata Retrieval"
              description="This technology was developed by the SANAMED startup to streamline medical record management using asynchronous architecture, optimizing processing efficiency and metadata retrieval. We transferred this technology to the legal field to process jurisprudence data in Morocco. By applying the same principles, we’ve enhanced document management, streamlined workflows, and improved access to critical information, helping legal professionals with research, case preparation, and decision-making."
              ghLink={null}
              pdfLinks={[
                { name: "Executive Summary", link: "/Executive Summary GRP4.pdf" },
                { name: "Cahier des Charges", link: "/CAHIER DE CHARGE GRP4.pdf" },
                { name: "Poster", link: "/POSTER GRP4.pdf" }
              ]}
            />
          </Col>
          

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={climate}
              isBlog={false}
              title="Impact of Climate Risks in Morocco - Ecole Centrale Casablanca"
              description="This projet involves studying and assessing the various effects of climate change on the environment, economy, and society in Morocco, which includes analyzing the impact of rising temperatures and changes in precipitation patterns on sectors such as agriculture, water resources, infrastructure, and public health. It seeks to contribute to the understanding of climate change impacts in Morocco and to inform decision-making processes for sustainable development and climate resilience."
              pdfLinks={[
                { name: "Project Report", link: "/projet_scientifique.pdf" },
              ]}
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cars}
              isBlog={false}
              title="Adaptive Traffic Light System - SmartCross"
              description="This project tackles traffic congestion in Dakar by developing an adaptive traffic light system that dynamically adjusts signal durations based on real-time vehicle detection. Using Raspberry Pi, cameras, and Python, the system leverages YOLOv8 for accurate car detection via computer vision. Additionally, ultrasonic sensors enhance reliability in low-visibility conditions, ensuring continuous traffic monitoring and optimization."
              pdfLinks={[
                { name: "Project Report", link: "/Rap_PLBD_Groupe12_Smartcross.pdf" },
                { name: "Poster", link: "/Poster_groupe12_juin2023.pdf" }
              ]}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={cnn}
              isBlog={false}
              title="Breast Cancer Classification using CNN"
              description="This project involves preprocessing and augmenting image data, designing a CNN to classify images as benign or malignant, and evaluating performance using accuracy, precision, recall, and F1 score."
              pdfLinks={[
                { name: "Project Presentation", link: "/rapport_tipe.pdf" },
              ]} 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
