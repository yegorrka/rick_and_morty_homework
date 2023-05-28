import React from "react";

export const EpisodesCard = ({ name, air_date, episode }) => {
  return (
    <div
       style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        gap: "10px",
        border: '1px solid gray',
        width: '240px',
        height: '128px',
        background: "#FAFAFA",
        margin: "20px",

      }}
    >
      <span>{name}</span>
      <span>{air_date}</span>
      <span>{episode}</span>
    </div>
  );
};
