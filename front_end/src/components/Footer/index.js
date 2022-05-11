import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./style";

/**
* @author
* @function Footer
**/

const Footer = () => {

  return (
    <>

      <Box>
        <Container>
          <Row>
          <Column id="footer">
              <Heading>Services</Heading>
              <FooterLink href="#">Opening Times</FooterLink>
              <FooterLink href="#">12 noon - 2pm & 5:30 pm - 11 pm</FooterLink>
              <FooterLink href="#">10% Discount on Orders over $25</FooterLink>
              <FooterLink href="#">Free deliver 3miles on order over $15</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="tel:01962859606">01962859606</FooterLink>
              <FooterLink href="mailto:infor@gurkhaspicewinchester.com">info@gurkhaspicewinchester.com</FooterLink>
              <FooterLink href="#">75 Stoney lane week 50226EW</FooterLink>
            </Column>
            <Column>
              <Heading>Follow Us On</Heading>
              <FooterLink href="#facebook">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#instagram">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#twitter">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#youtube">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    Youtube
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <span style={{
            color: "black",
          }}>Copyright © 2022 Gurkha Spice Winchester</span></div>
      </Box>
    </>
  );
};
export default Footer;