import axios from "axios";
import React, { useState } from "react";
import { PageLayout } from "../../layout/PageLayout";
import { StyledDashboard, StyledH2 } from "../../styles/Styled";

function Dashboard() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);

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
      <PageLayout>
        <StyledDashboard>
          <button onClick={generate}>
            {loading ? <div className="loader"></div> : "GENERATE"}
          </button>
        </StyledDashboard>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <StyledDashboard>
        <p>Category: {activity.type}</p>
        <p>Activity: {activity.activity}</p>
        <p>Participants: {activity.participants}</p>
        <button onClick={generate}>
          {loading ? <div className="loader"></div> : "REGENERATE"}
        </button>
      </StyledDashboard>
    </PageLayout>
  );
}

export default Dashboard;
