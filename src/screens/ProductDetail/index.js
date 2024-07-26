
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import CustomBanner from '../../components/CustomBanner';
// import UserLayout from '../../components/Layout/userlayout';
// import "./style.css";
// import {productDetailImg, productDetailImg02, productDetailImg03, productDetailImg04, productDetailImg05, productDetailImg06, circleImg, heartwithquestionMart, truck, productColorSelectionImg01, productColorSelectionImg02, productColorSelectionImg03, productColorSelectionImg04, productColorSelectionImg05, productColorSelectionImg06, productColorSelectionImg07, productColorSelectionImg08, productColorSelectionImg09, productColorSelectionImg10, insideShade, outsideShade, measure01, scale01, measure02, scale02, lift01, lift02, upgradeImg, paypal, warranty_icon } from '../../asserts/images';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Accordion from 'react-bootstrap/Accordion';


// const ProductDetail = () => {

//     const images = [productDetailImg, productDetailImg02, productDetailImg03, productDetailImg04, productDetailImg05, productDetailImg06];

//     const [selectedImage, setSelectedImage] = useState(images[0]);

//   return (
//     <>
//         <UserLayout>

//             <CustomBanner text="product"/>

//             <section className='product_detail_section'>
//                 <Container>
//                     <Row>
//                         <Col xs={10} sm={10} lg={6} className='mx-auto'>
//                             <div className='main_product_images'>
//                                 <div className='product_single_image'>
//                                     <img src={selectedImage} alt='product' className='img-fluid'></img>
//                                 </div>
//                             </div>

//                             <div className='thumbnail_images'>

//                             <div className="thumbnail-container">
//                                 {images.map((image, index) => (
//                                 <img
//                                     key={index}
//                                     src={image}
//                                     alt={`Thumbnail ${index}`}
//                                     className="thumbnail single_thumbnail_img"
//                                     onClick={() => setSelectedImage(image)}
                                    
//                                 />
//                                 ))}
//                             </div>

//                             </div>
//                         </Col>

//                         <Col xs={10} sm={12} lg={6} className='mx-auto'>
//                             <div>
//                                 <div className='d-flex gap-2 align-items-baseline'>
//                                     <div class="product_circle_img">
//                                         <img src={circleImg} alt='circle'></img>
//                                     </div>
//                                     <p class="product_card_heading text-uppercase p-0 title_with_circle">essential</p>
//                                 </div>

//                                 <div>
//                                     <h4 className='product_detail_title'>Cellular Shade</h4>
//                                 </div>

//                                 <div className='for_rating'>

//                                 </div>

//                                 <div>
//                                     <h6 className='eligible_discounts_title'>Eligible Discounts:</h6>

//                                     <div>
//                                         <span className='eligible_discount_percentage'><span className='red_circle'></span> 45% Off $399+</span>

//                                         <Link>
//                                             <span className='eligible_discounts_terms'>Terms</span>
//                                         </Link>
//                                     </div>

//                                     <div>
//                                         <div className='d-flex gap-2 align-items-baseline'>
//                                             <h6 className='kid_friendly_title'>kid friendly</h6>
//                                             <div className='heart_with_questionmark'>
//                                                 <img src={heartwithquestionMart} alt='heart'></img>
//                                             </div>
//                                         </div>

//                                         <div className='d-flex gap-2 align-items-center align-items-lg-center align-items-xl-baseline'>
//                                             <div className='truck_img'>
//                                                 <img src={truck} alt='truck'></img>
//                                             </div>
//                                             <p className='m-0 kid_friendly_para'>Your custom-made shades are estimated to ship in 7 ~ 9 business days.</p>
//                                         </div>
//                                     </div>
//                                 </div>


//                               <div className='product_detail_accordian'>
//                               <Accordion defaultActiveKey="0" className='pt-3'>

//                                 <Accordion.Item eventKey="0">
//                                     <Accordion.Header>Selected Color: Perfect White</Accordion.Header>
//                                     <Accordion.Body>

//                                         <div className='d-flex gap-2 align-items-end flex-wrap flex-sm-nowrap flex-lg-nowrap'>
//                                             <span className='tip_circle'>TIP</span>
//                                             <span className='free_sample_text'>For a true color comparison, please order a free sample</span>
//                                         </div>

//                                         <form>
//                                                <div className='all_color_selection_inputs'>

//                                                <div className="form-check p-0">
                                                    
//                                                     <div className='input_with_img'>
//                                                         <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>

