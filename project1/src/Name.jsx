import React, { useState } from "react";

export default function Name() {
//   let user = "Sulaim";

let [user, setName]= useState("Sulaim");
const change = () => {
    setName(user === "Sulaim" ? "Saadath":"Sulaim");
}
  return (
    <div>
      <h1 className="Name">Hello {user}</h1>
      <button onClick={change} className="Name">Change Name</button>
    </div>
  );
}
