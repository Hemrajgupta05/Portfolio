import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ textAlign: "justify" }}>
          <p>
            Hi Everyone, I am <span className="purple">Hemraj Gupta</span> from{" "}
            <span className="purple">Mumbai, India.</span>
            <br />
            I am currently a passionate individual eager to start a career in software development and data analysis, actively seeking opportunities to apply and grow my skills.
            <br />
            I have completed MCA and am enthusiastic about leveraging technology to solve real-world problems.
            <br />
            <br />
            Apart from coding, I enjoy exploring new technologies and building projects to sharpen my skills.
          </p>

          <ul style={{ paddingLeft: "20px" }}>
            <li>
              <ImPointRight /> Learning Software Development
            </li>
            <li>
              <ImPointRight /> Exploring Data Analysis
            </li>
            <li>
              <ImPointRight /> Reading tech blogs and tutorials
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Hemraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
