import React from "react";
const date = new Date(2025, 6, 6, 20);
const currentTime = date.getHours();
const customStyle = {
  color: "",
};
function Heading() {
  return;
  function App() {
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
  }
}
export default Heading;
