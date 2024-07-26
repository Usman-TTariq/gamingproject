// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import {
//   anonymous,
//   productsImg01,
//   productsImg02,
//   productsImg03,
//   productsImg04,
// } from "../../asserts/images";
// import CustomButton from "../../components/CustomButton";
// import "./style.css";
// import { useNavigate } from "react-router-dom";

// const BestProducts = (props) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <section className="best_products_section">
//         <Container>
//           <Row className={`align-items-end ${props.className}`}>
//             <Col xs={12} sm={12} lg={6}>
//               <div>
//                 <div className="d-flex align-items-center justify-content-start gap-4">
//                   <h2 className="primaryHeading">we provide</h2>
//                 </div>

//                 <div className="d-flex align-items-center justify-content-center gap-3">
//                   <h2 className="primaryHeading">
//                     the best <span className="productsBluefont">Products</span>
//                   </h2>
//                 </div>
//               </div>
//             </Col>

//             <Col xs={12} sm={12} lg={6}>
//               <div>
//                 <div className="anonymousImg">
//                   <img src={anonymous} alt="anonymous"></img>
//                 </div>

//                 <p class="welcome_para m-0">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incid idunt ut labore et dolore magna
//                   aliqua. Ut enim ad minim veniam, quis nostrud exe rcitation
//                   ullamco laboris nisi ut.
//                 </p>
//               </div>
//             </Col>
//           </Row>

//           <Row className="pt-5 position-relative">
//             <div className={`borders ${props.className}`}></div>

//             <div className={`borders02 ${props.className}`}></div>
//             <Col xs={10} sm={6} lg={3} className="mx-auto">
//               <div className="main_product_card">
//                 <div className="main_product_img">
//                   <img
//                     src={productsImg01}
//                     className="img-fluid"
//                     alt="productImg"
//                   ></img>
//                 </div>

//                 <p className="product_card_heading text-center">
//                   Roller Shades
//                 </p>

//                 <p className="product_card_detail_para">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the.
//                 </p>

//                 <div>
//                   <CustomButton
//                     type="button"
//                     className="yellowActionBtn w-100 mb-2 px-2"
//                     text="Request A Quote"
//                   />
//                 </div>

//                 <div>
//                   <CustomButton
//                     type="button"
//                     className="w-100 px-2"
//                     text="View Product"
//                     onClick={() => navigate("/product-detail")}
//                   />
//                 </div>
//               </div>
//             </Col>

//             <Col xs={10} sm={6} lg={3} className="mx-auto">
//               <div className="main_product_card">
//                 <div className="main_product_img">
//                   <img
//                     src={productsImg02}
//                     className="img-fluid"
//                     alt="productImg"
//                   ></img>
//                 </div>

//                 <p className="product_card_heading text-center">
//                   Roller Shades
//                 </p>

//                 <p className="product_card_detail_para">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the.
//                 </p>

//                 <div>
//                   <CustomButton
//                     type="button"
//                     className="yellowActionBtn w-100 mb-2 px-2"
//                     text="Request A Quote"
//                   />
//                 </div>

//                 <div>
//                   <CustomButton
//                     type="button"
//                     className="w-100 px-2"
//                     text="View Product"
//                     onClick={() => navigate("/product-detail")}
//                   />
//                 </div>
//               </div>
//             </Col>

//             <Col xs={10} sm={6} lg={3} className="mx-auto">
//               <div className="main_product_card">
//                 <div className="main_product_img">
//                   <img
//                     src={productsImg03}
//                     className="img-fluid"
//                     alt="productImg"
//                   ></img>
//                 </div>

//                 <p className="product_card_heading text-center">
//                   Roller Shades
//                 </p>

//                 <p className="product_card_detail_para">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the.
//                 </p>

//                 <div>
//                   <CustomButton
//                     type="button"
//                     className="yellowActionBtn w-100 mb-2 px-2"
//                     text="Request A Quote"
//                   />
//                 </div>

//                 <div>
//                   <CustomButton
//                     type="button"
//                     className="w-100 px-2"
//                     text="View Product"
//                     onClick={() => navigate("/product-detail")}
//                   />
//                 </div>
//               </div>
//             </Col>

//             <Col xs={10} sm={6} lg={3} className="mx-auto">
//               <div className="main_product_card">
//                 <div className="main_product_img">
//                   <img
//                     src={productsImg04}
//                     className="img-fluid"
//                     alt="productImg"
//                   ></img>
//                 </div>

//                 <p className="product_card_heading text-center">
//                   Roller Shades
//                 </p>

//                 <p className="product_card_detail_para">
//                   Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the.
//                 </p>

//                 <div>
//                   <CustomButton
//                     type="button"
//                     className="yellowActionBtn w-100 mb-2 px-2"
//                     text="Request A Quote"
//                   />
//                 </div>

//                 <div>
//                   <CustomButton
//                     type="button"
//                     className="w-100 px-2"
//                     text="View Product"
//                     onClick={() => navigate("/product-detail")}
//                   />
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default BestProducts;
