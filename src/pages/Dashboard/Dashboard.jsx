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
  StyledP,
} from "../../styles/Styled";
import { StyledSection } from "../Home/Styled/Styled";

function Dashboard() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <StyledSection color ></StyledSection>

      <PageLayout>
        <Header />
        <StyledDashboard>
          <button onClick={generate}>
            {loading ? <div className="loader"></div> : "REGENERATE"}
          </button>
        </StyledDashboard>
      </PageLayout>
      <button onClick={generate}>
        {loading ? <div className="loader"></div> : "GENERATE"}
      </button>

      {activity && (
        <>
          <StyledP>Category: {activity.type}</StyledP>
          <StyledP>Activity: {activity.activity}</StyledP>
          <StyledP>Participants: {activity.participants}</StyledP>
        </>
      )}
    </>
  );
}

export default Dashboard;
