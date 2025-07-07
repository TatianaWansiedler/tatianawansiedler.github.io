import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, contactConfig, socialprofils } from "../../content_option";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "./style.css";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="6">
            <h3 className="color_sec py-4">Get in touch</h3>
            <div>
              <a
                className="contacts_item"
                href={`mailto:${contactConfig.YOUR_EMAIL}`}
              >
                <FaEnvelope />
                {contactConfig.YOUR_EMAIL}
              </a>
              <a
                className="contacts_item"
                href={`tel:${contactConfig.YOUR_PHONE}`}
              >
                <FaPhoneAlt /> {contactConfig.YOUR_PHONE}
              </a>
              <a className="contacts_item" href={socialprofils.telegram}>
                <FaTelegram /> tvanzidler
              </a>
            </div>
            <p>{contactConfig.description}</p>
          </Col>

          <Col lg="6" className="d-flex flex-column">
            <h3 className="color_sec py-4">Follow me</h3>
            <div className="social-icons">
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={40} />
              </a>
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={40} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