//                                                         <img src={productColorSelectionImg01} alt='selectionImg' className='img-fluid'></img>
//                                                     </div>

//                                                     <label className="form-check-label selection_input_name" for="flexRadioDefault1">
//                                                         Perfect White
//                                                         <span className='input_free_sample_text'>Free Sample</span>
//                                                     </label>

//                                                     {/* <span className='input_free_sample_text'>Free Sample</span> */}

//                                                 </div>

//                                                 <div className="form-check p-0">

//                                                 <div className='input_with_img'>
//                                                         <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"></input>

//                                                         <img src={productColorSelectionImg02} alt='selectionImg' className='img-fluid'></img>
//                                                         </div>
//                                                         <label className="form-check-label selection_input_name" for="flexRadioDefault2">
//                                                             Porcelain
//                                                             <span className='input_free_sample_text'>Free Sample</span>
//                                                         </label>

//                                                 </div>

//                                                 <div className="form-check p-0">

//                                                     <div className='input_with_img'>
//                                                             <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"></input>

//                                                             <img src={productColorSelectionImg03} alt='selectionImg' className='img-fluid'></img>
//                                                             </div>
//                                                             <label className="form-check-label selection_input_name" for="flexRadioDefault3">
//                                                                 Sand
//                                                                 <span className='input_free_sample_text'>Free Sample</span>
//                                                             </label>

//                                                     </div>

//                                                     <div className="form-check p-0">

//                                                     <div className='input_with_img'>
//                                                             <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"></input>

//                                                             <img src={productColorSelectionImg04} alt='selectionImg' className='img-fluid'></img>
//                                                             </div>
//                                                             <label className="form-check-label selection_input_name" for="flexRadioDefault4">
//                                                                 Greige
//                                                             </label>

//                                                     </div>

//                                                     <div className="form-check p-0">

//                                                     <div className='input_with_img'>
//                                                             <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"></input>

//                                                             <img src={productColorSelectionImg05} alt='selectionImg' className='img-fluid'></img>
//                                                             </div>
//                                                             <label className="form-check-label selection_input_name" for="flexRadioDefault5">
//                                                             Taupe
//                                                             <span className='input_free_sample_text'>Free Sample</span>
//                                                             </label>

//                                                     </div>

//                                                     <div className="form-check p-0">

//                                                     <div className='input_with_img'>
//                                                             <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault6"></input>

//                                                             <img src={productColorSelectionImg06} alt='selectionImg' className='img-fluid'></img>
//                                                             </div>
//                                                             <label className="form-check-label selection_input_name" for="flexRadioDefault6">
//                                                             Cork
//                                                             <span className='input_free_sample_text'>Free Sample</span>
//                                                             </label>

//                                                     </div>

//                                                     <div className="form-check p-0">

//                                                     <div className='input_with_img'>
//                                                             <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault7"></input>

//                                                             <img src={productColorSelectionImg07} alt='selectionImg' className='img-fluid'></img>
//                                                             </div>
//                                                             <label className="form-check-label selection_input_name" for="flexRadioDefault7">
//                                                             Brown
//                                                             <span className='input_free_sample_text'>Free Sample</span>
//                                                             </label>

//                                                     </div>

//                                                     <div className="form-check p-0">

//                                                     <div className='input_with_img'>
//                                                             <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault8"></input>

//                                                             <img src={productColorSelectionImg08} alt='selectionImg' className='img-fluid'></img>
//                                                             </div>
//                                                             <label className="form-check-label selection_input_name" for="flexRadioDefault8">
//                                                             Gray
//                                                             <span className='input_free_sample_text'>Free Sample</span>
//                                                             </label>

//                                                     </div>

//                                                     <div className="form-check p-0">

//                                                     <div className='input_with_img'>
//                                                             <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault9"></input>

//                                                             <img src={productColorSelectionImg09} alt='selectionImg' className='img-fluid'></img>
//                                                             </div>
//                                                             <label className="form-check-label selection_input_name" for="flexRadioDefault9">
//                                                             Stone Wall
//                                                             <span className='input_free_sample_text'>Free Sample</span>
//                                                             </label>

//                                                     </div>

//                                                     <div className="form-check p-0">

//                                                     <div className='input_with_img'>
//                                                             <input className="form-check-input color_selection_input" type="radio" name="flexRadioDefault" id="flexRadioDefault10"></input>

