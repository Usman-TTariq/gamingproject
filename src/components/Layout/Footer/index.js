import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
// import { facebookIcon, twitterIcon, instragramIcon, linkedinIcon, phoneIcon, mailIcon, locationIcon, paymentMethodsImg } from "../../../asserts/images";

import { Flag, footerArrowIcon, footerBarImg01, footerBarImg02, footerLogo } from "../../../asserts/images";
// import { useState } from "react";
// import ReactFlagsSelect from "react-flags-select";

import "./style.css"

const Footer = () => {

  // const [selected, setSelected] = useState("");

  return (
    <>
      <footer>
      <Container>
        <Row>
          <Col  sm={2} lg={3} className="col-4">
          <div className="pt-1">

            <h6 className="footer_links_heading">
              Sports
            </h6>

            <ul className="footer_links_list list-unstyled">
            <li ><Link className="footer_detail" to="/">Home</Link></li>
            <li ><Link className="footer_detail" to="/blogs">Live</Link></li>
            <li ><Link className="footer_detail" to="/contact-us">Sports Rules</Link></li>
            </ul>

            </div>
          </Col>

          <Col xs={4} sm={2} lg={3}>
            <div className="pt-1">

             <h6 className="footer_links_heading">
                Casino
             </h6>

             <ul className="footer_links_list list-unstyled">
              <li ><Link className="footer_detail">Games</Link></li>
              <li ><Link className="footer_detail">VIP</Link></li>
              <li ><Link className="footer_detail">Promotions</Link></li>
              {/* <li ><Link className="footer_detail">Dual Roller Shades</Link></li> */}
             </ul>

            </div>
          </Col>

          <Col xs={4} sm={2} lg={3}>
            <div className="pt-1">

             <h6 className="footer_links_heading">
              Support
             </h6>

             <ul className="footer_links_list list-unstyled">
              <li ><Link className="footer_detail" to="/about">Refer & Earn</Link></li>
              <li ><Link className="footer_detail" to="/blogs">Responsible</Link></li>
              <li ><Link className="footer_detail" to="/contact-us">Gambling</Link></li>
              <li ><Link className="footer_detail">Gamble Aware 
                  <img src={footerArrowIcon} alt="arrow" className="footerArrow"></img></Link>
              </li>
              <li ><Link className="footer_detail">Live Support</Link></li>
             </ul>

            </div>
          </Col>

          <Col xs={4} sm={4} lg={3}>
          <div className="pt-1">

            <h6 className="footer_links_heading">
              Community
            </h6>

            <ul className="footer_links_list list-unstyled">
            <li ><Link className="footer_detail" to="/about">Telegram
            <img src={footerArrowIcon} alt="arrow" className="footerArrow"></img>
            </Link></li>
            <li ><Link className="footer_detail" to="/blogs">Facebook
            <img src={footerArrowIcon} alt="arrow" className="footerArrow"></img>
            </Link></li>
            <li ><Link className="footer_detail" to="/contact-us">Twitter
            <img src={footerArrowIcon} alt="arrow" className="footerArrow"></img>
            </Link></li>
            <li ><Link className="footer_detail">Instagram
            <img src={footerArrowIcon} alt="arrow" className="footerArrow"></img>
            </Link></li>
            {/* <li ><Link className="footer_detail">Terms & Conditions</Link></li> */}
            </ul>

            </div>
          </Col>

          <Col xs={4} sm={4} lg={3}>
          <div className="pt-1">

            <h6 className="footer_links_heading">
              About Us
            </h6>

            <ul className="footer_links_list list-unstyled">
            <li ><Link className="footer_detail">Privacy Policy</Link></li>
            <li ><Link className="footer_detail" to="/about">Licenses</Link></li>
            <li ><Link className="footer_detail" to="/blogs">AML Policy</Link></li>
            <li ><Link className="footer_detail" to="/contact-us">Terms of Service</Link></li>
            {/* <li ><Link className="footer_detail">Terms </Link></li> */}
            </ul>

            </div>
          </Col>

          <Col xs={4} sm={4} lg={3}>
          <div className="pt-1">

            <h6 className="footer_links_heading">
              Language
            </h6>

              <div>

            {/* <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
              /> */}
                

              </div>


            </div>
          </Col>
        </Row>
      </Container>

      <div className="">
          <div className="container">
              <div className="footer_bottom_bar">
              <div className="footerBarImg1">
            <img src={footerBarImg01} alt="footer"></img>
          </div>

          <div className="footerBarImg1">
            <img src={footerBarImg02} alt="footer"></img>
          </div>
              </div>
          </div>
      </div>
    </footer>

    </>
  );
};

export default Footer;
