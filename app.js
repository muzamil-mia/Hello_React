
import React from "react";
import ReactDOM from "react-dom/client";
/** 

<div id="parent">
  <div id="child">
    <h1>I am heading1</h1>
    <h1>i am sibling</h1>
  </div>
  <div id="child">
    <h1>I am heading1</h1>
    <h1>i am sibling</h1>
  </div>
</div>

ReactElement(Object) => HTML(Browser understands);

*/
/** 
const parent = React.createElement(
  "div", {id:"parent"},
    [React.createElement("div", {id:"child"},
    [React.createElement("h1", {id: "h1"}, "i am heading one"),
    React.createElement("h1",{id:"h2"}, "i am sibling")]),
    React.createElement("div", {id:"child"},
    [React.createElement("h1", {id: "h1"}, "i am heading one"),
    React.createElement("h1",{id:"h2"}, "i am sibling")])
  ]);
*/

  //simple way of doing the above code
  const heading1 = React.createElement("h1",{id:"h1"},"i am heading one");
  const heading2 = React.createElement("h2",{id:"h2"}, "i am react");
  const container = React.createElement("div", {id:"div"}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); //everything there will be rendered inside this root
//react works in a place where we want head, body, footer
//const root1 = ReactDOM.createRoot(document.getElementById("header"));  //now react will work only in header part

/*
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
console.log(parent);
*/

/*
const heading = React.createElement("h1", {id:"heading", xyz:"abc"},  "hello from react");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
//root1.render(heading);
//console.log(heading); //object
*/

