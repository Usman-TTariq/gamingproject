import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from 'react'
import "./style.css";
import { googelIcon } from '../../asserts/images';
import CustomButton from '../CustomButton';

const RegisterForm = () => {

    const [phone, setPhone] = useState("");
    
  return (
    <>
        

            <div class="mb-3">
                <label for="" class="form-label custom_form_label">County Code</label>
                <PhoneInput
            country={'us'}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            />
              </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label custom_form_label">Phone Number</label>
                <input type="email" class="form-control form_custom_input" id="exampleFormControlInput1"></input>
              </div>

              <div>

                <button className='otp_actionBtn'>Get OTP</button>

                <div className='otp_with_btn'>
                    <input type="text" class="form-control form_custom_input w-50" id=""></input>
                    <CustomButton
                  type="button"
                  className="register_actionBtn modal_signin_actionBtn w-50"
                  text="Submit"
                  // onClick={() => navigate("/")}
                />
                </div>

              </div>


              <div class="mb-3">
              <label for="exampleFormControlInput11" class="form-label custom_form_label">Password</label>
              <input type="password" class="form-control form_custom_input" id="exampleFormControlInput11"></input>
            </div>

            
            <div className="pt-1">
                <CustomButton
                  type="button"
                  className="register_actionBtn modal_signin_actionBtn w-100"
                  text="Sign In"
                  // onClick={() => navigate("/")}
                />
              </div>

              <div>
            <CustomButton
                  type="button"
                  className="forgot_password_actionBtn w-100"
                  text="Forgot Password"
                  // onClick={() => navigate("/")}
                />
            </div>

            <div className="text-center">
              <span className="dont_have_an_account">Don't have an account? </span>
              <CustomButton
                  type="button"
                  className="modal_register_actionBtn"
                  text="Register an Account"
                  // onClick={() => navigate("/")}
                />
            </div>

            <div className="login_directly">
              <span className="white_border_line"></span>
              <span className="login_directly_text">Log in directly with</span>
              <span className="white_border_line"></span>
            </div>

            <div className="text-center">
              <button className="google_signin">
                <img src={googelIcon}></img>
                <span className="signin_google_text">Sign in with Google</span>
              </button>
            </div>


        
    </>
  )
}

export default RegisterForm