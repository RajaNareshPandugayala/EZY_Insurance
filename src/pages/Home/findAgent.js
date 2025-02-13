import React from "react";

function FindAgent() {
  return (
    <div className="homeFindAgentPageParent">
      <div className="homeFindAgentPageBox">
        <span className="homeFindAgentPage_Header">
          Not sure what you need? Find an Agent Now
        </span>
        <div className="homeFindAgentPage_ContactBox">
          <span className="homeFindAgentPage_ContactSpan">
            <i class="ri-phone-line homeFindAgentPage_ContactIcon"></i>
            <div className="homeFindAgentPage_ContactTextDiv">
              <span className="homeFindAgentPage_ContactText">Call Now</span>
              <span className="homeFindAgentPage_ContactUs">
                +1 513-999-2324
              </span>
            </div>
          </span>
          <span className="homeFindAgentPage_OrTextSpan">
            <span className="homeFindAgentPage_OrText">OR</span>
          </span>
          <span className="homeFindAgentPage_ContactSpan">
            <i class="ri-mail-fill homeFindAgentPage_ContactIcon"></i>
            <div className="homeFindAgentPage_ContactTextDiv">
              <span className="homeFindAgentPage_ContactText">Email Now</span>
              <span className="homeFindAgentPage_ContactUs">
                contact@ezyins.com
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FindAgent;
