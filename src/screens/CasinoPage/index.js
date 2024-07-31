import React from "react";
import UserLayout from "../../components/Layout/userlayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { agt, alllotteriesIcon, avator, bannerSliderImg, batBall, BCLotteryIcon, bestgames01, bestgames02, bestgames03, bestgames04, betAmount01, betAmount02, betAmount03, betIcon01, bitcoin, bonusIcon, casinoIcon, changeBannerImg, communityIcon01, communityIcon02, communityIcon03, communityIcon04, communityIcon05, communityIcon06, communityIcon07, communityIcon08, communityIcon09, cricketIcon, cricketteamflag, dailyContestIcon, desktopHeroBanner01, desktopHeroBanner02, desktopHeroBanner03, dropdownArrow, etherum, fireIcon, flag01, flag02, flag03, flag04, footballIcon, forDesktop, gameProviderImg01, gameProviderImg02, gameProviderImg03, gameProviderImg04, gameProviderImg05, gridIcon, lobbyicon, lotteryIcon, ModalLeftImg, networkIcon01, networkIcon02, networkIcon03, networkIcon04, networkIcon05, networkIcon06, networkIcon07, networkIcon08, networkIcon09, networkIcon10, networkIcon11, networkIcon12, networkIcon13, networkIcon14, networkIcon15, networkIcon16, networkIcon17, networkIcon18, networkIcon19, popularIcon, popularIcon01, promoArrow, promotionsIcon, providersImg, questIcon, raffleIcon, registerRightimg, searchIcon, secondBanner, sidebarCasinoIcon, spinIcon, spinner_head_bk, sportsIcon, teamImg, topgames01, topgames02, topgames03, topgames04, topgamesIcon, trendingImg01, trendingImg02, trendingImg03, trendingImg04, updownIcon, vipClubICon, wheelBorder } from "../../asserts/images";
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';
import Modal from 'react-bootstrap/Modal';
import SidebarMain from "../../components/Sidebar";
import CustomLoader from "../../components/CustomLoader";
import DesktopTable from "../../components/DesktopTable";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import MobileTabs from "../../components/mobileTabs";
import MobileTable from "../../components/MobileTable";

