import React from "react";
import LogoutButton from "./LogoutButton";

export default function UserHeader({ image, name, login }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <img
        src={image}
        alt={name}
        style={{ width: 100, height: 100, borderRadius: 100 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: "bold" }}>{name}</div>
        <div style={{ fontSize: 16, fontWeight: "bold" }}>@{login}</div>
        <LogoutButton />
      </div>
    </div>
  );
}
