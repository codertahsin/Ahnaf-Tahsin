import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
            I am ready to take big responsibility,
             Work of my client with full Concentration.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Dhaka - Bangladesh</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                  </span>
                <p>ahnaftahsin11@gmail.com</p>
                
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              {/* <Link href="https://www.youtube.com/">
                <i className="ri-youtube-line"></i>
              </Link> */}
              <Link href="https://www.github.com/codertahsin">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.facebook.com/ahnaftahsen">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/login">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/ahnaftahsen">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