const CasinoPage = () => {

  const data = [
    { game: "Wild Bounty Showdown", player: "Player1", bet: 6.00, multiplier: "1.5x", profit: 3.00 },
    { game: "3 Hot Chillies", player: "Player2", bet: 16.411, multiplier: "2.0x", profit: 32.822 },
    { game: "Twist", player: "Player3", bet: 5.00, multiplier: "3.0x", profit: 15.00 },
    { game: "Madame Destiny Megaw...", player: "Player4", bet: 10.00, multiplier: "1.8x", profit: 8.00 },
    { game: "Fire in the Hole 2", player: "Player5", bet: 8.00, multiplier: "2.2x", profit: 17.60 },
    { game: "Fruit Party", player: "Player6", bet: 12.50, multiplier: "1.3x", profit: 3.75 },
    { game: "Sweet Bonanza", player: "Player7", bet: 15.00, multiplier: "2.5x", profit: 22.50 },
    { game: "Mega Moolah", player: "Player8", bet: 7.25, multiplier: "1.7x", profit: 5.08 },
  ];

  const data02 = [
    { game: "Wild Bounty Showdown", winners: "-", payout: "-BDT117.49" },
    { game: "3 Hot Chillies", winners: "-", payout: "-BDT117.49" },
    { game: "3 Hot Chillies", winners: "-", payout: "-BDT117.49" },
    { game: "Twist", winners: "-", payout: "-BDT117.49" },
    { game: "Madame Destiny Megaw...", winners: "-", payout: "-BDT117.49" },
    { game: "Fire in the Hole 2", winners: "-", payout: "-BDT117.49" },
    { game: "Fruit Party", winners: "-", payout: "-BDT117.49" },
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function updateTable() {
    const shuffledData = shuffle(data.slice()); // Shuffled copy of the data
    const $tableBody = $(".table-body");
    $tableBody.empty(); // Clear current content
    shuffledData.forEach(entry => {
      $tableBody.append(`
        <tr>
          <td class="game">${entry.game}</td>
          <td class="player">${entry.player}</td>
          <td class="bet">${entry.bet}</td>
          <td class="multiplier">${entry.multiplier}</td>
          <td class="profit">${entry.profit}</td>
        </tr>
      `);
    });
  }

  function updateTable02() {
    const shuffledData = shuffle(data02.slice()); // Shuffled copy of the data
    const $tableBody = $(".table-body02");
    $tableBody.empty(); // Clear current content
    shuffledData.forEach(entry => {
      $tableBody.append(`
        <tr>
          <td class="game">${entry.game}</td>
          <td class="player">${entry.winners}</td>
          <td class="bet">${entry.payout}</td>
          
        </tr>
      `);
    });
  }
  
  // Initial table population
  updateTable();
  updateTable02();

  // Update table every 2 seconds
  setInterval(updateTable, 2000);
  setInterval(updateTable02, 2000);
  


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let container = document.querySelector(".container_wheel_box");

  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const randomDegrees = Math.ceil(Math.random() * 5000);
    setRotation(rotation + randomDegrees);
  };
  
  const trendingImages = [trendingImg01, trendingImg02, trendingImg03, trendingImg04, trendingImg01, trendingImg02, trendingImg03, trendingImg04, trendingImg01, trendingImg02, trendingImg03, trendingImg04];

  const gameProviderImages = [gameProviderImg01, gameProviderImg02, gameProviderImg03, gameProviderImg04, gameProviderImg05, gameProviderImg01, gameProviderImg02, gameProviderImg03, gameProviderImg04, gameProviderImg05];

  const bestGames = [bestgames01, bestgames02, bestgames03, bestgames04, bestgames01, bestgames02, bestgames03, bestgames04, bestgames01, bestgames02, bestgames03, bestgames04];

  const topGames = [topgames01, topgames02, topgames03, topgames04, topgames01, topgames02, topgames03, topgames04, topgames01, topgames02, topgames03, topgames04];


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

  const [show01, setShow01] = useState(false);

  const handleClose01 = () => setShow01(false);
  const handleShow01 = () => setShow01(true);

  const [activeSectionRegister, setActiveSectionRegister] = useState('Accountregister');

  const handleactiveSectionRegister = (sectionRegister) => {
    setActiveSectionRegister(sectionRegister);
  }

  const [isLoading, setIsLoading] = useState(false);
  const [showTable, setShowTable] = useState(true);

  const handleClick = () => {
    setIsLoading(true);
    setShowTable(false);

    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false);
      setShowTable(true);
    }, 1000); // 2 seconds delay
  };

  return (
    <>

        <SidebarMain/>


      <div className="whole_content">

      <UserLayout>


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

      <MobileTabs/>

      {/* <section className="tabs_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="all_main_tabs">
              <div className="all_tabs">
                <button className="single_tab">
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
                  <img src={lobbyicon} alt="icon"></img>
                  <span className="tab_title">Lobby</span>
                </button>
                <button className="single_tab">
                  <img src={cricketIcon} alt="icon"></img>
                  <span className="tab_title">Live Casino</span>
                </button>
                <button className="single_tab">
                  <img src={footballIcon} alt="icon"></img>
                  <span className="tab_title">football</span>
                </button>
                <button className="single_tab">
                  <img src={lobbyicon} alt="icon"></img>
                  <span className="tab_title">Lobby</span>
                </button>
                <button className="single_tab">
                  <img src={cricketIcon} alt="icon"></img>
                  <span className="tab_title">Live Casino</span>
                </button>
                <button className="single_tab">
                  <img src={footballIcon} alt="icon"></img>
                  <span className="tab_title">football</span>
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="trending_cricket_section">
        <div className="container">
          <div className="row">
              <div className="col-md-12 for_padding_right">
                <div className="trendingNowMain">

                  <div className="trending_now_slides">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={12}
                    pagination={{
                      clickable: true,

                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 3,
                        spaceBetween: 12,
                      }
                      
                    }}
                    modules={[]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="trendingNowImgSecond">
                        <img src={desktopHeroBanner01} alt="trending" className="img-fluid"></img>
                        <div className="trendingNowImgSecondContext01">
                            <h4 className="trendingNowImgSecondContexttitle m-0">
                            <span>LOREM</span><span className="text_x">X</span><span>LEISFER</span>
                            </h4>
                            <span className="limited_time_text">limited time</span>
                            <h6 className="sample_text">LORIM</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="trendingNowImgSecond">
                        <img src={desktopHeroBanner02} alt="trending" className="img-fluid"></img>
                        <div className="trendingNowImgSecondContext01 pr-3">
                            <h2 className="more_bold_text text-right m-0">INR20,000</h2>
                            <h4 className="trendingNowImgSecondContexttitle text-right">
                              BEAK THE PIGGY
                            </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="trendingNowImgSecond">
                        <img src={desktopHeroBanner03} alt="trending" className="img-fluid"></img>
                        <div className="trendingNowImgSecondContext01 pl-3">
                            <h2 className="more_bold_text text-left m-0">LOREM</h2>
                            <h4 className="trendingNowImgSecondContexttitle text-left">
                              HOT MANIA
                            </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="trendingNowImgSecond">
                        <img src={desktopHeroBanner01} alt="trending" className="img-fluid"></img>
                        <div className="trendingNowImgSecondContext01">
                            <h4 className="trendingNowImgSecondContexttitle m-0">
                            <span>LOREM</span><span className="text_x">X</span><span>LEISFER</span>
                            </h4>
                            <span className="limited_time_text">limited time</span>
                            <h6 className="sample_text">LORIM</h6>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="trendingNowImgSecond">
                        <img src={desktopHeroBanner02} alt="trending" className="img-fluid"></img>
                        <div className="trendingNowImgSecondContext01 pr-3">
                            <h2 className="more_bold_text text-right m-0">INR20,000</h2>
                            <h4 className="trendingNowImgSecondContexttitle text-right">
                              BEAK THE PIGGY
                            </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="trendingNowImgSecond">
                        <img src={desktopHeroBanner03} alt="trending" className="img-fluid"></img>
                        <div className="trendingNowImgSecondContext01 pl-3">
                            <h2 className="more_bold_text text-left m-0">LOREM</h2>
                            <h4 className="trendingNowImgSecondContexttitle text-left">
                              HOT MANIA
                            </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    
                  </Swiper>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      

      


    

    

<section className="best_games_section">
  <div className="container">
    <div className="row">
        <div className="col-md-12">
          <div className="trendingNowMain">
          <div className="game_provide_both_sides">
                <div className="provider_left_side">
                  <div className="providersImg">
                    <img src={providersImg} alt="provider"></img>
                  </div>
                  <h6 className="providers_title m-0 best_games_title">Best Games</h6>
                </div>
                {/* <div>
                  <Link className="providers_more_option">More</Link>
                </div> */}
              </div>

            <div className="trending_now_slides">
            <Swiper
              slidesPerView={3.2}
              spaceBetween={8}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                990: {
                  slidesPerView: 6.5,
                  spaceBetween: 10,
                }
              }}
              modules={[]}
              className="mySwiper"
            >
              {
                bestGames.map((bestgamesimg) => 
                  <SwiperSlide>
                    <div className="trendingNowImg">
                      <img src={bestgamesimg} alt="trending" className="img-fluid"></img>
                    </div>
                  </SwiperSlide>
                )
              }
            </Swiper>

            <Swiper
              slidesPerView={3.2}
              spaceBetween={8}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                990: {
                  slidesPerView: 6.5,
                  spaceBetween: 10,
                }
              }}
              modules={[]}
              className="mySwiper pt-2"
            >
              {
                bestGames.map((bestgamesimg) => 
                  <SwiperSlide>
                    <div className="trendingNowImg">
                      <img src={bestgamesimg} alt="trending" className="img-fluid"></img>
                    </div>
                  </SwiperSlide>
                )
              }
            </Swiper>

            <Swiper
              slidesPerView={3.2}
              spaceBetween={8}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                990: {
                  slidesPerView: 6.5,
                  spaceBetween: 10,
                }
              }}
              modules={[]}
              className="mySwiper pt-2 extra_swiper"
            >
              {
                bestGames.map((bestgamesimg) => 
                  <SwiperSlide>
                    <div className="trendingNowImg">
                      <img src={bestgamesimg} alt="trending" className="img-fluid"></img>
                    </div>
                  </SwiperSlide>
                )
              }
            </Swiper>
            </div>

            <div className="text-center">
                  {/* <Link className="providers_more_option">More</Link> */}
                  <button className="providers_more_option mt-3">More</button>
                </div>
          </div>
        </div>
    </div>
  </div>
