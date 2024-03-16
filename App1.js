import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"h1"}, "i am heading two");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);