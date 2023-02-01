import React, { useEffect, useState } from "react";
import { PageLayout } from "../../layout/PageLayout";
import { ToastContainer, toast } from "react-toastify";
import {
  Action,
  ActivityGen,
  Ads,
  Curve,
  DotFrame,
  FooterBG,
  Oval,
  Page,
  Stats,
  StyledHomeHero,
  StyledSection,
  Triangle,
} from "./Styled/Styled";
import HeaderHeader from "../../components/HomeHeader";
import axios from "axios";
import curveImg from "../../assets/curve.webp";
import ovalImg from "../../assets/Oval.webp";
import dotImg from "../../assets/DotFrame.webp";
import triImg from "../../assets/Triangle.webp";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiLightBulb, HiStar, HiUsers } from "react-icons/hi";
import { Skeleton } from "@mui/material";
import logo from "../../assets/logo.svg";
import hero from "../../assets/hero.webp";
import TestimonialCarousel from "../../components/Testimonial";
import { Link } from "react-router-dom";
import VerifyModal from "../../components/Modal";
import styled from "styled-components";
import { width } from "@mui/system";

function Home() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [generateCount, setGenerateCount] = useState(0);
  const text =
    "To generate unlimited activity ideas, kindly login to your dashboard.";

  useEffect(() => {
    window.scrollTo(0, 0);

    // 300 X 100
    const script = document.createElement("script");
    script.src = "https://poweredby.jads.co/js/jads.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    (window.adsbyjuicy = window.adsbyjuicy || []).push({ adzone: 1010462 });

    // 300 x 100

    // 300 x 250 Video Ads

    const scriptv = document.createElement("script");
    scriptv.src = "https://poweredby.jads.co/js/jads.js";
    scriptv.async = true;
    scriptv.setAttribute("data-cfasync", "false");
    document.body.appendChild(scriptv);

    (window.adsbyjuicy = window.adsbyjuicy || []).push({ adzone: 1010463 });

    // 300 x 250 Video Ads

    const intervalId = setInterval(() => {
      (window.adsbyjuicy = window.adsbyjuicy || []).push({ adzone: 1010462 });
      (window.adsbyjuicy = window.adsbyjuicy || []).push({ adzone: 1010463 });
    }, 60000);

    return () => clearInterval(intervalId);

    // 300 X 100
  }, []);

  const generate = () => {
    setGenerateCount(generateCount + 1);
    if (generateCount === 2) {
      localStorage.setItem("gen", 2);
      // alert("You have reached the limit of 2 generated activities.");
    }

    if (localStorage.getItem("gen")) {
      // alert("You have reached the limit");
      setModal(true);
    } else {
      setLoading(true);

      axios
        .get("https://www.boredapi.com/api/activity/")
        .then((response) => {
          setActivity(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          toast.error("No Internet")
        });
    }
  };

  // const remove = () => {
  //   localStorage.removeItem("gen");
  // };

  return (
    <Page>
      <div className={modal && "noscroll"}>
        <StyledHomeHero>
          <PageLayout>
            <HeaderHeader />
          </PageLayout>
        </StyledHomeHero>

        <StyledSection color top full>
          <Curve>
            <img src={curveImg} alt="" />
          </Curve>
          <DotFrame>
            <img src={dotImg} alt="" />
          </DotFrame>
          <Oval>
            <img src={ovalImg} alt="" />
          </Oval>
          <Triangle>
            <img src={triImg} alt="" />
          </Triangle>
          <PageLayout>
            <div className="hero">
              <div className="left">
                <h1>Discover the Best Fun and Exciting Activity Ideas</h1>
                <p>
                  Never be Bored Again! Find Your Next Fun Adventure with Our
                  Ultimate List of Exciting Activities. Indulge in indoor or
                  outdoor thrills, romantic escapes, or daring escapades.
                  Discover the best activities and have a blast!
                </p>
                <button type="button" onClick={generate}>
                  {loading ? (
                    <div className="loader"></div>
                  ) : (
                    "Generate an Idea"
                  )}
                </button>
              </div>
              <div className="right">
                {!activity ? (
                  <img src={hero} alt="" />
                ) : (
                  <>
                    <ActivityGen>
                      <div className="title">CATEGORY</div>
                      <div className="answer">
                        {!loading ? (
                          <>{activity.type}</>
                        ) : (
                          <Skeleton
                            variant="rectangular"
                            width={"90%"}
                            height={"40px"}
                          />
                        )}
                      </div>
                      <div className="title">ACTIVITY IDEA</div>
                      <div className="answer">
                        {!loading ? (
                          <>{activity.activity}</>
                        ) : (
                          <Skeleton
                            variant="rectangular"
                            width={"90%"}
                            height={"40px"}
                          />
                        )}
                      </div>
                      <div className="title">PARTICIPANTS</div>
                      <div className="answer none">
                        {!loading ? (
                          <>{activity.participants}</>
                        ) : (
                          <Skeleton
                            variant="rectangular"
                            width={"90%"}
                            height={"40px"}
                          />
                        )}
                      </div>
                    </ActivityGen>
                  </>
                )}
              </div>
            </div>
          </PageLayout>
        </StyledSection>

        <StyledSection>
          <PageLayout>
            <Stats>
              <div className="stat">
                <span>200M+</span>
                <p className="set">
                  <HiUsers className="icon" />
                  &nbsp; Users
                </p>
              </div>
              <div className="borders"></div>
              <div className="stat">
                <span>600M+</span>
                <p className="set">
                  <HiLightBulb className="icon" />
                  &nbsp; Generated Ideas
                </p>
              </div>
              <div className="borders"></div>
              <div className="stat">
                <span>80M+</span>
                <p className="set">
                  <HiStar className="star" />
                  &nbsp; Ratings
                </p>
              </div>
            </Stats>

            <TestimonialCarousel />
          </PageLayout>
        </StyledSection>

       
        {/* ADS  */}

        <PageLayout>
          <Ads>
            <ins
              id="1010462"
              data-width="300"
              data-height="112"
              className="zi"
            ></ins>
            <ins
              id="1010462"
              data-width="300"
              data-height="112"
              style={{ zIndex: -1 }}
              className="zi"
            ></ins>
            <ins
              id="1010462"
              data-width="300"
              data-height="112"
              className="zi"
            ></ins>
            <ins
              id="1010462"
              data-width="300"
              data-height="112"
              style={{ zIndex: -1 }}
              className="zi"
            ></ins>
          </Ads>
        </PageLayout>

        {/* ADS  */}


        <FooterBG>
          <PageLayout>
            <div className="logoImg">
              <img src={logo} alt="" />
            </div>
            <div className="content">
              <div className="socials">
                <a
                  href="https://facebook.com/#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
                <a
                  href="https://instagram.com/#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
                <a
                  href="https://twitter.com/#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter />
                </a>
              </div>
              <p>
                ©2023 Boredom Ideas, from{" "}
                <a
                  href="https://hightech.com.ng"
                  target="_blank"
                  rel="noreferrer"
                >
                  HIGHTECH
                </a>{" "}
                Inc.
              </p>
            </div>
          </PageLayout>
        </FooterBG>
        {modal && (
          <VerifyModal
            closeModal={() => setModal(false)}
            text={text}
            title="LIMIT 😰"
            content={<Content />}
          />
        )}
      </div>
      <ToastContainer />
    </Page>
  );
}

export default Home;

const Content = () => {
  return (
    <>
      <Con
        
      >
        <Link to="/login">
          <BtnBtn>Login</BtnBtn>
        </Link>
        <div style={{marginTop: "10px"}}></div>
        
        <p>
          If you don't have an account it takes less than a minute to create one
          😉
        </p>
        <Link to="/register">
          <BtnBtn>Create Account</BtnBtn>
        </Link>
      </Con>
    </>
  );
};

const BtnBtn = styled.button`
  width: 200px;
  border-radius: 8px;
  margin-top: 15px;
  height: 60px;
  font-size: 15px;
  font-weight: 600;
`;

const Con = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
 justify-content: center;
 align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
