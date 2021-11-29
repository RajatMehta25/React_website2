import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  WebsiteRights,
  FooterLinksContainer,
  SocialMediaWrap,
  FooterLinksWrapper,
  SocialMedia,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>

                <FooterLink to="/signin">How It Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms Of Service</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Discover</FooterLinkTitle>

                <FooterLink to="/signin">How It Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms Of Service</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinksItems>
                <FooterLinkTitle>Services</FooterLinkTitle>

                <FooterLink to="/signin">How It Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms Of Service</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>Sign Up</FooterLinkTitle>

                <FooterLink to="/signin">How It Works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms Of Service</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Rajat Mehta
              </SocialLogo>
              <WebsiteRights>
                Rajat Mehta &#169; {new Date().getFullYear()} All Rights Reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="https://www.facebook.com/thatsuaveboy" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="https://twitter.com/rajatmehta__25" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/thatsuaveboy/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="!#" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="!#" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
