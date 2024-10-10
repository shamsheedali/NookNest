import React from "react";
import "./SignUp.css";
import NookNestLogo from "../../../assets/images/logos/NookNest logo.svg";
import SignUpImg from "../../../assets/images/auth/Sign up image.jpg";

const SignUp = () => {
  return (
    <div className="signup-backGround">
      <div class="signup-Container">
        <div class="mainLeft">
          <h1 className="signup-title">Sign up</h1>
          {/* <!-- --SIGN UP--FORM --> */}
          <form action="" className="signup-form">
            <div>
              <label for="">Name</label>
              <input type="text" />
            </div>
            <div>
              <label for="">Email Address</label>
              <input type="email" />
            </div>
            <div>
              <label for="">Password</label>
              <input type="password" />
            </div>

            <p>
              Already a member? <a href="">LogIn</a>
            </p>

            <button>Get OTP</button>
          </form>
        </div>

        <div class="mainRight">
          {/* <!-- --logo--img --> */}
          <img class="logo" src={NookNestLogo} alt="" />

          {/* <!-- --main--img --> */}
          <img class="sign-up-img" src={SignUpImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