//                                                             <img src={productColorSelectionImg10} alt='selectionImg' className='img-fluid'></img>
//                                                             </div>
//                                                             <label className="form-check-label selection_input_name" for="flexRadioDefault10">
//                                                             Basalt
//                                                             <span className='input_free_sample_text'>Free Sample</span>
//                                                             </label>

//                                                     </div>

                                                    
//                                                </div>
//                                         </form>
                                        
//                                     </Accordion.Body>
//                                 </Accordion.Item>

//                                 <Accordion.Item eventKey="1">
//                                     <Accordion.Header>Measure Your Window</Accordion.Header>
//                                     <Accordion.Body>
//                                        <div className='window_first_box'>
//                                             <div className='d-flex gap-2 heart_with_questionmark align-items-center pb-3'>
//                                                 <h6 className='kid_friendly_title mound_type text-capitalize'>Mound Type</h6>
//                                                 <img src={heartwithquestionMart} alt='heart'></img>
//                                             </div>

//                                             <div className='d-flex gap-4'>
//                                                 <div className='window_size_img'>
//                                                     <img src={insideShade} alt='inside'></img>

//                                                     <label className="form-check-label window_size_label" for="">
//                                                         Inside
//                                                     </label>

//                                                 </div>

//                                                 <div className='window_size_img'>
//                                                     <img src={outsideShade} alt='inside'></img>

//                                                     <label className="form-check-label window_size_label" for="">
//                                                         Outside
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                        </div>

//                                        <div className='window_first_box'>
//                                             <div className='d-flex justify-content-between heart_with_questionmark align-items-center pb-3 flex-wrap flex-sm-nowrap flex-lg-nowrap'>
//                                                 <h6 className='kid_friendly_title mound_type text-capitalize enter_measurement_title'>Enter Measurements</h6>
//                                                 <button className='help_me_measure'>Help Me Measure</button>
//                                             </div>

//                                             <div className='d-flex gap-2 align-items-end align-items-lg-center flex-wrap flex-sm-nowrap flex-lg-nowrap'>
//                                                 <span className='tip_circle'>TIP</span>
//                                                 <span className='free_sample_text'>Always reference <Link>product specifications</Link>  below before measuring.</span>
//                                             </div>

//                                             <div className='measurement_box_with_img'>
//                                                 <div>
//                                                     <img src={measure01} alt='measure' className='img-fluid'></img>
//                                                 </div>
//                                                 <div className='pt-2'>
//                                                     <span className='free_sample_text block'>Width (inches)</span>
//                                                     <div className='d-flex gap-1'>
//                                                         <select class="form-select window_size_selection" aria-label="Default select example">
//                                                         <option selected>24</option>
//                                                         <option value="1">0</option>
//                                                         <option value="2">1</option>
//                                                         <option value="3">2</option>
//                                                         <option value="4">3</option>
//                                                         </select>

//                                                         <select class="form-select window_size_selection" aria-label="Default select example">
//                                                         <option selected>0</option>
//                                                         <option value="1">1</option>
//                                                         <option value="2">2</option>
//                                                         <option value="3">3</option>
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <img src={scale01} alt='scale' className='img-fluid'></img>
//                                                 </div>
//                                             </div>


//                                             <div className='measurement_box_with_img'>
//                                                 <div>
//                                                     <img src={measure02} alt='measure' className='img-fluid'></img>
//                                                 </div>
//                                                 <div className='pt-2'>
//                                                     <span className='free_sample_text block'>Width (inches)</span>
//                                                     <div className='d-flex gap-1'>
//                                                         <select class="form-select window_size_selection" aria-label="Default select example">
//                                                         <option selected>24</option>
//                                                         <option value="1">0</option>
//                                                         <option value="2">1</option>
//                                                         <option value="3">2</option>
//                                                         <option value="4">3</option>
//                                                         </select>

//                                                         <select class="form-select window_size_selection" aria-label="Default select example">
//                                                         <option selected>0</option>
//                                                         <option value="1">1</option>
//                                                         <option value="2">2</option>
//                                                         <option value="3">3</option>
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <img src={scale02} alt='scale' className='img-fluid'></img>
//                                                 </div>
//                                             </div>

//                                             <div className='gurantee_your_fit_main'>
//                                                 <h6 class="kid_friendly_title m-0">Guarantee your FIT!</h6>

//                                                 <div>
//                                                 <div class="form-check m-0">
//                                                     <input class="form-check-input" type="checkbox" value="" id="ghtght"></input>
//                                                     <label class="form-check-label measuring_protection" for="ghtght">
//                                                         Add our Measuring Protection Guarantee <span className='zero_dollar'>+$0</span>
//                                                     </label>
//                                                     </div>
//                                                 </div>

