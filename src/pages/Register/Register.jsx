import React, { useEffect, useState } from "react";
import { StyledAuthLayout } from "../../layout/AuthLayout";
import {
  StyledAuthLeft,
  StyledAuthRight,
  StyledH1,
  StyledH2,
  StyledP,
} from "../../styles/Styled";
import boy from "../../assets/boy.webp";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import axios from "axios";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

function Register() {
  const [emaill, setEmaill] = useState("");
  const [username, setUsername] = useState("");
  const [passwordl, setPasswordl] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);

  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);
  const [error, setError] = useState(false);

  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    EMAIL_REGEX.test(emaill) ? setValid(true) : setValid(false);
    if (passwordl !== confirmPassword) {
      setError(true);
    } else {
      setError(false);
    }
  }, [emaill, passwordl, confirmPassword]);

  const handleEmail = (e) => {
    setEmaill(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswordl(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setTrySubmit(true);
    if (valid && !error) {
      setLoading(true);
      try {
        axios
          .post("https://user-profile-api.onrender.com/register", {
            uname: username,
            email: emaill,
            password: passwordl,
          })
          .then((response) => {
            console.log(response.status);
            setSucess(true);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
            // alert("Error")
          });
      } catch (error) {
        console.log("The Error ", error);
        setLoading(false);
      }
    } else {
    }
  };

  return (
    <StyledAuthLayout>
      <StyledAuthLeft>
        {!sucess && (
          <div className="side">
            <Link to="/">
              <img src={logo} alt="Boredom Ideas" className="logo" />
            </Link>
            <StyledH2>Create an Account</StyledH2>
            <form onSubmit={handleRegister} method="POST">
              {/* <label>Username</label> */}
              <div className="field">
                <input
                  type="text"
                  name="uname"
                  value={username}
                  onChange={handleUsername}
                  placeholder="Enter username"
                  required
                />
              </div>
              {/* <label>Email</label> */}
              <div className="field">
                <input
                  type="email"
                  name="email"
                  value={emaill}
                  onChange={handleEmail}
                  placeholder="Enter email address"
                  required
                />
              </div>

              {/* <label>Password</label> */}
              <div className="field">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={passwordl}
                  onChange={handlePassword}
                  placeholder="Enter password"
                  required
                />
                {showPass ? (
                  <AiOutlineEye
                    onClick={() => setShowPass(false)}
                    className="icon"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowPass(true)}
                    className="icon"
                  />
                )}
              </div>
              {/* <label>Confirm Password</label> */}
              <div className={error && trySubmit ? "error" : "field"}>
                <input
                  type={showCPass ? "text" : "password"}
                  name="cpassword"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  placeholder="Confirm password"
                  required
                />
                {showCPass ? (
                  <AiOutlineEye
                    onClick={() => setShowCPass(false)}
                    className="icon"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={() => setShowCPass(true)}
                    className="icon"
                  />
                )}
              </div>

              <button>
                {loading ? <div class="loader"></div> : "CREATE ACCOUNT"}
              </button>
            </form>
            <div className="below">
              <StyledP>
                Already have an account? <Link to="/login">Sign in</Link>
              </StyledP>
            </div>
          </div>
        )}

        {sucess && (
          <div className="side">
            <img src={logo} alt="Boredom Ideas" className="logo" />
            <StyledH1>Account Created</StyledH1>
            <StyledP>Sign in to start generating ideas</StyledP>
            <Link to="/login" className="good">
              <button>GO TO SIGN IN</button>
            </Link>
          </div>
        )}
      </StyledAuthLeft>

      <StyledAuthRight>
        <img src={boy} alt="" />
      </StyledAuthRight>
      <ToastContainer />
    </StyledAuthLayout>
  );
}

export default Register;
