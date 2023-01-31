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
import { DashLeft, StyledSection } from "../Home/Styled/Styled";

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
      <StyledSection color top>
        <PageLayout>
          <StyledDashboard>
            <DashLeft>
              <>
                <h2>
                  Let's Get Started, <br />
                  Shall we?
                </h2>
                <button onClick={generate}>
                  {loading ? <div className="loader"></div> : "GENERATE IDEA"}
                </button>
              </>
            </DashLeft>
            <DashLeft>
              
            </DashLeft>
          </StyledDashboard>
        </PageLayout>
      </StyledSection>

      <PageLayout>
        <Header />
        <StyledDashboard>
          <button onClick={generate}>
            {loading ? <div className="loader"></div> : "REGENERATE"}
          </button>
        </StyledDashboard>
      </PageLayout>
      

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