//                                                 <div>
//                                                     <Link className='what_is_it_text'>What is it?</Link>
//                                                 </div>

//                                             </div>

                                                
//                                        </div>

//                                         <div class="d-flex gap-2 heart_with_questionmark align-items-center py-3">
//                                                     <h6 class="kid_friendly_title mound_type text-capitalize">Room Name</h6>
//                                                     <img src={heartwithquestionMart} alt="heart"></img>
//                                                 </div>
                                                
//                                                <div className='selection_with_input'>
//                                                <select class="form-select room_name_selection" aria-label="Default select example">
//                                                     <option selected>Select</option>
//                                                     <option value="1">One</option>
//                                                     <option value="2">Two</option>
//                                                     <option value="3">Three</option>
//                                                     <option value="1">One</option>
//                                                     <option value="2">Two</option>
//                                                     <option value="3">Three</option>
//                                                     </select>

//                                                     <div class="extra_room_name">
//                                                         <input type="text" class="form-control" id="random" placeholder="Ex: West Wall"></input>
//                                                         </div>
//                                                </div>
//                                     </Accordion.Body>
//                                 </Accordion.Item>

//                                 <Accordion.Item eventKey="2">
//                                     <Accordion.Header>Customize Your Order</Accordion.Header>
//                                     <Accordion.Body>
//                                         <div>

//                                         <div className='window_first_box'>
//                                             <div className='d-flex gap-2 heart_with_questionmark align-items-center pb-3'>
//                                                 <h6 className='kid_friendly_title mound_type text-capitalize'>Lift Style</h6>
//                                             </div>

//                                             <div className='d-flex gap-4 pl-3 flex-wrap flex-sm-nowarp flex-lg-nowrap'>
//                                                 <div className='window_size_img'>
//                                                     <img src={lift01} alt='inside'></img>

//                                                     <label className="form-check-label window_size_label" for="">
//                                                         Cordless
//                                                     </label>

//                                                     <div>
//                                                         <span className='free_text'>FREE</span>
//                                                     </div>

//                                                     <div className='d-flex gap-2 align-items-baseline'>
//                                                         <h6 className='kid_friendly_title'>kid friendly</h6>
//                                                         <div className='heart_with_questionmark'>
//                                                             <img src={heartwithquestionMart} alt='heart'></img>
//                                                         </div>
//                                                     </div>

//                                                 </div>

//                                                 <div className='window_size_img'>
//                                                     <img src={lift02} alt='inside'></img>

//                                                     <label className="form-check-label window_size_label" for="">
//                                                         Motorized Wand
//                                                     </label>

//                                                     <div>
//                                                         <span className='free_text text-decoration-line-through'>$0</span>
//                                                     </div>

//                                                     <div>
//                                                         <span className='ten_percent_off_text'>10% Off</span>
//                                                         <span className='free_text pl-2'>$0</span>
//                                                     </div>

//                                                     <div className='my-3'>
//                                                         <label className='m-0 lift_style_label pb-1'>Wand Length</label>
//                                                         <select class="form-select lift_style_selection" aria-label="Default select example">
//                                                         <option selected>Select</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                         </select>
//                                                     </div>

//                                                     <div className='my-3'>
//                                                         <label className='m-0 lift_style_label pb-1'>Wand Location</label>
//                                                         <select class="form-select lift_style_selection" aria-label="Default select example">
//                                                         <option selected>Select</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                         </select>
//                                                     </div>

//                                                     <div className='my-3'>
//                                                         <label className='m-0 lift_style_label pb-1'>Wand Color</label>
//                                                         <select class="form-select lift_style_selection" aria-label="Default select example">
//                                                         <option selected>Select</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                         </select>
//                                                     </div>

//                                                     <div className='my-3'>
//                                                         <label className='m-0 lift_style_label pb-1 d-flex gap-1'>Battery Charger 
//                                                         <div className='heart_with_questionmark'>
//                                                             <img src={heartwithquestionMart} alt='heart'></img>
//                                                         </div>
//                                                         </label>
//                                                         <select class="form-select lift_style_selection" aria-label="Default select example">
//                                                         <option selected>Select</option>
//                                                         <option value="1">One</option>
//                                                         <option value="2">Two</option>
//                                                         <option value="3">Three</option>
//                                                         </select>
//                                                     </div>

