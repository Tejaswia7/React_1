import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
function Heading() {
  return <h1>My Favorite Food!!</h1>;
}
const fname = "Teja";
const date = new Date(2024, 6, 6, 15);
const currentTime = date.getHours();
const customStyle = {
  color: "",
};
var greeting;
if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}
root.render(
  <div>
    <Heading />
    <img
      className="food-item"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG33Jw_WLfurC8idC1n-5SBSUv0YTcUmvsqA&s"
    />
    <img
      className="food-item"
      src="https://images.unsplash.com/photo-1551024601-bec78aea704b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
    />
    <h1 style={customStyle}>{greeting}</h1>
  </div>
);
