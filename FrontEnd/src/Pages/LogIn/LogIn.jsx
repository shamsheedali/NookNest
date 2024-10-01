import React from "react";
import "./LogIn.css";
import NookNestLogo from "../../Assets/Images/NookNest logo.svg";
import LoginImg from "../../Assets/Images/Login-img.jpeg";

const LogIn = () => {
  return (
    <div className="login-backGround">
      <div class="login-Container">
        <div class="mainRight">
          {/* <!-- --logo--img --> */}
          <img class="login-logo" src={NookNestLogo} alt="" />

          {/* <!-- --main--img --> */}
          <img class="sign-up-img" src={LoginImg} alt="" />
        </div>

        <div class="mainLeft">
          <h1 className="login-title">Log In</h1>
          {/* <!-- --LOG IN--FORM --> */}
          <form action="" className="login-form">
            <div>
              <label for="">Email Address</label>
              <input type="email" />
            </div>
            <div>
              <label for="">Password</label>
              <input type="password" />
            </div>

            <a href="">forgot password?</a>

            <button>LOG IN</button>

            <p>
              Don't have an account?<a href="">SignIn</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
