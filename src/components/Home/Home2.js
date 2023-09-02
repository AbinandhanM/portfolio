import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hey there! I'm passionate about the world of programming, and I've
              learned quite a bit along the way... I think! 🤷‍♂️
              <br />
              <br />
              I'm well-versed in programming languages such as
              <i>
                &nbsp;&nbsp;
                <b className="purple">HTML,CSS,JS,SQL,C#.</b>
              </i>
              <br />
              <br />
              My primary focus is on creating innovative
              <i>
                &nbsp;&nbsp;
                <b className="purple">Web Technologies and Products</b>
              </i>
              , and I'm also deeply interested in all things &nbsp;&nbsp;
              <b className="purple">CyberSecurity</b>
              .
              <br />
              <br />
              Whenever I get the chance, I channel my passion into developing
              products with &nbsp;&nbsp;
              <b className="purple">React.js</b>
              &nbsp; and
              <i>
                &nbsp;&nbsp;
                <b className="purple">
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              , including
              <i>
                &nbsp;&nbsp;
                <b className="purple">Angular.js and Next.js</b>
              </i>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AbinandhanM"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Abinandhan1722?t=u9X-jH9EtP0vBfFmlG_45A&s=08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abinandhan-m-250175107/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/abinandhan.__?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
