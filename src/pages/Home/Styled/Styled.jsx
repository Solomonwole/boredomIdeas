import styled from "styled-components";

export const StyledHomeHero = styled.header`
  z-index: 5;

  .hero {
    height: 87vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
`;
export const StyledSection = styled.section`
  background: ${(props) => (props.color ? "rgba(35, 61, 255, 0.5)" : "#fff")};
  height: ${(props) => (props.full ? "100vh" : "")};
  height: ${(props) => (props.half ? "80vh" : "")};
  padding-top: ${(props) => (props.top ? "150px" : "50px")};
  padding-bottom: ${(props) => (props.top ? "0" : "50px")};
  .left {
    p {
      margin: 15px 0;
    }
    button {
      border-radius: 30px;
      font-weight: 600;
      margin: 8px 0;
      color: rgba(255, 255, 255, 0.9);
      font-size: 16px;
      height: 60px;
      width: 205px;
    }
  }
`;
export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .stat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 600;
      color: rgb(35, 61, 255);
      font-size: 20px;
      margin-bottom: 5px;
    }
    .star {
      // color: yellow;
    }

    .set {
      display: flex;
      align-items: center;
    }
  }
  .borders {
    border-right: 1px solid #d1c4e9;
    height: 50px;
  }

  @media screen and (min-width: 600px) {
  }
`;

export const Curve = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;

  z-index: -1;

  img {
    width: 350px;
  }

  @media screen and (min-width: 600px) {
    img {
      width: 600px;
    }
  }
`;
export const DotFrame = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 580px;
  left: 10px;

  z-index: -1;

  img {
    width: 100px;
  }

  // @media screen and (min-width: 600px){
  //   img{
  //     width: 600px;
  //   }
  // }
`;
export const Oval = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 500px;
  right: 40px;

  z-index: -1;

  img {
    width: 50px;
  }

  // @media screen and (min-width: 600px) {
  //   img {
  //     width: 600px;
  //   }
  // }
`;
export const FooterBG = styled.footer`
  position: relative;
  height: 250px;
  background: rgba(35, 61, 255, 0.5);
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 20px 20px 0 0;

  .logoImg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
    }
  }
  .content {
    margin-top: 30px;
    a {
      color: rgb(35, 61, 255);
      font-weight: 600;
    }
    p {
      color: #1a202c;
    }

    .socials {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;

      a {
        color: #1a202c;
        margin: 15px 10px;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media screen and (min-width: 600px) {
  }
`;

export const Triangle = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 80px;
  left: 0;

  z-index: -1;

  img {
    width: 30px;
  }

  // @media screen and (min-width: 600px) {
  //   img {
  //     width: 600px;
  //   }
  // }
`;
export const Action = styled.div`
  width: 100%;
  height: 300px;
  box-shadow: 2px 0px 85px 3px rgba(35, 61, 255, 0.75);
  -webkit-box-shadow: 2px 0px 85px 3px rgba(35, 61, 255, 0.75);
  -moz-box-shadow: 2px 0px 85px 3px rgba(35, 61, 255, 0.75);
  background: rgba(35, 61, 255, 0.5);
  padding: 20px;
  border-radius: 50px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span{
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }

  button{
    margin-top: 30px;
    height: 60px;
    border-radius: 50px;
    padding: 0 90px;
    font-size: 15px;
    font-weight: 600;
  }
`;

// DASHBOARD 

export const DashLeft = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 50px;

  h2{
    text-align: center;
    font-size: 25px;
    font-weight: 600;
  }
`

// HEADER NAVIGATION
export const StyledHeader2 = styled.header`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 50px;

  z-index: 30;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  max-width: 1024px;
  margin: 0 auto;

  margin-top: 25px;
  padding: 0 20px;
  @media screen and (max-width: 1024px) {
    width: 95%;
    margin: 0 auto;
    margin-top: 25px;
    padding: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 0;

    img {
      width: 100px;
    }

    .navMenu {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
          list-style: none;
          margin: 0 10px;

          button {
            border-radius: 30px;
            padding: 0 30px;

            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
            height: 50px;
          }
          a {
            color: #1a202c;
            font-size: 16px;
            font-weight: 700;
          }
          a:hover {
            color: rgb(35, 61, 255);
          }
          a.active {
            color: rgb(35, 61, 255);
          }
        }
      }

      @media screen and (max-width: 632px) {
        display: none;
      }
    }

    .mobile-menu {
      display: none;

      @media screen and (max-width: 632px) {
        display: block;
        font-size: 30px;
        color: #233dff;
      }
    }
  }
`;

export const MobileMenu = styled.nav`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 0 0 50px 50px;
  padding: 20px;

  z-index: 29;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 95%;
  margin: 0 auto;
  margin-top: 73px;
  animation: drop-from-top 0.5s ease-in-out forwards;

  @keyframes drop-from-top {
    0% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }

  ul {
    margin-top: 40px;
    margin-bottom: 15px;

    li {
      list-style: none;
    }
  }

  a {
    color: #1a202c;
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 38px;
  }
  a:hover {
    color: rgb(35, 61, 255);
  }
  a.active {
    color: rgb(35, 61, 255);
  }

  button {
    color: rgba(255, 255, 255, 0.9);
    font-size: 25px;
    letter-spacing: 2px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
  }
  .log {
    color: #c10000;
  }
`;
