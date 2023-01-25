import React from "react";
import HeaderC from "../../components/HeaderCopy";
import { PageLayout } from "../../layout/PageLayout";
import { StyledCircles, StyledH1 } from "../../styles/Styled";
import bulb from "../../assets/bulb.svg";
import CLeft from "../../assets/circles/c_left.svg";
import CLeftBig from "../../assets/circles/c_left_big.svg";
import CRight from "../../assets/circles/c_right.svg";
import { StyledBG, StyledHomeHero, StyledSection } from "./Styled/Styled";
import bgVid from "../../assets/bg.mp4";
import poster from "../../assets/bg.webp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <StyledBG>
        <video loop autoPlay muted type="video/mp4" poster={poster}>
          <source src={bgVid} type="video/mp4" />
        </video>
      </StyledBG>
      <StyledHomeHero>
        <HeaderC />
        <PageLayout>
          <div className="hero">
            <StyledH1>Generate Activity Ideas When You Are Bored</StyledH1>
          </div>

          <StyledCircles>
            <img src={CLeft} alt="" className="left" />
            <img src={CLeftBig} alt="" className="leftBig" />
            <img src={CRight} alt="" className="right" />
            <img src={bulb} alt="" className="bulb" />
          </StyledCircles>
        </PageLayout>
      </StyledHomeHero>
      <StyledSection>
        <PageLayout>
         <div className="about">
         <div className="left"></div>
          <div className="right">
            <p>About App</p>
            <h2>Lots of Amazing Fun Ideas To Choose From</h2>

            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              repudiandae quia sapiente reiciendis totam deleniti, accusamus
              corporis id voluptatem natus deserunt tenetur ex distinctio dolore
              iusto culpa adipisci minima fuga?
            </p>
            <div className="checkList">
              <ul>
                <li>User Friendly</li>
                <li>User Friendly</li>
              </ul>
              <ul>
                <li>User Friendly</li>
                <li>User Friendly</li>
              </ul>
            </div>
            <Link to="/login"><button>GET STARTED</button></Link>
          </div>
         </div>
        </PageLayout>
      </StyledSection>

      <StyledSection color>
        <PageLayout>
          
        </PageLayout>
      </StyledSection>
    </>
  );
}

export default Home;
