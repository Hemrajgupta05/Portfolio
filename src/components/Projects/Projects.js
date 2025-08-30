import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import atmImg from "../../Assets/Projects/atm.png"; // Your ATM project image
import techMartImg from "../../Assets/Projects/TechMart.png"; // Your TechMart image

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="loading...">
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
              description="A simple ATM simulation project developed in Java. It includes functionalities like account management, withdrawals, and balance check."
              gLink="https://github.com/Hemrajgupta05/ATM-Management_System"
              liveDemoLink={null} // No live demo for this one, set it to null
            />
          </Col>

          {/* New TechMart Project Card */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techMartImg}  // Path to your TechMart image
              isBlog={false}
              title="TechMart - E-Commerce Platform"
              description="A modern e-commerce platform built using React.js and deployed on Vercel. It features an attractive header design and responsive UI."
              gLink="https://github.com/Hemrajgupta05/TechMart"  // Link to your GitHub
              liveDemoLink="https://tech-mart-puce.vercel.app" // Link to your live demo
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
