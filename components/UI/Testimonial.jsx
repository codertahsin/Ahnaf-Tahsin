import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>

                  <div>
                    <h6>Jennifer</h6>
                    <h6> CEO at WEB CITER</h6>
                  </div>
                </div>

                <p>
                  Tahsin is a person of commitment. 
                  He is really good at what he is doing. 
                  I really like his work. Especially the unique point of view of designing
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>

                  <div>
                    <h6>Sarah</h6>
                    <h6>Co-founder at Kreetive</h6>
                  </div>
                </div>
                <p>
                Really amazing communication skills. 
                Always understand what I am trying to achieve. 
                Also, his work is really amazing. Do really high-quality work.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>

                  <div>
                    <h6>Steven</h6>
                    <h6> Marketing Head at Eleven Dawn</h6>
                  </div>
                </div>
                <p>Really hard-working person. 
                  Deliver the work as promised. 
                  Planning to work more with this person.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
