import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import atmImg from "../../Assets/Projects/atm.png"; // ✅ Image path correct

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Project</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a project I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atmImg}
              isBlog={false}
              title="ATM Management System"
              description="A simple ATM simulation project developed in Java. It includes functionalities like account creation, cash withdrawal, balance inquiry, and PIN verification. Built using object-oriented programming principles."
              ghLink="https://github.com/Hemrajgupta05/ATM_Management_System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
