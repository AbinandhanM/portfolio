import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath="https://img.freepik.com/free-vector/flat-new-normal-hotels-illustration_23-2148926991.jpg?w=996&t=st=1693674386~exp=1693674986~hmac=c713a8e7912e4b4bdb6d5a35897d22dc26a7a2be88c43f8a44558754591b8b83"
              isBlog={false}
              title="Hotel"
              description="XYZ Hotels API Core Project: Streamline reservations, efficient booking. CRUD, filtering, count, JWT authentication. Manage one-to-many hotel-room relationship. Enhance customer experience globally."
              ghLink="https://github.com/AbinandhanM/Hotel_Management_system"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?w=740&t=st=1693673985~exp=1693674585~hmac=11ebc868d8fcf2a37320b651b6fc792e2732e5ecd7c43c040d7140a01d882d72"
              isBlog={false}
              title="Hospital Management"
              description="The main objective is to guide the development team in implementing API consumption in Angular with JWT token authentication for an admin-doctors-patient communication platform. The goal is to create a secure and user-friendly system that allows administrators to activate doctors and enables patients to register and access medical services."
              ghLink="https://github.com/AbinandhanM/Hospital_Management_System"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://img.freepik.com/free-vector/flight-booking-concept-illustration_114360-2213.jpg?w=740&t=st=1693674138~exp=1693674738~hmac=aeb0ef31477eb3925cacba91a576dd5e350cf937740d31fa402344a5371e277d"
              isBlog={false}
              title="Tourism"
              description="Welcome to YourTrip! Your ultimate tourism website on GitHub. Discover captivating destinations, immersive guides, and connect with fellow travelers. Plan unforgettable journeys with us!"
              ghLink="https://github.com/AbinandhanM/MakeYourTrip"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=1060&t=st=1693674182~exp=1693674782~hmac=0f564d883fdbfed90eee10f5b752fbdc46110136cac121696118febb4d166ff9"
              isBlog={false}
              title="Portfolio"
              description="A repository showcasing my multifaceted skills, from web development to data analysis and machine learning. Each project includes documentation and code, reflecting my problem-solving prowess and commitment to quality. Open to collaboration and feedback; contact me for inquiries or potential partnerships"
              ghLink="https://github.com/AbinandhanM/portfolio"
              demoLink="githubpages"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
