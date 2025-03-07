import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import PowerBIIcon from "../../Assets/icons/powerbi.svg";
import TableauIcon from "../../Assets/icons/tableau.svg";
import ColabIcon from "../../Assets/icons/colab.svg";
import OfficeIcon from "../../Assets/icons/office.svg";
import QGISIcon from "../../Assets/icons/qgis.svg";


function renderTooltip(name) {
  return <Tooltip>{name}</Tooltip>;
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("VS Code")}>
          <span>
            <SiVisualstudiocode size={50} />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Google Colab")}>
          <img 
            src={ColabIcon} 
            alt="Colab" 
            className="custom-icon" 
            style={{ width: '70px', height: '70px', objectFit: 'cover' }}   
          />
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Power BI")}>
          <img 
            src={PowerBIIcon} 
            alt="Power BI" 
            className="custom-icon" 
            style={{ width: '70px', height: '70px', objectFit: 'cover' }}   
          />
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Tableau")}>
          <img 
            src={TableauIcon} 
            alt="Tableau" 
            className="custom-icon" 
            style={{ width: '70px', height: '70px', objectFit: 'cover' }}   
          />
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("Microsoft Office")}>
          <img 
            src={OfficeIcon} 
            alt="Office" 
            className="custom-icon" 
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}   
          />
        </OverlayTrigger>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <OverlayTrigger placement="top" overlay={renderTooltip("QGIS")}>
          <img 
            src={QGISIcon} 
            alt="QGIS" 
            className="custom-icon" 
            style={{ width: '70px', height: '70px', objectFit: 'cover' }}   
          />
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;
