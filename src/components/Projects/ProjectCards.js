import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai"; // PDF Icon

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="project-img" // Ensure consistent image size
      />
      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>

        {/* GitHub Button */}
        {props.ghLink && props.ghLink !== null && props.ghLink !== "" && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            className="project-card-btn"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Demo Button */}
        {!props.isBlog && props.demoLink && (
          <Button variant="primary" href={props.demoLink} target="_blank" className="project-card-btn">
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}

        {/* PDF Dropdown Button */}
        {props.pdfLinks && props.pdfLinks.length > 0 && (
          <div className="mt-3">
            {props.pdfLinks.map((pdf, index) => (
              <Button
                key={index}
                variant="primary"
                href={pdf.link}
                target="_blank"
                className="project-card-btn"
              >
                <AiOutlineFilePdf /> &nbsp; {pdf.name}
              </Button>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
