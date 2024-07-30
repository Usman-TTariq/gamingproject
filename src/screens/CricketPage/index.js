import React from "react";
import UserLayout from "../../components/Layout/userlayout";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { agt, alllotteriesIcon, avator, bannerSliderImg, batBall, BCLotteryIcon, bestgames01, bestgames02, bestgames03, bestgames04, betAmount01, betAmount02, betAmount03, betIcon01, bitcoin, bonusIcon, casinoIcon, changeBannerImg, communityIcon01, communityIcon02, communityIcon03, communityIcon04, communityIcon05, communityIcon06, communityIcon07, communityIcon08, communityIcon09, cricketIcon, cricketteamflag, dailyContestIcon, desktopHeroBanner01, desktopHeroBanner02, desktopHeroBanner03, dropdownArrow, etherum, fireIcon, flag01, flag02, flag03, flag04, footballIcon, forDesktop, gameProviderImg01, gameProviderImg02, gameProviderImg03, gameProviderImg04, gameProviderImg05, gridIcon, lobbyicon, lotteryIcon, networkIcon01, networkIcon02, networkIcon03, networkIcon04, networkIcon05, networkIcon06, networkIcon07, networkIcon08, networkIcon09, networkIcon10, networkIcon11, networkIcon12, networkIcon13, networkIcon14, networkIcon15, networkIcon16, networkIcon17, networkIcon18, networkIcon19, popularIcon, popularIcon01, promoArrow, promotionsIcon, providersImg, questIcon, raffleIcon, registerRightimg, searchIcon, secondBanner, sidebarCasinoIcon, spinIcon, spinner_head_bk, sportsIcon, teamImg, topgames01, topgames02, topgames03, topgames04, topgamesIcon, trendingImg01, trendingImg02, trendingImg03, trendingImg04, updownIcon, vipClubICon, wheelBorder } from "../../asserts/images";
import { Autoplay, Pagination } from 'swiper/modules';
import "./style.css";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from 'jquery';
import Modal from 'react-bootstrap/Modal';
import SidebarMain from "../../components/Sidebar";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Home = () => {

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


  return (
    <>

        <SidebarMain/>


      <div className="whole_content">

      <UserLayout>

      <section className="tabs_section">
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
      </section>

      <section className="trending_cricket_section">
        <div className="container">
          <div className="row">
              <div className="col-md-12 pr-0">
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

      

      


      <section className="cricket_card_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main_cards">

                    <div className="dropdown_with_grid_search">
                      <div className="provider_dropdown">
                        <button className="dropdown_actionBtn">
                          <span className="provider_text">Providers</span>
                          {/* <img src={dropdownArrow} alt="dropdown"></img> */}
                        </button>
                      </div>
                      <div className="grid_and_searchbar">
                      <div className="search_button_box">
                        <div className="input-wrapper">
                          <button className="icon">
                          <img src={searchIcon} alt="sreact"></img>
                          </button>
                          <input type="text" name="text" className="input" placeholder="search.." />
                        </div>
                        </div>
                        {/* <button className="grid_actionBtn">
                          <img src={gridIcon} alt="grid"></img>
                        </button> */}
                        {/* <button className="grid_actionBtn">
                          <img src={searchIcon} alt="grid"></img>
                        </button> */}

                      </div>
                    </div>

                  <div className="cricket_heading_with_date">
                      <span className="cricket_title">Cricket</span>
                      <span className="cricket_date">Mon, 24 Jun</span>
                  </div>
              </div>
            </div>

            <div className="col-md-12 pr-0 pb-4">
              <div className="cricket_cards_slides">
              <Swiper
                    slidesPerView={2.1}
                    spaceBetween={10}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      767: {
                        slidesPerView: 3.1,
                        spaceBetween: 15,
                      }
                    }}
                    modules={[]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="cricket_box">
                        <div className="cricket_box_first_div">
                          <div className="">
                            <span className="super_eight">Super Eight <span className="white_circle"></span> T20 </span>
                            <span className="matches_number"><span>50 </span>of <span>55</span></span>
                          </div>
                          <div>
                            <span className="current_match_date">Mon, 24 Jun</span>
                          </div>
                        </div>
                        <div className="cricket_box_second_div">
                          <div className="">
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">West Indies</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date">
                              <span><span>135</span>/<span>8</span> <span>(20)</span></span>
                            </span> 
                            </div>
                        </div>

                        <div className="cricket_box_second_div align-items-start">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">South Africa</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date running_match">
                              <span><span>135</span>/<span>8</span> <span>(<span>16.1</span>/<span>17</span>)</span></span>
                            </span> 

                            <span className="current_match_date running_match block_target text-right">
                                Target<span>123</span>
                              </span>
                            </div>
                        </div>
                        <div className="match_winning_score">
                          <span className="cricket_team_name">
                            <span>SA </span>
                            won by <span>3 </span>
                            wickets (<span>5 </span> balls left)
                          </span>
                          <span className="cricket_team_name dls">(DLS method)</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="cricket_box">
                        <div className="cricket_box_first_div">
                          <div className="">
                            <span className="super_eight">Super Eight <span className="white_circle"></span> T20 </span>
                            <span className="matches_number"><span>50 </span>of <span>55</span></span>
                          </div>
                          <div>
                            <span className="current_match_date">Mon, 24 Jun</span>
                          </div>
                        </div>
                        <div className="cricket_box_second_div">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">West Indies</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date">
                              <span><span>135</span>/<span>8</span> <span>(20)</span></span>
                            </span> 
                            </div>
                        </div>

                        <div className="cricket_box_second_div align-items-start">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">South Africa</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date running_match">
                              <span><span>135</span>/<span>8</span> <span>(<span>16.1</span>/<span>17</span>)</span></span>
                            </span> 

                            <span className="current_match_date running_match block_target text-right">
                                Target<span>123</span>
                              </span>
                            </div>
                        </div>
                        <div className="match_winning_score">
                          <span className="cricket_team_name">
                            <span>SA </span>
                            won by <span>3 </span>
                            wickets (<span>5 </span> balls left)
                          </span>
                          <span className="cricket_team_name dls">(DLS method)</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="cricket_box">
                        <div className="cricket_box_first_div">
                          <div className="">
                            <span className="super_eight">Super Eight <span className="white_circle"></span> T20 </span>
                            <span className="matches_number"><span>50 </span>of <span>55</span></span>
                          </div>
                          <div>
                            <span className="current_match_date">Mon, 24 Jun</span>
                          </div>
                        </div>
                        <div className="cricket_box_second_div">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">West Indies</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date">
                              <span><span>135</span>/<span>8</span> <span>(20)</span></span>
                            </span> 
                            </div>
                        </div>

                        <div className="cricket_box_second_div align-items-start">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">South Africa</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date running_match">
                              <span><span>135</span>/<span>8</span> <span>(<span>16.1</span>/<span>17</span>)</span></span>
                            </span> 

                            <span className="current_match_date running_match block_target text-right">
                                Target<span>123</span>
                              </span>
                            </div>
                        </div>
                        <div className="match_winning_score">
                          <span className="cricket_team_name">
                            <span>SA </span>
                            won by <span>3 </span>
                            wickets (<span>5 </span> balls left)
                          </span>
                          <span className="cricket_team_name dls">(DLS method)</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="cricket_box">
                        <div className="cricket_box_first_div">
                          <div className="">
                            <span className="super_eight">Super Eight <span className="white_circle"></span> T20 </span>
                            <span className="matches_number"><span>50 </span>of <span>55</span></span>
                          </div>
                          <div>
                            <span className="current_match_date">Mon, 24 Jun</span>
                          </div>
                        </div>
                        <div className="cricket_box_second_div">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">West Indies</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date">
                              <span><span>135</span>/<span>8</span> <span>(20)</span></span>
                            </span> 
                            </div>
                        </div>

                        <div className="cricket_box_second_div align-items-start">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">South Africa</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date running_match">
                              <span><span>135</span>/<span>8</span> <span>(<span>16.1</span>/<span>17</span>)</span></span>
                            </span> 

                            <span className="current_match_date running_match block_target text-right">
                                Target<span>123</span>
                              </span>
                            </div>
                        </div>
                        <div className="match_winning_score">
                          <span className="cricket_team_name">
                            <span>SA </span>
                            won by <span>3 </span>
                            wickets (<span>5 </span> balls left)
                          </span>
                          <span className="cricket_team_name dls">(DLS method)</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="cricket_box">
                        <div className="cricket_box_first_div">
                          <div className="">
                            <span className="super_eight">Super Eight <span className="white_circle"></span> T20 </span>
                            <span className="matches_number"><span>50 </span>of <span>55</span></span>
                          </div>
                          <div>
                            <span className="current_match_date">Mon, 24 Jun</span>
                          </div>
                        </div>
                        <div className="cricket_box_second_div">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">West Indies</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date">
                              <span><span>135</span>/<span>8</span> <span>(20)</span></span>
                            </span> 
                            </div>
                        </div>

                        <div className="cricket_box_second_div align-items-start">
                          <div>
                            <div className="team_name_with_flag">
                              <div className="cricket_team_flag">
                                <img src={cricketteamflag} alt="flag"></img>
                              </div>
                              <div>
                                <span className="cricket_team_name">South Africa</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="current_match_date running_match">
                              <span><span>135</span>/<span>8</span> <span>(<span>16.1</span>/<span>17</span>)</span></span>
                            </span> 

                            <span className="current_match_date running_match block_target text-right">
                                Target<span>123</span>
                              </span>
                            </div>
                        </div>
                        <div className="match_winning_score">
                          <span className="cricket_team_name">
                            <span>SA </span>
                            won by <span>3 </span>
                            wickets (<span>5 </span> balls left)
                          </span>
                          <span className="cricket_team_name dls">(DLS method)</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
              </div>

              <div className="single_scorebox_with_btns">
                    <div className="scorebox_left_part">
                    <div className="bat_and_flag">
                        <div>
                          <img src={batBall} alt="batBall"></img>
                        </div>
                        <div className="scorebox_flag">
                          <img src={cricketteamflag} alt="flag"></img>
                        </div>
                        <div className="scorebox_content">
                          <span>Gloucestershire</span>
                          <span> Vs </span>
                          <span>Kent</span>
                        </div>
                      </div>
                      <span className="scorebox_date">05 Jul 19:00</span>
                    </div>
                    <div className="scorebox_right_part">
                      <button>1.75</button>
                      <button>1.84</button>
                      <button>-</button>
                      <button>-</button>
                      <button>2.2</button>
                      <button>2.34</button>
                    </div>
              </div>

              <div className="single_scorebox_with_btns">
                    <div className="scorebox_left_part">
                    <div className="bat_and_flag">
                        <div>
                          <img src={batBall} alt="batBall"></img>
                        </div>
                        <div className="scorebox_flag">
                          <img src={cricketteamflag} alt="flag"></img>
                        </div>
                        <div className="scorebox_content">
                          <span>Gloucestershire</span>
                          <span> Vs </span>
                          <span>Kent</span>
                        </div>
                      </div>
                      <span className="scorebox_date">05 Jul 19:00</span>
                    </div>
                    <div className="scorebox_right_part">
                      <button>1.75</button>
                      <button>1.84</button>
                      <button>-</button>
                      <button>-</button>
                      <button>2.2</button>
                      <button>2.34</button>
                    </div>
              </div>

              <div className="single_scorebox_with_btns">
                    <div className="scorebox_left_part">
                    <div className="bat_and_flag">
                        <div className="invisible">
                          <img src={batBall} alt="batBall"></img>
                        </div>
                        <div className="scorebox_flag invisible">
                          <img src={cricketteamflag} alt="flag"></img>
                        </div>
                        <div className="scorebox_content">
                          <span>Gloucestershire</span>
                          <span> Vs </span>
                          <span>Kent</span>
                        </div>
                      </div>
                      <span className="scorebox_date">05 Jul 19:00</span>
                    </div>
                    <div className="scorebox_right_part">
                      <button>1.75</button>
                      <button>1.84</button>
                      <button>-</button>
                      <button>-</button>
                      <button>2.2</button>
                      <button>2.34</button>
                    </div>
              </div>

              <div className="single_scorebox_with_btns">
                    <div className="scorebox_left_part">
                    <div className="bat_and_flag">
                        <div className="invisible">
                          <img src={batBall} alt="batBall"></img>
                        </div>
                        <div className="scorebox_flag invisible">
                          <img src={cricketteamflag} alt="flag"></img>
                        </div>
                        <div className="scorebox_content">
                          <span>Gloucestershire</span>
                          <span> Vs </span>
                          <span>Kent</span>
                        </div>
                      </div>
                      <span className="scorebox_date">05 Jul 19:00</span>
                    </div>
                    <div className="scorebox_right_part">
                      <button>1.75</button>
                      <button>1.84</button>
                      <button>-</button>
                      <button>-</button>
                      <button>2.2</button>
                      <button>2.34</button>
                    </div>
              </div>

              <div className="single_scorebox_with_btns">
                    <div className="scorebox_left_part">
                    <div className="bat_and_flag">
                        <div className="invisible">
                          <img src={batBall} alt="batBall"></img>
                        </div>
                        <div className="scorebox_flag invisible">
                          <img src={cricketteamflag} alt="flag"></img>
                        </div>
                        <div className="scorebox_content">
                          <span>Gloucestershire</span>
                          <span> Vs </span>
                          <span>Kent</span>
                        </div>
                      </div>
                      <span className="scorebox_date">05 Jul 19:00</span>
                    </div>
                    <div className="scorebox_right_part">
                      <button>1.75</button>
                      <button>1.84</button>
                      <button>-</button>
                      <button>-</button>
                      <button>2.2</button>
                      <button>2.34</button>
                    </div>
              </div>

              <div className="single_scorebox_with_btns">
                    <div className="scorebox_left_part">
                    <div className="bat_and_flag">
                        <div className="invisible">
                          <img src={batBall} alt="batBall"></img>
                        </div>
                        <div className="scorebox_flag invisible">
                          <img src={cricketteamflag} alt="flag"></img>
                        </div>
                        <div className="scorebox_content">
                          <span>Gloucestershire</span>
                          <span> Vs </span>
                          <span>Kent</span>
                        </div>
                      </div>
                      <span className="scorebox_date">05 Jul 19:00</span>
                    </div>
                    <div className="scorebox_right_part">
                      <button>1.75</button>
                      <button>1.84</button>
                      <button>-</button>
                      <button>-</button>
                      <button>2.2</button>
                      <button>2.34</button>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="game_providers-section">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="game_providers_main">
                    <div className="game_provide_both_sides">
                      <div className="provider_left_side">
                        <div className="providersImg">
                          <img src={providersImg} alt="provider"></img>
                        </div>
                        <h6 className="providers_title m-0">Providers</h6>
                      </div>
                      {/* <div>
                        <Link className="providers_more_option">More</Link>
                      </div> */}
                    </div>

                    <div className="providers_sliders">
                    <Swiper
                    slidesPerView={3.2}
                    spaceBetween={8}
                    pagination={{
                      clickable: true,
                    }}

                    breakpoints={{
                      990: {
                        slidesPerView: 6.9,
                        spaceBetween: 10,
                      }
                    }}
                    modules={[]}
                    className="mySwiper"
                  >
                    {
                      gameProviderImages.map((gameProviderImg) => 
                        <SwiperSlide>
                          <div className="providerSingleSlider">
                            <img src={gameProviderImg} alt="trending" className=""></img>
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
                        slidesPerView: 6.9,
                        spaceBetween: 10,
                      }
                    }}
                    modules={[]}
                    className="mySwiper pt-2 gap_slider"
                  >
                    {
                      gameProviderImages.map((gameProviderImg) => 
                        <SwiperSlide>
                          <div className="providerSingleSlider">
                            <img src={gameProviderImg} alt="trending" className=""></img>
                          </div>
                        </SwiperSlide>
                      )
                    }
                  </Swiper>
                    </div>

                    <div className="text-center">
                        {/* <Link className="providers_more_option">More</Link> */}
                        <button className="providers_more_option">More</button>
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
                          <button className="top_games_actionBtn">SIGN UP NOW</button>
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
              <button className="bet_race_actionBtn">Latest bets</button>
              <button className="bet_race_actionBtn">High rollers</button>
              <button className="bet_race_actionBtn">Wager contest</button>
            </div>

            <div className="bet_and_race_table_box">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Game</th>
                  <th scope="col">Player</th>
                  <th scope="col">Bet Amount</th>
                  <th scope="col">Multiplier</th>
                  <th scope="col">Profit Amount</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {/* <tr>
                  <td>
                    <img src={betIcon01} className="game_table_img"></img>
                    Wild Bounty Showdown
                  </td>
                  <td>Dagfbdgfprac</td>
                  <td>
                    6.00
                    <img src={betAmount01} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount01} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                  <img src={betIcon01} className="game_table_img"></img>
                    3 Hot Chillies
                  </td>
                  <td>Cruz94</td>
                  <td>
                    16.411
                    <img src={betAmount02} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount02} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                  <img src={betIcon01} className="game_table_img"></img>
                    Twist
                  </td>
                  <td>Elfwadbbprac</td>
                  <td>
                    6.00
                    <img src={betAmount01} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount01} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                {/* <tr>
                
                  <td>
                  <img src={betIcon01} className="game_table_img"></img>
                    Madame Destiny Megaw...
                  </td>
                  <td>cestmoi</td>
                  <td>
                    16.411
                    <img src={betAmount02} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount02} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                {/* <tr>
                  <td>
                  <img src={betIcon01} className="game_table_img"></img>
                  Fire in the Hole 2
                  </td>
                  <td>WnTnKtoG</td>
                  <td>
                    16.411
                    <img src={betAmount03} alt="etherum" className="game_table_img"></img>
                  </td>
                  <td>0.00x</td>
                  <td>
                    -6.00
                  <img src={betAmount03} alt="etherum" className="game_table_img"></img>
                  </td>
                </tr> */}
                
              </tbody>
            </table>
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
                <button>My Bets</button>
              </div>
              <div className="winners_second-tab">
                <button>winners of the day</button>
              </div>
              <div className="winners_third-tab">
                <button>High Rollers</button>
              </div>
            </div>

            <div className="game_winners_main_table">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Game</th>
                  <th scope="col">Winners</th>
                  <th scope="col">Payout</th>
                </tr>
              </thead>
              <tbody className="table-body02">
                {/* <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td className="green_text">
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td className="">
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td className="green_text">
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td className="">
                    -BDT117.49
                    <img src={etherum} alt="etherum"></img>
                  </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr>
                <tr>
                  <td>Story Of Vikings</td>
                  <td>-</td>
                  <td>
                    -BDT117.49
                    <img src={bitcoin} alt="etherum"></img>
                    </td>
                </tr> */}
              </tbody>
            </table>
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

export default Home;