</section>


<section className="best_games_section top_games_section">
  <div className="container">
    <div className="row">
        <div className="col-md-12">
          <div className="trendingNowMain">
          <div className="game_provide_both_sides">
                <div className="provider_left_side">
                  <div className="providersImg">
                    <img src={providersImg} alt="provider"></img>
                  </div>
                  <h6 className="providers_title m-0 top_games_title">Top Games</h6>
                </div>
                {/* <div>
                  <Link className="providers_more_option">More</Link>
                </div> */}
              </div>

            <div className="trending_now_slides">
            <Swiper
              slidesPerView={6}
              spaceBetween={8}
              pagination={{
                clickable: true,
              }}
              // breakpoints={{
              //   990: {
              //     slidesPerView: 5.5,
              //     spaceBetween: 10,
              //   }
              // }}
              modules={[]}
              className="mySwiper"
            >
              {
                topGames.map((topgameImg) => 
                  <SwiperSlide>
                    <div className="top_games">
                      <img src={topgameImg} alt="trending" className="img-fluid"></img>
                      <div className="top_games_content">
                        <div className="top_games_title_with_img">
                          <h6 className="bc_originals m-0">BC ORIGINALS</h6>
                          <img src={topgamesIcon}></img>
                        </div>

                        <div>
                          <button className="top_games_actionBtn" onClick={handleShow01}>SIGN UP NOW</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              }
            </Swiper>
            
            </div>

              <div className="text-center">
                  {/* <Link className="providers_more_option">More</Link> */}
                  <button className="providers_more_option mt-3">More</button>
                </div>
          </div>
        </div>
    </div>
  </div>
</section>


<section className="main_slider_banner py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
      <Swiper
        
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bannerSlider">
            <img src={secondBanner} alt="banner" className="img-fluid"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bannerSlider">
          <img src={secondBanner} alt="banner" className="img-fluid"></img>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bannerSlider">
            <img src={secondBanner} alt="banner" className="img-fluid"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bannerSlider">
          <img src={secondBanner} alt="banner" className="img-fluid"></img>
        </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  </div>
</section>


<section className="latest_bet_and_race">
  <div className="container">
    <div className="row">
        <div className="col-md-12">
          <div className="">
            <h4 className="bet_and_race_title">Latest bet & Race</h4>

            <div className="bet_race_tabs">
              <button className="bet_race_actionBtn" onClick={handleClick}>Latest bets</button>
              <button className="bet_race_actionBtn" onClick={handleClick}>High rollers</button>
              <button className="bet_race_actionBtn" onClick={handleClick}>Wager contest</button>
            </div>

            <div className="bet_and_race_table_box">

            {isLoading && <CustomLoader />}
            {showTable && <DesktopTable />}

            </div>

          </div>
        </div>
    </div>
  </div>
</section>

<section className="">

  <div className="container">

        <div className="register_now_instantly_section">

        <div className="register_now_right_img">
          <img src={registerRightimg}></img>
        </div>

        <div className="row">
      <div className="col-md-4">
        <div>
          <h2 className="register_now_title"><span className="register_span">Register</span> now to instantly redeem a <span className="percentage_span">300%</span> deposit bonus</h2>
          <p className="register-now-para">Deposit bonus up to INR20,000</p>

          <div>
            <button className="register_now_instantly_actinBtn">SIGN UP NOW</button>
          </div>
        </div>

      </div>
    </div>

        </div>

    
  </div>
</section>


<section className="">
  <div className="container">
    <div className="crypto_online_casino_section">
    <div className="row">
        <div className="col-md-6">
          <div>
            <p className="crypto_para">Crypto Online Casino</p>

            <div className="crypto_both_paras">

              <p className="online_casino_para">
                Casinos online have not always been around, but we can safely say that online casino
                have been used a lot since they came on the market. And it's not in short demand nor
                options, and now in 2023, we have 100Os and 10OOs to pick from -it's just a matter of
                what you like and what payment options you would like to see at the casino.
              </p>

              <p className="online_casino_para">
                Players are always looking for something new, which wil help make the gaming
                experience so much better and more cessible.Allowing theplayr to focus on th
                absolute fun of a casino, that's right, the games themselves.
              </p>
            </div>

            <div>
                <button className="online_casino_actionBtn">Show more >></button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <p className="crypto_para">Help Us Improve Your Experience</p>

            <div class="mb-3">
              <textarea class="form-control custom_textarea pt-3" id="" rows="3" placeholder="Found a bug or have any recommendations? Please leave your message here"></textarea>
            </div>

            <div>
              <button className="leave_a_message">Leave a Message</button>
              <span className="get_rewarded_text ml-2">Now get rewarded for your valuable feedback.</span>
            </div>

            <div className="mt-2">
              <span className="get_rewarded_text">or Email us: </span>
              <span className="email_info">feedback@bcgame.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</section>


<section className="game_winners_table">
  <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="game_winners_main">
            <div className="game_winners_tabs">
              <div className="winners_first-tab">
                <button onClick={handleClick}>My Bets</button>
              </div>
              <div className="winners_second-tab">
                <button onClick={handleClick}>winners of the day</button>
              </div>
              <div className="winners_third-tab">
                <button onClick={handleClick}>High Rollers</button>
              </div>
            </div>

            <div className="game_winners_main_table">
            
            {isLoading && <CustomLoader />}
            {showTable && <MobileTable />}

            <div className="show_more_data_btn text-center">
              <button className="providers_more_option">More</button>
            </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</section>

<section className="community_section removing_border">
  <div className="container">
    <div className="making_border">
    <div className="row">
        <div className="col-8 col-sm-6 col-lg-12 mx-auto">
          <div className="community_main">
          <h6 className="footer_links_heading community_title">Join our Community</h6>

          <div className="all_community_logos">
            <button className="community_single_btn">
              <img src={communityIcon01} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={communityIcon02} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={communityIcon03} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={communityIcon04} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={communityIcon05} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={communityIcon06} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={communityIcon07} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={communityIcon08} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={communityIcon09} alt="community"></img>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</section>

<section className="community_section removing_border">
  <div className="container">
    <div className="making_border">
    <div className="row">
        <div className="col-8 col-sm-6 col-lg-12 mx-auto">
          <div className="community_main">
          <h6 className="footer_links_heading community_title">Accepted Networks</h6>

          <div className="all_community_logos">
            <button className="community_single_btn">
              <img src={networkIcon01} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon02} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon03} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon04} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon05} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon06} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon07} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon08} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon09} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon10} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon11} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon12} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon13} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon14} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon15} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon16} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon17} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon18} alt="community"></img>
            </button>
            <button className="community_single_btn">
              <img src={networkIcon19} alt="community"></img>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
      
  </div>
</section>

</UserLayout>


      </div>

    </>
  );
};

export default CasinoPage;
