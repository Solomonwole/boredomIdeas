import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import VerifyModal from "../../components/Modal";
import { PageLayout } from "../../layout/PageLayout";
import { StyledDashboard } from "../../styles/Styled";
import { ToastContainer, toast } from "react-toastify";
import {
  ActivityGen,
  Ads,
  DashLeft,
  StyledSection,
} from "../Home/Styled/Styled";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

function Dashboard() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [generateCount, setGenerateCount] = useState(0);
  const text = "Share with your friends 😉";
  const username = localStorage.getItem("username");

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

  // const logout = () => {
  //   axios
  //     .get("https://user-profile-api.onrender.com/logout")
  //     .then((response) => {
  //       console.log(response.status);
  //       console.log("Logged Out");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       console.log("error");
  //     });
  // };

  const generate = () => {
    setLoading(true);
    setGenerateCount(generateCount + 1);
    if (generateCount === 10) {
      setModal(true);
    }
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then((response) => {
        setActivity(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("No Internet");
        toast.error("No Internet");
      });
  };

  return (
    <>
      <PageLayout>
        <Header />
      </PageLayout>

      <StyledSection color top fulls>
        <PageLayout>
          <StyledDashboard>
            <DashLeft>
              {!activity ? (
                <>
                <h1>Hi, {username}</h1>
                <br />
                  <h2>
                    Let's Get Started, <br />
                    Shall we?
                  </h2>
                  <button onClick={generate}>
                    {loading ? <div className="loader"></div> : "GENERATE IDEA"}
                  </button>
                </>
              ) : (
                <>
                  <ActivityGen don>
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
                  <button onClick={generate}>
                    {loading ? <div className="loader"></div> : "REGENERATE"}
                  </button>
                </>
              )}

              {/* ADS  */}

              <PageLayout>
                <Ads notop>
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
                <Ads notop>
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
            </DashLeft>
            <DashLeft></DashLeft>
          </StyledDashboard>
        </PageLayout>
      </StyledSection>
      {modal && (
        <VerifyModal
          closeModal={() => setModal(false)}
          text={text}
          title="ENJOYING? 🤪"
          content={<Content />}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default Dashboard;

const Content = () => {
  const url =
    "You need to try this website, I've been generating fun ideas try it now! https://boredomideas.vercel.app";
  return (
    <>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <FacebookShareButton url={url}>
          <FacebookIcon round={true} size={42} />
        </FacebookShareButton>
        <div style={{ marginRight: "10px" }}></div>
        <WhatsappShareButton url={url}>
          <WhatsappIcon round={true} size={42} />
        </WhatsappShareButton>
        <div style={{ marginRight: "10px" }}></div>
        <TwitterShareButton url={url}>
          <TwitterIcon round={true} size={42} />
        </TwitterShareButton>
        <div style={{ marginRight: "10px" }}></div>
        <TelegramShareButton url={url}>
          <TelegramIcon round={true} size={42} />
        </TelegramShareButton>
      </div>
    </>
  );
};
