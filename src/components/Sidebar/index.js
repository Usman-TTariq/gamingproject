import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { alllotteriesIcon, avator, BCLotteryIcon, betAmount01, betAmount02, bonusIcon, dailyContestIcon, lotteryIcon, modal_coins, popularIcon01, promotionsIcon, questIcon, raffleIcon, sidebarCasinoIcon, spinIcon, sportsIcon, updownIcon, vipClubICon, wheelBorder } from '../../asserts/images';
import { Accordion } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const SidebarMain = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let container = document.querySelector(".container_wheel_box");

  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const randomDegrees = Math.ceil(Math.random() * 5000);
    setRotation(rotation + randomDegrees);
  };

  const [showOptions, setShowOptions] = useState(false);

  const [selectedOption, setSelectedOption] = useState({
    imgSrc: betAmount01,
    text: 'Cash',
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

  const navigate = useNavigate();


  return (
    <>
    
    <div className="sidebar">
        <div className="sidebar_content">
          <div>
            <Link className='sidebarLink' to="/">
              <h4 class="logo_title sidebar_title m-0" >LORIM</h4>
              </Link>
          </div>

          <div className="sidebar_top_options">
            <div className="sidebar_single_box">
              <img src={bonusIcon}></img>
              <span className="sidebar_single_box_title">Bonus</span>
            </div>

            <div className="both_coloured_box">
              <div className="sidebar_colored_box">
                <img src={questIcon}></img>
                <span className="sidebar_colored_box_title">QUEST</span>
              </div>

              <button className="sidebar_colored_box_02" onClick={handleShow}>
              <img src={spinIcon}></img>
              <span className="sidebar_colored_box_title pl-1">SPIN</span>
            </button>
            </div>

          </div>

          <Accordion defaultActiveKey="2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                  <div className="accordian_img_span">
                    <img src={sidebarCasinoIcon}></img>
                    <span>Casino</span>
                  </div>
                </Accordion.Header>
              <Accordion.Body>
              <div className="img_span_under_accordian">
                  <img src={alllotteriesIcon}></img>
                  <span>All Lotteries</span>
                </div>
                <div className="img_span_under_accordian">
                  <img src={BCLotteryIcon}></img>
                  <span>BC Lottery</span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                  <div className="accordian_img_span">
                    <img src={sportsIcon}></img>
                    <span>Sports</span>
                  </div>
              </Accordion.Header>
              <Accordion.Body>
              <div className="img_span_under_accordian">
                  <img src={alllotteriesIcon}></img>
                  <span>All Lotteries</span>
                </div>
                <div className="img_span_under_accordian">
                  <img src={BCLotteryIcon}></img>
                  <span>BC Lottery</span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                  <div className="accordian_img_span">
                    <img src={lotteryIcon}></img>
                    <span>Lottery</span>
                  </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="img_span_under_accordian">
                  <img src={alllotteriesIcon}></img>
                  <span>All Lotteries</span>
                </div>
                <div className="img_span_under_accordian">
                  <img src={BCLotteryIcon}></img>
                  <span>BC Lottery</span>
                </div>
                <div className="img_span_under_accordian">
                  <img src={popularIcon01}></img>
                  <span>Popular</span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
              <div className="accordian_img_span">
                    <img src={updownIcon}></img>
                    <span>Up Down</span>
                  </div>
              </Accordion.Header>
              <Accordion.Body>
              <div className="img_span_under_accordian">
                  <img src={alllotteriesIcon}></img>
                  <span>All Lotteries</span>
                </div>
                <div className="img_span_under_accordian">
                  <img src={BCLotteryIcon}></img>
                  <span>BC Lottery</span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="sidebar_single_box mb-1">
              <img src={promotionsIcon}></img>
              <span className="sidebar_single_box_title">Promotions</span>
            </div>

            <div className="sidebar_single_box mb-1">
              <img src={dailyContestIcon}></img>
              <span className="sidebar_single_box_title">Daily Contest</span>
            </div>

            <div className="sidebar_single_box mb-1">
              <img src={raffleIcon}></img>
              <span className="sidebar_single_box_title">Weekly Raffle</span>
            </div>

            <div className="sidebar_single_box mb-1">
              <img src={vipClubICon}></img>
              <span className="sidebar_single_box_title"><span className="vip">VIP </span><span className="club">Club</span></span>
            </div>
        </div>

        <Modal className="for_spinner "  show={show} onHide={handleClose}>
        <Modal.Header closeButton className="justify-content-center position-relative">
          <Modal.Title>
            <div className="spin_to_win_title">SPIN TO WIN</div>
            <div className="amount">500USDT</div>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        

        <button id="spin" onClick={spinWheel}></button>
            <span class="arrow"></span>

        <div className="wheel_with_border">

          

        <img src={wheelBorder} className="wheelborder"></img>

        <div style={{ transform: `rotate(${rotation}deg)` }} class="container_wheel_box mx-auto">
          
          
        
          <div class="one"><span>50K</span></div>
          <div class="two"><span>100K</span></div>
          <div class="three"><span>7500</span></div>
          <div class="four"><span>1000</span></div>
          <div class="five"><span>5000</span></div>
          <div class="six"><span>25K</span></div>
          <div class="seven"><span>10K</span></div>
          <div class="eight"><span>3000</span></div>
          
      </div>

        </div>

        <div className="bg glow_circle"></div>
        <div className="bg glow_circle02"></div>
        <div className="bg glow_circle03"></div>

        </Modal.Body>
        <Modal.Footer className="extra_padding">
          
          <div className="modal_dropdown ml-auto">
            <div className="custom-select">
                <button className="select-button extra_drop" onClick={toggleOptions}>
                  <img src={selectedOption.imgSrc} className="modaldropImg"></img>
                  {selectedOption.text || 'Select an option'}
                </button>
                {showOptions && (
                  <div className="options modal_options">
                    <div
                      className="option"
                      onClick={() => handleOptionClick(betAmount01, 'Crypto')}
                    >
                      <img src={betAmount01} className="modaldropImg"></img>
                      Crypto
                    </div>
                    <div
                      className="option"
                      onClick={() => handleOptionClick(betAmount02, 'INR')}
                    > 
                      <img src={betAmount02} className="modaldropImg"></img>
                      INR
                    </div>
                   
                  </div>
                )}
              </div>
          </div>

          <div className="modal_footer_info_btns">
              <button className="info_btons">
                <div><span className="spin_bonus_total">SPIN BONUS TOTAL</span></div>
                <span className="spin_bonus_amount">$14,247,995</span>
              </button>

              <button className="info_more_btn">
                <div>
                  <img src={avator}></img>
                </div>
                <div>
                  <span className="win_text">Win: </span>
                  <span className="winning_amount">$15.5</span>
                </div>
              </button>
          </div>


          {/* <div className='rewarding_box_main'>
            <img src={modal_coins} className='img-fluid'></img>

            <div className='main_glowing_box_div'>
            <div className='glowing_div'></div>
            </div>

            <div className='rewarding_box_content'>
              <h2 className='rewarding_congrat_title'>CONGRATULATIONS</h2>

              <p className='free_money_text'>You've got free money to bet on our games!</p>

              <h2 className='rewarding_money_amount'>0.89 DOT</h2>

              <div>
                <button className='claim_rewards_btn'>Claim Rewards</button>
              </div>
            </div>
          </div> */}
          
        </Modal.Footer>
      </Modal>



      </div>
    
    </>
  )
}

export default SidebarMain