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
            from <span className="purple"> Delhi, India.</span>
            <br />
            I’m a self-motivated software engineer passionate about backend
            development and system design.
            <br />
            I recently completed my B.Tech in Information Technology from IIIT
            Sonepat. During my academic journey, I gained hands-on experience
            through internships at The Sleep Company and NullClass, where I
            built scalable backend systems, optimized API performance, and
            worked with technologies like Node.js, NestJS, Redis, and AWS.
            <br />
            I’m continuously learning and applying new skills to develop
            efficient, production-ready applications.
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

          <p style={{ color: "rgb(155 126 172)" }}>"Hard work works!" </p>
          <footer className="blockquote-footer">Amey Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
