import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderC from "../../components/HeaderCopy";
import { PageLayout } from "../../layout/PageLayout";
import { StyledCircles, StyledH1, StyledHome, StyledHomeBody } from "../../styles/Styled";
import hero from "../../assets/hero.webp";
import bulb from "../../assets/bulb.svg";
import CLeft from '../../assets/circles/c_left.svg'
import CLeftBig from '../../assets/circles/c_left_big.svg'
import CRight from '../../assets/circles/c_right.svg'

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <StyledHome>
        <PageLayout>
          <HeaderC />

          <div className="hero">
            <div className="left">
              <StyledH1>Generate Activity Ideas When You Are Bored</StyledH1>
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                GET STARTED
              </button>
            </div>
            <div className="right">
              <img src={hero} alt="" />
            </div>

            <StyledCircles>
              <img src={CLeft} alt="" className="left" />
              <img src={CLeftBig} alt="" className="leftBig" />
              <img src={CRight} alt="" className="right" />
              <img src={bulb} alt="" className="bulb" />
            </StyledCircles>
          </div>
        </PageLayout>
      </StyledHome>

      <PageLayout>
        <StyledHomeBody></StyledHomeBody>
      </PageLayout>
    </div>
  );
}

export default Home;
