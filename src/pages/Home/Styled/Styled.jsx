import styled from "styled-components";

export const StyledBG = styled.header`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: -1;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
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
 background: ${(props) => props.color ? "#F9FAFF" : "#fff"};
 height: 100vh;
 padding: 100px 0;

 .about{
display: flex;
align-items: center;
  
 .left{
  width: 50%;
 }

 .right{
  width: 50%;
  h2{
    font-weight: 600;
    font-size: 35px;
  }
  p{
    font-size: 15px;
  }

  .text{
    margin: 20px 0;
    line-height: 150%;
  }

  .checkList{
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    ul li{
list-style: none;
font-size: 15px;
    }
  }

  button{
    padding: 25px 40px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 }
 }
`;
export const StyledHeader2 = styled.header`
  width: 100%;
  background: #f7f7ff;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 30;

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
            border-radius: 8px;
            padding: 0 15px;
          }
          a {
            color: #000;
          }
          a:hover {
            color: #233dff;
          }
          a.active {
            font-weight: 600;
            color: #233dff;
          }
        }
      }
    }
  }
`;
