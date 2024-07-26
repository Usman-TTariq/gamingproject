// import React from 'react'
// import UserLayout from '../../components/Layout/userlayout';
// import CustomBanner from '../../components/CustomBanner';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import CustomButton from '../../components/CustomButton';
// import { blogImg01, blogImg02, blogImg03, blogImg04, blogImg05, blogImg06, blogImg07, blogImg08, blogImg09 } from '../../asserts/images';
// import "./style.css"

// const Blogs = () => {
//   return (
//     <>
//     <UserLayout>

//       <CustomBanner text="blogs"/>

//       <section className='blogs_section'>
//         <Container>
//           <Row>
//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg01} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg02} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg03} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg04} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg05} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg06} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg07} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg08} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>

//               <Col xs={12} sm={6} lg={4}>
//                 <div className='main_blog_card'>
//                   <div className='blog_card_img'>
//                     <img src={blogImg09} alt='blog' className='img-fluid'></img>
//                   </div>

//                   <div className='blog_card_content'>
//                       <p className='blog_card_title'>Lorem Ipsum Is Dummy</p>

//                       <p className='blog_card_para'>
//                       Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply 
//                       </p>

//                       <div>
//                       <CustomButton
//                         type="button"
//                         className="blog_actionBtn"
//                         text="Read More"
//                         // onClick={() => navigate("/about")}
//                       />
//                       </div>
//                   </div>
//                 </div>
//               </Col>
//           </Row>
//         </Container>
//       </section>

//     </UserLayout>
//   </>
//   )
// }

// export default Blogs