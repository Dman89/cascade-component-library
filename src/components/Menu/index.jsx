import React from "react";
import Buttons from "../Buttons";
import { Checkbox, Foursquares, Inbox, Paper, Square } from "../Icons";
import Line from "../Line";
import MenuList from "../MenuList";
import Search from "../Search";
import Title from "../Title";
import "./style.css";

const buttons = [
  {
    text: "Dashboard",
    onClick: () => {
      alert("worked");
    },
    icon: <Foursquares />,
  },
  {
    text: "My Tasks",
    onClick: () => {
      alert("worked");
    },
    icon: <Checkbox />,
  },
  {
    text: "Inbox",
    onClick: () => {
      alert("worked");
    },
    icon: <Inbox />,
  },
  {
    text: "Reports",
    onClick: () => {
      alert("worked");
    },
    icon: <Paper />,
  },
];

const projects = [
  {
    text: "Project 1",
    icon: <Square />,
    onClick: () => {
      alert("worked");
    },
    sysId: 1,
  },
  {
    text: "Project 2",
    icon: <Square />,
    onClick: () => {
      alert("worked");
    },
    sysId: 2,
  },
  {
    text: "Project 3",
    icon: <Square />,
    onClick: () => {
      alert("worked");
    },
    sysId: 3,
  },
];

const campaigns = [
  {
    text: "Campaigns 1",
    icon: <Square />,
    onClick: () => {
      alert("worked");
    },
    sysId: 1,
  },
  {
    text: "Campaigns 2",
    icon: <Square />,
    onClick: () => {
      alert("worked");
    },
    sysId: 2,
  },
  {
    text: "Campaigns 3",
    icon: <Square />,
    onClick: () => {
      alert("worked");
    },
    sysId: 3,
  },
];

function Menu() {
  return (
    <div className="Menu">
      <Title title="Cadence" />
      <Search />
      <Buttons list={buttons} />
      <Line />
      <MenuList
        title="Projects"
        list={projects}
        plusOnClick={() => {
          alert("worked");
        }}
        limit={2}
        showMoreLink={{ show: true, text: "Show more projects" }}
      />
      <Line />
      <MenuList
        title="Campaigns"
        list={campaigns}
        plusOnClick={() => {
          alert("worked");
        }}
        limit={2}
        showMoreLink={{ show: true, text: "Show more campaigns" }}
      />
    </div>
  );
}

export default Menu;
