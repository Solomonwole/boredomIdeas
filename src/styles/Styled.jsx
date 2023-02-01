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
    overflow-x: hidden;

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
    overflow-x: hidden;

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
        height: 60px;
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
    height: 60px;
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
      font-size: 15px;
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

  .forgot{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a{
      color: rgb(92, 92, 225);
    }
  }
  button {
    width: 100%;
    border-radius: 8px;
    margin-top: 15px;
    height: 60px;
    font-size: 15px;
    font-weight: 600;
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

  // button {
  //   width: 200px;
  //   border-radius: 8px;
  //   margin-top: 15px;
  //   height: 50px;
  // }

  // .hero {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }
`;

// DASHBOARD

export const StyledDashboard = styled.main`
  padding: 40px 0;
  button {
    width: 200px;
    border-radius: 8px;
    margin-top: 15px;
    height: 50px;
    font-size: 15px;
    font-weight: 600;
    box-shadow: -1px 5px 13px 0px rgba(35, 61, 255, 0.75);
    -webkit-box-shadow: -1px 5px 13px 0px rgba(35, 61, 255, 0.75);
    -moz-box-shadow: -1px 5px 13px 0px rgba(35, 61, 255, 0.75);
  }
`;

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  background-color: #f7f7ff;
  padding: 10px;
  box-shadow: -1px 5px 13px 0px rgba(0, 0, 0, 0.44);

  .content {
    display: flex;
    align-items: center;
  }
`;

export const ShareButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #233dff;
  color: #fff;
  border-radius: 25px;
  cursor: pointer;
`;

export const SharePopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 200px;
  height: 200px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const ShareOption = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

// DASHBOARD

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
