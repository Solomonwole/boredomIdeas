import axios from "axios";
import React, { useState } from "react";
import Header from "../../components/Header";
import { PageLayout } from "../../layout/PageLayout";
import {
  NavigationContainer,
  ShareButtonContainer,
  ShareOption,
  SharePopup,
  StyledDashboard,
  StyledH2,
  StyledH3,
  StyledP,
} from "../../styles/Styled";

function Dashboard() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const handleShare = (platform) => {
    let message = "I am enjoying generating ideas on this website, try it out https://boredomideas.vercel.app";
    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(message)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=&title=&summary=${encodeURIComponent(message)}&source=`;
        break;
      default:
        break;
    }
    window.open(shareUrl, "_blank");
  };

  const logout = () => {
    axios
      .get("https://user-profile-api.onrender.com/logout")
      .then((response) => {
        console.log(response.status);
        console.log("Logged Out");
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  };

  const generate = () => {
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
  };

  if (!activity) {
    return (
      <>
        <PageLayout>
          <Header />
          <StyledDashboard>
            <button onClick={generate}>
              {loading ? <div className="loader"></div> : "GENERATE"}
            </button>
          </StyledDashboard>
        </PageLayout>
        <NavigationContainer>
          <PageLayout>
          <div className="content">
            <p>Share to friends </p>
            <ShareButtonContainer onClick={() => setShowPopup(!showPopup)}>Share</ShareButtonContainer>
          </div>


          {showPopup && (
        <SharePopup>
          <ShareOption onClick={() => handleShare("facebook")}>
            Facebook
          </ShareOption>
          <ShareOption onClick={() => handleShare("twitter")}>
            Twitter
          </ShareOption>
          <ShareOption onClick={() => handleShare("linkedin")}>
            LinkedIn
          </ShareOption>
        </SharePopup>
      )}
          </PageLayout>
        </NavigationContainer>
      </>
    );
  }

  return (
    <>
      <PageLayout>
        <Header />
        <StyledDashboard>
          <StyledP>Category: {activity.type}</StyledP>
          <StyledP>Activity: {activity.activity}</StyledP>
          <StyledP>Participants: {activity.participants}</StyledP>
          <button onClick={generate}>
            {loading ? <div className="loader"></div> : "REGENERATE"}
          </button>
        </StyledDashboard>
      </PageLayout>
      <NavigationContainer>
        <PageLayout>
          <div className="content">
            <p>Share to friends </p>
            <ShareButtonContainer onClick={() => setShowPopup(!showPopup)}>Share</ShareButtonContainer>
          </div>



          {showPopup && (
        <SharePopup>
          <ShareOption onClick={() => handleShare("facebook")}>
            Facebook
          </ShareOption>
          <ShareOption onClick={() => handleShare("twitter")}>
            Twitter
          </ShareOption>
          <ShareOption onClick={() => handleShare("linkedin")}>
            LinkedIn
          </ShareOption>
        </SharePopup>
      )}
        </PageLayout>
      </NavigationContainer>
    </>
  );
}

export default Dashboard;