//                                                     <div className='d-flex gap-2 align-items-baseline'>
//                                                         <h6 className='kid_friendly_title'>kid friendly</h6>
//                                                         <div className='heart_with_questionmark'>
//                                                             <img src={heartwithquestionMart} alt='heart'></img>
//                                                         </div>
//                                                     </div>

//                                                 </div>
//                                             </div>
//                                        </div>

//                                        <div className='d-flex gap-2 heart_with_questionmark align-items-center py-3'>
//                                                 <h6 className='kid_friendly_title mound_type text-capitalize'>Upgrades</h6>
//                                             </div>

//                                             <div className='d-flex gap-4'>
//                                                 <div className='window_size_img'>
//                                                     <img src={upgradeImg} alt='inside'></img>

//                                                     <label className="form-check-label window_size_label" for="">
//                                                         NEW
//                                                     </label>

//                                                     <div className='d-flex gap-2 align-items-baseline'>
//                                                         <h6 className='kid_friendly_title'>No Drill Blinds</h6>
//                                                         <div className='heart_with_questionmark'>
//                                                             <img src={heartwithquestionMart} alt='heart'></img>
//                                                         </div>
//                                                     </div>

//                                                     <div>
//                                                         <span className='free_text text-decoration-line-through'>$0</span>
//                                                     </div>

//                                                     <div>
//                                                     <span class="ten_percent_off_text">10% Off</span>
//                                                     <span class="free_text pl-2">$0</span>
//                                                     </div>

//                                                 </div>
//                                                 </div>

//                                         </div>
//                                     </Accordion.Body>
//                                 </Accordion.Item>
//                                 </Accordion>
//                               </div>

                                    
//                                     <div className='coupon_with_payment'>
//                                         <div className='coupon_box'>
//                                             <p className='coupon_title'>Coupon:</p>

//                                             <div class="form-check">
//                                                 <input class="form-check-input" type="checkbox" value="" id="coupon"></input>
//                                                 <label class="form-check-label coupon_text" for="coupon">
//                                                     Apply <span className='coupon_discount_bold'>45% Off $0</span> coupon
//                                                 </label>
//                                                 <Link className='coupon_terms'>Terms</Link>
//                                                 </div>
//                                         </div>

//                                         <div className='quantity_quote'>
//                                             <div className='qty_text_and_actionBtn'>
//                                                 <div className='d-flex align-items-center gap-2'>
//                                                 <span className='qty_text'>Qty</span>
//                                                 <select class="form-select qty_text_selection" aria-label="Default select example">
//                                                     <option selected>1</option>
//                                                     <option value="1">2</option>
//                                                     <option value="2">3</option>
//                                                     <option value="3">4</option>
//                                                     </select>
//                                                 </div>

//                                                 <div>
//                                                     <button className='request_actionBtn'>Request A Quote</button>
//                                                 </div>
//                                             </div>

//                                             <div>
//                                                 <span className='interest_free'>Pay in 4 interest-free payments of $14.25 with </span>
//                                                 <img src={paypal} alt='paypal' className='paypalImg'></img>
//                                                 <span><Link className='learn_more_about_interest'>Learn more</Link></span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className='warranty_options_box'>
//                                         <div className='warranty_options_head'>
//                                             <div className="warranty_icon_img"> 
//                                                 <img src={warranty_icon} alt='icon'></img>
//                                             </div>

//                                             <h6 class="kid_friendly_title text-capitalize">Warranty Options</h6>

//                                             <span>
//                                                 <Link className='coupon_terms inline-block'>Details</Link>
//                                             </span>
//                                         </div>

//                                         <div>
//                                             <div className='single_warranty'>
//                                                 <div>
//                                                     <span class="window_size_label">3-Year Limited Warranty</span>
//                                                 </div>
//                                                 <div>
//                                                     <span class="free_text">FREE</span>
//                                                 </div>
//                                             </div>

//                                             <div className='single_warranty'>
//                                                 <div>
//                                                     <span class="window_size_label">5-Year Limited Warranty</span>
//                                                 </div>
//                                                 <div>
//                                                     <span class="free_text">$0</span>
//                                                 </div>
//                                             </div>

//                                             <div className='single_warranty'>
//                                                 <div>
//                                                     <span class="window_size_label">3-Year Unlimited Warranty</span>
//                                                 </div>
//                                                 <div>
//                                                     <span class="free_text">$0</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//         </UserLayout>
        
//     </>
//   )
// }

// export default ProductDetail