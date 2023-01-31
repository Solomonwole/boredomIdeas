import React, { useEffect, useState } from "react";
import { PageLayout } from "../../layout/PageLayout";
import {
  Action,
  Curve,
  DotFrame,
  FooterBG,
  Oval,
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
import TestimonialCarousel from "../../components/Testimonial";
import { Link } from "react-router-dom";

function Home() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generateCount, setGenerateCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generate = () => {
    setGenerateCount(generateCount + 1);
    if (generateCount === 20) {
      localStorage.setItem("gen", 2);
      // alert("You have reached the limit of 2 generated activities.");
    }
    if (localStorage.getItem("gen1")) {
      alert("You have reached the limit");
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
        });
    }
  };

  // const remove = () => {
  //   localStorage.removeItem("gen");
  // };

  return (
    <>
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
          <div className="left">
            <h1>Discover the Best Fun and Exciting Activity Ideas</h1>
            <p>
              Never be Bored Again! Find Your Next Fun Adventure with Our
              Ultimate List of Exciting Activities. Indulge in indoor or outdoor
              thrills, romantic escapes, or daring escapades. Discover the best
              activities and have a blast!
            </p>
            <button type="button" onClick={generate}>
              {loading ? <div className="loader"></div> : "Generate an Idea"}
            </button>
          </div>
          <div className="right">
            {loading && (
              <Skeleton variant="rectangular" width={210} height={60} />
            )}
            {activity ? (
              <>
                <p>Category: {activity.type}</p>
                <p>Activity: {activity.activity}</p>
                <p>Participants: {activity.participants}</p>
              </>
            ) : (
              <></>
            )}
          </div>
        </PageLayout>
      </StyledSection>

      <StyledSection>
        <PageLayout>
          <Stats>
            <div className="stat">
              <span>+200M</span>
              <p className="set">
                <HiUsers className="icon" />
                &nbsp; Users
              </p>
            </div>
            <div className="borders"></div>
            <div className="stat">
              <span>+600M</span>
              <p className="set">
                <HiLightBulb className="icon" />
                &nbsp; Generated Ideas
              </p>
            </div>
            <div className="borders"></div>
            <div className="stat">
              <span>+80M</span>
              <p className="set">
                <HiStar className="star" />
                &nbsp; Ratings
              </p>
            </div>
          </Stats>

          <TestimonialCarousel />

          <Action>
            <span>Generate Unlimited Activity Ideas from Your Dashboard</span>
            <Link to="/login">
              <button>GET STARTED</button>
            </Link>
          </Action>
        </PageLayout>
      </StyledSection>

      <FooterBG>
        <PageLayout>
          <div className="logoImg">
            <img src={logo} alt="" />
          </div>
          <div className="content">
            <div className="socials">
              <a href="https://facebook.com/#" target="_blank" rel="noreferrer">
                <BsFacebook />
              </a>
              <a
                href="https://instagram.com/#"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
              <a href="https://twitter.com/#" target="_blank" rel="noreferrer">
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
    </>
  );
}

export default Home;
