import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDotnet,
  DiGithub,
  DiWindows,
  DiBootstrap,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMicrosoftazure,
  SiAmazonaws,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaServer,
  FaWpforms,
  FaMobileAlt,
  FaCuttlefish,
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 /> {/* HTML5 Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 /> {/* CSS3 Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJs /> {/* JavaScript Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCuttlefish /> {/* C# Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet /> {/* .NET Icon */}
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* Microsoft SQL Server Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub /> {/* GitHub Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaServer /> {/* RESTful APIs and Web Services Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMobileAlt /> {/* Responsive Web Design Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure /> {/* AZURE Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /> {/* AWS Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaWpforms /> {/* Agile/Scrum Methodologies Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /> {/* Problem Solving and Troubleshooting Icon */}
      </Col>
    </Row>
  );
}

export default Techstack;
