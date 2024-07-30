import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import { Flag, flag01, flag02, flag03, flag04, footerArrowIcon, footerBarImg01, footerBarImg02, footerLogo, googelIcon } from "../../../asserts/images";
import { useState } from "react";

import $ from 'jquery';

import "./style.css"

const Footer = () => {

  const [showOptions, setShowOptions] = useState(false);

  const [selectedOption, setSelectedOption] = useState({
    imgSrc: flag03,
    text: 'English',
  });


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.custom-select')) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };


  const handleOptionClick = (imgSrc, text) => {
    setSelectedOption({ imgSrc, text });
    setShowOptions(false);
  };


  const [selected, setSelected] = useState("");

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
              <div className="custom-select">
                <button className="select-button" onClick={toggleOptions}>
                  <img src={selectedOption.imgSrc} className="flagImages"></img>
                  {selectedOption.text || 'Select an option'}
                </button>
                {showOptions && (
                  <div className="options">
                    <div
                      className="option"
                      onClick={() => handleOptionClick(flag02, 'German')}
                    >
                      <img src={flag02} className="flagImages"></img>
                      German
                    </div>
                    <div
                      className="option"
                      onClick={() => handleOptionClick(flag01, 'French')}
                    > 
                      <img src={flag01} className="flagImages"></img>
                      French
                    </div>
                    <div
                      className="option"
                      onClick={() => handleOptionClick(flag04, 'Chinese')}
                    >
                      <img src={flag04} className="flagImages"></img>
                      Chinese
                    </div>
                  </div>
                )}
              </div>
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
