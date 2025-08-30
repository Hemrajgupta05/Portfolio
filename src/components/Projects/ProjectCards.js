import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";  // Import ButtonGroup for side-by-side buttons
import { BsGithub } from "react-icons/bs";  // Correct import for GitHub icon

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} className="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Button group for GitHub and Live Demo */}
        <ButtonGroup>
          <Button variant="primary" href={props.gLink} target="_blank">
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          
          {/* Only show Live Demo button if the liveDemoLink exists and the project is not a Blog */}
          {props.liveDemoLink && !props.isBlog && (
            <Button
              variant="secondary"
              href={props.liveDemoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}  // Add spacing between buttons
            >
              Live Demo
            </Button>
          )}
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
