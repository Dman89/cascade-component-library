/* eslint-disable react/prop-types */
import React from "react";
import "./style.css";

function ProfileIcon({ user }) {
  return (
    <button className="ProfileIcon" type="button">
      {user.iconUrl ? <img src={user.iconUrl} alt="Icon" /> : ""}
    </button>
  );
}

export default ProfileIcon;
