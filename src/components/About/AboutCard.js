import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amey Gupta </span>
            from <span className="purple"> Haryana, India.</span>
            <br />
            I am actively learning new skills and applying them.
            <br />
            I have completed my B.Tech in Infromation Technology from IIIT
            Sonepat.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard work works!"{" "}
          </p>
          <footer className="blockquote-footer">Amey Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
