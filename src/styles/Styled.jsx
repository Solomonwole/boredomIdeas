import styled from "styled-components";

export const StyledAuthLeft = styled.div`
  width: 40%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .side {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      width: 150px;
      margin-bottom: 20px;
    }

    .good {
      width: 70%;
      border-radius: 8px;
      margin-top: 15px;
    }
  }

  form {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    label {
      font-size: 13px;
      font-weight: 500;
    }

    .error {
      width: 100%;
      height: 40px;
      border: 1px solid #c10;
      background: #f7f7f7;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 15px;
      margin-bottom: 15px;

      input {
        border: none;
        background: transparent;
        height: 30px;
        width: 80%;

        &:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #f7f7f7 inset !important;
        }
      }
      .icon {
        font-size: 20px;
        cursor: pointer;
      }
    }

    .keep {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      input {
        margin-right: 5px;
        height: 15px;
        width: 15px;
        margin-top: 2px;
      }
    }
    button {
      width: 100%;
      border-radius: 8px;
      margin-top: 15px;
    }
  }

  .field {
    width: 100%;
    height: 40px;
    background: #f7f7f7;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px;
    margin-bottom: 15px;

    input {
      border: none;
      background: transparent;
      height: 30px;
      width: 80%;

      &:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #f7f7f7 inset !important;
      }
    }
    .icon {
      font-size: 20px;
      cursor: pointer;
    }
  }

  .keep {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    input {
      margin-right: 5px;
      height: 15px;
      width: 15px;
      margin-top: 2px;
    }
  }
  button {
    width: 100%;
    border-radius: 8px;
    margin-top: 15px;
  }

  .below {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    margin: 15px 0;

    a {
      color: rgb(92, 92, 225);
      font-weight: 600;
    }
  }

  @media screen and (max-width: 884px) {
    width: 50%;
  }
  @media screen and (max-width: 820px) {
    width: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    background: #fff;
    z-index: 2;
    border-radius: 20px 20px 0 0;
    margin-top: -100px;
    padding-top: 50px;
    padding-bottom: 20px;

    form {
      width: 90%;
    }
    .below {
      width: 90%;
    }
  }
`;
export const StyledAuthRight = styled.div`
  width: 60%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    background-size: contain;
    border-radius: 500px 0 0 500px;
  }

  @media screen and (max-width: 884px) {
    width: 50%;
  }
  @media screen and (max-width: 820px) {
    width: 40%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    img {
      border-radius: 0;
    }
  }
`;

export const StyledHeader2 = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ##f7f7ff;
  z-index: 30;

  padding: 8px 0;

  img {
    width: 100px;
  }
`;

export const StyledHomeBody = styled.main`
height: 100vh;
w
`;
export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ##f7f7ff;
  z-index: 30;

  padding: 8px 0;

  img {
    width: 100px;
  }

  .icon {
    font-size: 30px;
    color: rgb(35, 61, 255);
    cursor: pointer;
  }

  button {
    width: 100px;
    border-radius: 8px;
    margin-top: 15px;
    height: 40px;
  }
`;
export const StyledHome = styled.main`
  height: 100vh;

  background: #f7f7ff;

  button {
    width: 200px;
    border-radius: 8px;
    margin-top: 15px;
    height: 50px;
  }

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;

   

    .right {
      img {
        width: 570px;
        // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translatey(0px);
        animation: float 6s ease-in-out infinite;

        @keyframes float {
          0% {
            // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translatey(0px);
          }
          50% {
            // box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
            transform: translatey(-20px);
          }
          100% {
            // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translatey(0px);
          }
        }
      }
    }
  }
`;
export const StyledCircles = styled.div`
.bulb {
  position: absolute;
  left: 200px;
  top: 50px;
  width: 300px;

  transform: translatey(0px);
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      // box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
}
.right {
  position: absolute;
  left: 1200px;
  top: 120px;

  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      // box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
}
.leftBig {
  position: absolute;
  left: 0;
  top: 180px;

  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      // box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
}
.left {
  position: absolute;
  left: 250px;
  top: 550px;

  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      // box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px);
    }
    100% {
      // box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
}
`;
export const StyledDashboard = styled.main`
  padding: 20px 0;
  button {
    width: 200px;
    border-radius: 8px;
    margin-top: 15px;
    height: 50px;
    box-shadow: -1px 5px 13px 0px rgba(0, 0, 0, 0.44);
    -webkit-box-shadow: -1px 5px 13px 0px rgba(0, 0, 0, 0.44);
    -moz-box-shadow: -1px 5px 13px 0px rgba(0, 0, 0, 0.44);
  }
`;
// FONT STYLING

export const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 24px;
`;
export const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 16px;
`;
export const StyledH3 = styled.h3`
  font-weight: 500;
  font-size: 14px;
`;

export const StyledP = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
