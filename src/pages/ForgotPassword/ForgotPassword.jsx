import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { StyledAuthLayout } from '../../layout/AuthLayout'
import { StyledAuthLeft, StyledAuthRight, StyledH2, StyledP } from '../../styles/Styled'
import boy from "../../assets/boy.webp";
import logo from "../../assets/logo.svg";
import { auth } from "../../firebase/Firebase";
import { sendPasswordResetEmail } from 'firebase/auth';

const EMAIL_REGEX =
  /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

  
function ForgotPassword() {
  const [email, setEmail] = useState("");
   const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    EMAIL_REGEX.test(email) ? setValid(true) : setValid(false);
  }, [email]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if(valid){
      setLoading(true);

      try {
        sendPasswordResetEmail(auth, email);
        setLoading(false);
        toast.success('Reset link sent to email');
        setEmail("")
      } catch (error) {
        setLoading(false);
          toast.error("Email Does Not Exist");
      }
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();}
  return (
    <StyledAuthLayout>
      <StyledAuthLeft>
        <div className="side">
          <Link to="/">
            <img src={logo} alt="Boredom Ideas" className="logo" />
          </Link>{" "}
          <StyledH2>Sign in to your Account</StyledH2>
          <form onSubmit={handleReset}>
            {/* <label>Email</label> */}
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
           
            <button>{loading ? <div class="loader"></div> : "RESET PASSWORD"}</button>
          </form>
          <div className="below">
            <StyledP>
              Remeber Password? <Link to="/login">Sign In</Link>
            </StyledP>
          </div>
        </div>
      </StyledAuthLeft>

      <StyledAuthRight>
        <img src={boy} alt="" />
      </StyledAuthRight>
      <ToastContainer />
    </StyledAuthLayout>
  )
}

export default ForgotPassword