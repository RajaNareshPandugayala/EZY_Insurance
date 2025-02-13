import React, { useState, useEffect, useRef } from "react";

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

function CoverPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    startTimer();
  };

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
