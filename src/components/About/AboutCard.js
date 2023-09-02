import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abinandhan M </span>
            from <span className="purple"> Pollachi,Coimbatore , India.</span>
            <br /> I will be graduating with a Bachelor's degree in Computer
            Science and Engineering (B.E. CSE) in June 2023. Throughout my
            academic journey, I have gained a deep understanding of computer
            science concepts, programming languages, and problem-solving skills.
            <br />
            Additionally, I am currently interning as a software developer at
            Kanini Software Solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Podcasts
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code Hard, Hack Harder."{" "}
          </p>
          <footer className="blockquote-footer">Abinandhan M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
