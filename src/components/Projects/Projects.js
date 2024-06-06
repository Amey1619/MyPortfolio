import React from "react";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import { Container, Row, Col } from "react-bootstrap";
import visualizer from "../../Assets/Projects/visualizer.png";
import chat from "../../Assets/Projects/talktive.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="talk-A-tive"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build a Chat application from scratch using MERN stack with Charka UI for designing and Socket.io for Real-time Chat feature."
              ghLink="https://github.com/Amey1619/Chat-app"
              demoLink="https://chat-app-j6nd.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with React.js and Tailwind Css which takes the content from makdown files and renders it using ReactMarkdown. Easy way to write your own blogs using markdown."
              ghLink="https://github.com/Amey1619/Blogs"
              demoLink="https://ameyiiitblogs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visualizer}
              isBlog={false}
              title="Algo.Visualizer"
              description="Online Algorithm Visualizer built with react.js is a web-based application to visualize the whole process of Path-Finding Algorithms.Developed for the effective understanding of Path-Finding Algorithms."
              ghLink="https://github.com/Amey1619/algorithmvisualizer"
              demoLink="https://amey1619.github.io/algorithmvisualizer/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
