import React from "react";
import InsurancePolicyImage from "../../PicesForPages/GetLibraryImage.jpg";

function InsurancePolicy() {
  return (
    <div className="homeInsurancePolicyPageParent">
      <div className="homeInsurancePolicyPageBox">
        <img
          src={InsurancePolicyImage}
          alt="insurancePolicyImage"
          className="insurancePolicyImage"
        />
        <div className="homeInsurancePolicyPageText">
          <span className="homeInsurancePolicyPageText_Header">
            Protect what you love
          </span>
          <span className="homeInsurancePolicyPageText_Content">
            Insurance Company has been serving policyholde protecting
            businesses, mitigating Insurance for added peace of mind.
          </span>
          <span className="homeInsurancePolicyPageText_Button">LEARN MORE</span>
        </div>
      </div>
    </div>
  );
}

export default InsurancePolicy;
