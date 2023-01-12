import React, { useEffect, useState } from "react";
import { StyledAuthLayout } from "../../layout/AuthLayout";
import {
  StyledAuthLeft,
  StyledAuthRight,
  StyledH2,
  StyledP,
} from "../../styles/Styled";
import boy from "../../assets/boy.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import axios from "axios";

const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    EMAIL_REGEX.test(email) ? setValid(true) : setValid(false);
  }, [email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (valid) {
      setLoading(true);
      localStorage.setItem("user", "BIdeauserName");
      setLoading(false);
      navigate("/dashboard");
      // try {
      //   axios
      //   .post('http://127.0.0.1:5000/register', {
      //     email: email,
      //     password: password
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //     setLoading(false);
      //     // navigate('/dashboard')
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setLoading(false);
      //   });
      // } catch (error) {
      //   console.log('The Error ',error);
      //   setLoading(false);
      // }
    } else {
      setLoading(false);
    }
  };
  return (
    <StyledAuthLayout>
      <StyledAuthLeft>
        <div className="side">
          <img src={logo} alt="Boredom Ideas" className="logo" />
          <StyledH2>Sign in to your Account</StyledH2>
          <form onSubmit={handleLogin}>
            <label>Email</label>
            <div className="field">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter email address"
                required
                disabled={loading && "disabled"}
              />
            </div>
            <label>Password</label>
            <div className="field">
              <input
                type={showPass ? "text" : "password"}
                name="email"
                value={password}
                onChange={handlePassword}
                placeholder="Enter password"
                required
                disabled={loading && "disabled"}
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
            <div className="keep">
              <input type="checkbox" checked /> <label>Keep me logged in</label>
            </div>
            <button>{loading ? <div class="loader"></div> : "SIGN IN"}</button>
          </form>
          <div className="below">
            <StyledP>
              Not registered yet? <Link to="/register">Create an account</Link>
            </StyledP>
          </div>
        </div>
      </StyledAuthLeft>
      <StyledAuthRight>
        <img src={boy} alt="" />
      </StyledAuthRight>
    </StyledAuthLayout>
  );
}

export default Login;
