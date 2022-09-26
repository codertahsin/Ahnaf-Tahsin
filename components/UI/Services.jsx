import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
            I am a highly- dedicated, enthusiastic, certified individual who is looking for a Programming position 
            where I can utilize my skills and experience in designing, developing, 
            implementing and maintaining software applications according to clients requirements.
            I am a highly- dedicated, enthusiastic, certified individual who is looking for a Programming position 
            where I can utilize my skills and experience in designing, developing, implementing and 
            maintaining software applications according to clients requirements.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
