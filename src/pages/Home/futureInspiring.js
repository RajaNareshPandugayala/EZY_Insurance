import React from "react";
import business from "../../PicesForPages/businessImage.jpg";
import life from "../../PicesForPages/lifeImage.jpg";
import landlord_tenant from "../../PicesForPages/landlord_tenant.jpg";
import speciality from "../../PicesForPages/speciality.png";
import homeowner from "../../PicesForPages/homeowner.jpg";
import auto from "../../PicesForPages/auto.jpg";

function FutureInspiring() {
  return (
    <div className="homeFutureInspiringPageParent">
      <div className="homeFutureInspiringPageBox">
        <span className="homeFutureInspiringPageTitel">
          Protecting future inspiring hope
        </span>
        <span className="homeFutureInspiringPageHeading">
          Let’s work together for all life’s moments
        </span>
        <div className="homeFutureInspiringPageInsuranceDivBox">
          <div className="homeFutureInspiringPageInsuranceDiv FutureInspiringPageDiv_Business">
            <span className="futureInsupiringImagesBox">
              <img
                src={business}
                alt="futureInsupiringImages"
                className="homeFutureInspiringPageInsuranceDivImage"
              />
            </span>
            <span className="homeFutureInspiringPageInsuranceDivText">
              For your Business
            </span>
            <span className="homeFutureInspiringPageInsuranceDivButton">
              Show More
            </span>
          </div>

          <div className="homeFutureInspiringPageInsuranceDiv FutureInspiringPageDiv_Life">
            <span className="futureInsupiringImagesBox">
              <img
                src={life}
                alt="futureInsupiringImages"
                className="homeFutureInspiringPageInsuranceDivImage"
              />
            </span>
            <span className="homeFutureInspiringPageInsuranceDivText">
              For your Life
            </span>
            <span className="homeFutureInspiringPageInsuranceDivButton">
              Show More
            </span>
          </div>

          <div className="homeFutureInspiringPageInsuranceDiv FutureInspiringPageDiv_LandlordTenant">
            <span className="futureInsupiringImagesBox">
              <img
                src={landlord_tenant}
                alt="futureInsupiringImages"
                className="homeFutureInspiringPageInsuranceDivImage"
              />
            </span>
            <span className="homeFutureInspiringPageInsuranceDivText">
              For your Landlord/Tenant
            </span>
            <span className="homeFutureInspiringPageInsuranceDivButton">
              Show More
            </span>
          </div>

          <div className="homeFutureInspiringPageInsuranceDiv FutureInspiringPageDiv_Speciality">
            <span className="futureInsupiringImagesBox">
              <img
                src={speciality}
                alt="futureInsupiringImages"
                className="homeFutureInspiringPageInsuranceDivImage"
              />
            </span>
            <span className="homeFutureInspiringPageInsuranceDivText">
              For your Speciality
            </span>
            <span className="homeFutureInspiringPageInsuranceDivButton">
              Show More
            </span>
          </div>

          <div className="homeFutureInspiringPageInsuranceDiv FutureInspiringPageDiv_Homeowner">
            <span className="futureInsupiringImagesBox">
              <img
                src={homeowner}
                alt="futureInsupiringImages"
                className="homeFutureInspiringPageInsuranceDivImage"
              />
            </span>
            <span className="homeFutureInspiringPageInsuranceDivText">
              For your Homeowner
            </span>
            <span className="homeFutureInspiringPageInsuranceDivButton">
              Show More
            </span>
          </div>

          <div className="homeFutureInspiringPageInsuranceDiv FutureInspiringPageDiv_Auto">
            <span className="futureInsupiringImagesBox">
              <img
                src={auto}
                alt="futureInsupiringImages"
                className="homeFutureInspiringPageInsuranceDivImage"
              />
            </span>
            <span className="homeFutureInspiringPageInsuranceDivText">
              For your Auto
            </span>
            <span className="homeFutureInspiringPageInsuranceDivButton">
              Show More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureInspiring;
