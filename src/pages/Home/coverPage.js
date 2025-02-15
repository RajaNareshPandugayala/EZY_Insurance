import React, { useState, useEffect, useRef } from "react";

const insuranceDetails = {
  "Business Insurance": {
    description:
      "Protect Your Business, Secure Your Future. Running a business comes with risks, but with the right protection, you can focus on growth without worry.",
    benefits: [
      "✔ Property & Liability Coverage",
      "✔ Employee Protection",
      "✔ Business Interruption Coverage",
    ],
    blank_cell: "1",
  },
  "Life Insurance": {
    description:
      "Your Life, Your Legacy – Secure It Today. Life is unpredictable, but your loved ones’ future doesn’t have to be.",
    benefits: [
      "✔ Financial Security for Loved Ones",
      "✔ Debt & Mortgage Protection",
      "✔ Wealth Planning & Tax Benefits",
    ],
    blank_cell: "2",
  },
  "Landlord/Tenant Insurance": {
    description:
      "Protection for Both Sides – Owners & Renters. Whether you own rental property or lease a home, having the right insurance is essential.",
    benefits: [
      "✔ Property Damage & Liability Protection",
      "✔ Loss of Rent Coverage",
      "✔ Personal Belongings Coverage for Tenants",
    ],
    blank_cell: "3",
  },
  "Speciality Insurance": {
    description:
      "Tailored Protection for Unique Needs. Not all risks fit standard policies. Our Speciality Insurance covers unique industries and high-risk professions.",
    benefits: [
      "✔ Customized Coverage for Special Risks",
      "✔ Event & High-Risk Protection",
      "✔ Coverage for Unique Professions & Businesses",
    ],
    blank_cell: "4",
  },
  "Homeowner Insurance": {
    description:
      "Your Home, Your Haven – Keep It Protected. Your home is more than just a structure; it’s your safe space.",
    benefits: [
      "✔ Property & Structural Coverage",
      "✔ Personal Belongings Protection",
      "✔ Liability & Additional Living Expenses Coverage",
    ],
    blank_cell: "5",
  },
  "Auto Insurance": {
    description:
      "Drive with Confidence, Stay Protected. Accidents happen, but with the right Auto Insurance, you won’t have to worry.",
    benefits: [
      "✔ Collision & Comprehensive Coverage",
      "✔ Roadside Assistance & Rental Car Coverage",
      "✔ Third-Party Liability Protection",
    ],
    blank_cell: "6",
  },
  "EZY: THE KEY TO EVERY PROBLEM": {
    description:
      "One Solution for All Your Insurance Needs. Finding the right insurance shouldn’t be complicated.",
    benefits: [
      "✔ One-stop solution for all insurance needs",
      "✔ Customizable plans to fit your lifestyle & budget",
      "✔ Reliable, fast, and hassle-free claims process",
    ],
    blank_cell: "7",
  },
};

const images = [
  { className: "homeCoverPage_Business", text: "Business Insurance" },
  { className: "homeCoverPage_Life", text: "Life Insurance" },
  {
    className: "homeCoverPage_LandlordTenant",
    text: "Landlord/Tenant Insurance",
  },
  { className: "homeCoverPage_Speciality", text: "Speciality Insurance" },
  { className: "homeCoverPage_Homeowner", text: "Homeowner Insurance" },
  { className: "homeCoverPage_Auto", text: "Auto Insurance" },
  {
    className: "homeCoverPage_AllInOne",
    text: "EZY: THE KEY TO EVERY PROBLEM",
  },
];

const animations = [
  "fade-in",
  "slide-in-left",
  "slide-in-right",
  "zoom-in",
  "bounce-in",
  "flip-in",
  "slide-in-up",
];

const animations1 = [
  "slide-in-right1",
  "zoom-in1",
  "bounce-in1",
  "flip-in1",
  "slide-in-up1",
  "fade-in1",
  "slide-in-left1",
];

const animations2 = [
  "zoom-in2",
  "bounce-in2",
  "flip-in2",
  "slide-in-up2",
  "fade-in2",
  "slide-in-left2",
  "slide-in-right2",
];

const animations3 = [
  "flip-in3",
  "slide-in-up3",
  "fade-in3",
  "slide-in-left3",
  "slide-in-right3",
  "zoom-in3",
  "bounce-in3",
];

function CoverPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    startTimer();
  };

  // const currentInsurance = images[currentIndex].text;

  return (
    <div className="homeCoverPageParent">
      <div className="homeCoverPageBox">
        {images.map((item, index) => (
          <span
            key={index}
            className={`${item.className} homeCoverPage_Images`}
            style={{ display: index === currentIndex ? "flex" : "none" }}
          >
            <span className={`homeCoverPage_text ${animations[index]}`}>
              {item.text}
            </span>
            <div className="homeCoverPage_content">
              <p className={`homeCoverPage_description ${animations2[index]}`}>
                {insuranceDetails[item.text].description}
              </p>
              <ul className={`homeCoverPage_benefits ${animations3[index]}`}>
                {insuranceDetails[item.text].benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <span className={`homeCoverPage_blank ${animations1[index]}`}>
                {insuranceDetails[item.text].blank_cell}
              </span>
            </div>
          </span>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="homeCoverPageBoxdot">
        {images.map((_, index) => (
          <span
            key={index}
            style={{
              backgroundColor: index === currentIndex ? "white" : "#3113ca",
              border:
                index === currentIndex
                  ? "2px solid white"
                  : "2px solid #3113ca",
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>

      {/* Arrows for Manual Navigation */}
      <div className="homeCoverPageBoxArrow">
        <i
          className="ri-arrow-left-wide-fill homeCoverPageBoxLeftArrow"
          onClick={() => {
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            startTimer();
          }}
        ></i>
        <i
          className="ri-arrow-right-wide-fill homeCoverPageBoxRightArrow"
          onClick={() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            startTimer();
          }}
        ></i>
      </div>
    </div>
  );
}

export default CoverPage;
