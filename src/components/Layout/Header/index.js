import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

import { casinoIcon, cricketIcon, fishingIcon, footballIcon, googelIcon, lobbyicon, mainLogo, ModalLeftImg, searchIcon, SlotIcon } from "../../../asserts/images";
import CustomButton from "../../CustomButton";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoginForm from "../../LoginForm";
import RegisterForm from "../../RegisterForm";

const Header = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show01, setShow01] = useState(false);

  const handleClose01 = () => setShow01(false);
  const handleShow01 = () => setShow01(true);

  const [activeSection, setActiveSection] = useState('Account');

  const [activeSectionRegister, setActiveSectionRegister] = useState('Accountregister');

  const handleToggleSection = (section) => {
      setActiveSection(section);
    };

  const handleactiveSectionRegister = (sectionRegister) => {
    setActiveSectionRegister(sectionRegister);
  }


  return (
    <>

    <header>
      <div className="headerTopBar">
        <div className="container">
          <div className="headerTop_main">
          <div className="headerTop_left_side">
          <div>
            <h6 className="headerTopBartitle m-0">LORIM</h6>
          </div>

          <div>
            <p className="intall_on_ios_text m-0">Install On IOS</p>
            <p className="instant_download_text m-0">Instant Download on your device</p>
            <div className="all_stars">
              <span className="star_icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="star_icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="star_icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="star_icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className="star_icon">
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>
          </div>
        </div>

        <div>
        <CustomButton
                type="button"
                className="border-0 header_instruction_actionBtn"
                text="Instructions"
                onClick={() => navigate("/")}
              />
        </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="header_logo_title">
              <h4 className="logo_title  m-0">LORIM</h4>
            </div>

            <div className="header_desktop_tabs">
            <button className="single_tab" onClick={() => navigate("/cricket")}>
                <img src={cricketIcon} alt="icon"></img>
                <span className="tab_title">Cricket</span>
              </button>
              <button className="single_tab">
                <img src={lobbyicon} alt="icon"></img>
                <span className="tab_title">Lobby</span>
              </button>
              <button className="single_tab">
                <img src={casinoIcon} alt="icon"></img>
                <span className="tab_title">Live Casino</span>
              </button>
              <button className="single_tab">
                <img src={footballIcon} alt="icon"></img>
                <span className="tab_title">football</span>
              </button>
              <button className="single_tab">
                <img src={fishingIcon} alt="icon"></img>
                <span className="tab_title">Fishing</span>
              </button>
              <button className="single_tab">
                <img src={SlotIcon} alt="icon"></img>
                <span className="tab_title">Slot</span>
              </button>
              
            </div>

            <div className="navbar_actionBtns">

              <div className="search_button_box">

              <div className="input-wrapper">
                <button className="icon">
                <img src={searchIcon}></img>
                </button>
                <input type="text" name="text" className="input" placeholder="search.." />
              </div>
              </div>

              <div>
                <CustomButton
                  type="button"
                  className="signin_actionBtn"
                  text="Sign In"
                  // onClick={() => navigate("/")}
                  onClick={handleShow}
                />
              </div>

              <div>
                <CustomButton
                  type="button"
                  className="register_actionBtn"
                  text="Register"
                  // onClick={() => navigate("/")}
                  onClick={handleShow01}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <Modal show={show} onHide={handleClose} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <div className="row">
          <div className="col-md-6 making_it_hide">
            <img src={ModalLeftImg} className="modal_left_img img-fluid"></img>
          </div>

          <div className="col-md-6 col-12 align-self-center">
          <Modal.Header closeButton>
          <Modal.Title className="w-100">
            <div className="modal_header_tabs">
              {/* <h6 class="trending_now_heading text-center m-0">Sign In</h6> */}
              
              <button className={`modal_tab_btn ${activeSection === "Account" ? "active_tab" : "" }`} onClick={() => handleToggleSection('Account')}>Login</button>
              <button className={`modal_tab_btn ${activeSection === "ShoppingCart" ? "active_tab" : "" }`} onClick={() => handleToggleSection('ShoppingCart')}>Register</button>
              
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">

        {activeSection === 'Account' ? <LoginForm/> : <RegisterForm/>}
          
            {/* <LoginForm/> */}

            {/* <RegisterForm/> */}

          </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          
        </Modal.Footer>
          </div>
        </div>
      </Modal>

      <Modal show={show01} onHide={handleClose01} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <div className="row">
        <div className="col-md-6 making_it_hide">
            <img src={ModalLeftImg} className="modal_left_img img-fluid"></img>
          </div>
            <div className="col-md-6 col-12 align-self-center">
            <Modal.Header closeButton>
          <Modal.Title className="w-100">
            <div className="modal_header_tabs">
              {/* <h6 class="trending_now_heading text-center m-0">Sign In</h6> */}
              
              <button className={`modal_tab_btn ${activeSectionRegister === "modalLogin" ? "active_tab" : "" }`} onClick={() => handleactiveSectionRegister('modalLogin')}>Login</button>
              <button className={`modal_tab_btn ${activeSectionRegister === "Accountregister" ? "active_tab" : "" }`} onClick={() => handleactiveSectionRegister('Accountregister')}>Register</button>
              
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">

        {activeSectionRegister === 'Accountregister' ? <RegisterForm/> : <LoginForm/>}
          
            {/* <LoginForm/> */}

            {/* <RegisterForm/> */}

          </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          
        </Modal.Footer>
            </div>
        </div>
      </Modal>

    </>
  );
};

export default Header;
