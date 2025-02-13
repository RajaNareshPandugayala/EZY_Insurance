import React from "react";
import blankPhoto from "../../PicesForPages/blank.jpg";
import SriAnnapareddy from "../../PicesForPages/SriAnnapareddy.webp";

import { Link } from "react-router-dom";

function YourTeamMembers() {
  const teamMembers = [
    {
      name: "Sri Annapareddy",
      role: "Sr. Loan Originator",
      photo: SriAnnapareddy,
      link: "sri-annapareddy",
      nmls: "2052589",
    },
    {
      name: "Coming Soon",
      role: "---- ---------",
      photo: blankPhoto,
      link: "#",
      nmls: "-------",
    },
  ];

  return (
    <div className="teamBoxParent">
      <div className="teamBox">
        <span className="teamHeading">Meet Our Team</span>
        <span className="teamContent">
          Our team at EZY Insurance is fast, friendly, experienced, and here to
          help you every step of the process!
        </span>
        <div className="teamListBoxParent">
          {teamMembers.map((member, index) => (
            <Link
              to={member.link !== "#" ? `/our-staff/${member.link}` : "#"}
              className="teamListBox"
              key={index}
            >
              <span className="teamListSpanImage">
                <img src={member.photo} alt={member.name} />
              </span>
              <span className="teamListNameOfficer">
                <span className="teamListName">{member.name}</span>
                <span className="teamListOfficer">{member.role}</span>
                <span className="teamListOfficer">NMLS#: {member.nmls}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourTeamMembers;
