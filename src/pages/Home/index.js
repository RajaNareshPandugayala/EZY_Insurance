import React from "react";
import CoverPage from "./coverPage";
import InsurancePolicy from "./insurancePolicy";
import FutureInspiring from "./futureInspiring";
import FindAgent from "./findAgent";
import YourTeamMembers from "../StaffDetails/teamMembers";

function HomePage() {
  return (
    <div className="homeParent">
      <CoverPage />
      <InsurancePolicy />
      <FutureInspiring />
      <FindAgent />
      <YourTeamMembers />
    </div>
  );
}

export default HomePage;
