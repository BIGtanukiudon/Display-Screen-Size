import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import DisplayScreenSize from "./DisplayScreenSize";

const root = document.createElement("div");
root.id = "crx-root";
document.body.append(root);

ReactDOM.render(
  <React.StrictMode>
    <DisplayScreenSize />
  </React.StrictMode>,
  root
);
