import React, { useState } from "react";
import googleLogo from "../assets/googleLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import signUp from "../assets/signUp.png";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./TopNav";
import NavbarComp from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const SignUp = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  // axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/emp_register", registerData)
      .then((res) => {
        if(!res){
          alert("please fill all the field")
        }
        if(res.status!==200 || !res.data ){
          alert("please filled the field");
        }
        if (res.data.Status === "Success") {
          navigate("/signin");
        } 
        else {
          alert(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  };

  

  return (
    <div>
    <TopNav/>
    <NavbarComp />
    <div style={{ backgroundColor: "#E7E5E5" }}>
    <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <form
              
              // style={{ width: "500px" }}
              className="signUp_Form m-5"
            >
              <div
                style={{
                  backgroundColor: "#036E8C",
                  borderTopRightRadius: "8px",
                  borderTopLeftRadius: "8px",
                }}
                className=" text-center mb-0"
              >
                <h1 className="h4 text-white p-2 fw-normal">Please Sign Up</h1>
              </div>
              <div className="p-4">
                <div className="form-floating mb-1">
                  <input
                    type="text"
                    className="form-control signup_form_control"
                    id="floatingInput"
                    placeholder="Name"
                    name="name"
                    value={registerData.name}
                    onChange={handleInputChange}
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="tel"
                    className="form-control signup_form_control"
                    id="floatingInput"
                    name="phone"
                    value={registerData.phone}
                    placeholder="Phone No."
                    onChange={handleInputChange}
                  />
                  <label for="floatingInput">Phone No.</label>
                </div>
                <div className="form-floating mb-1">
                  <input
                    type="email"
                    className="form-control signup_form_control"
                    id="floatingInput"
                    name="email"
                    value={registerData.email}
                    placeholder="name@example.com"
                    onChange={handleInputChange}
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control signup_form_control"
                    id="floatingPassword"
                    name="password"
                    value={registerData.password}
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div className="form-check text-start my-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="remember-me"
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Agree to terms & conditions
                  </label>
                </div>
                <button
                  style={{ backgroundColor: "#036E8C" }}
                  className="btn text-white w-100 py-2 button_class"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
                <p className="mt-2 ">
                  New User?{" "}
                  <Link
                    to={"/signin"}
                    style={{ textDecoration: "none", fontWeight: 500 }}
                  >
                    Sign In
                  </Link>
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="mt-2"
                >
                  <span
                    style={{
                      width: "40%",
                      height: "1px",
                      color: "#036E8C",
                      border: "1px solid",
                      opacity: 0.5,
                    }}
                  ></span>
                  <span
                    style={{
                      fontSize: "19px",
                      color: "#264653",
                      fontWeight: 500,
                    }}
                  >
                    Or
                  </span>
                  <span
                    style={{
                      width: "40%",
                      height: "1px",
                      color: "#036E8C",
                      border: "1px solid",
                      opacity: 0.5,
                    }}
                  ></span>
                </div>
                <div className="text-center">
                  <p
                    style={{
                      fontSize: "19px",
                      fontWeight: 500,
                      color: "#264653",
                    }}
                  >
                    Sign In With
                  </p>
                  <span
                    style={{
                      padding: "13px 22px",
                      borderRadius: "5px",
                      marginRight: "25px",
                    }}
                    className="google_facebook_link"
                  >
                    <Link>
                      {" "}
                      <img
                        style={{ height: "42px", width: "42px" }}
                        src={googleLogo}
                        alt="..."
                      />
                    </Link>
                  </span>
                  <span
                    style={{
                      padding: "13px 22px",
                      borderRadius: "5px",
                    }}
                    className="google_facebook_link"
                  >
                    <Link>
                      <img
                        style={{ height: "36px", width: "36px" }}
                        src={facebookLogo}
                        alt="..."
                      />
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-6 ">
            <img style={{ width: "100%" }} src={signUp} alt="..." />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default SignUp;
