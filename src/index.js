import React from "react";
import ReactDOM from "react-dom";
import "./index.css"


// For Inline-CSS
const styling = {
  color: " "
};

let date = new Date();
date = date.getHours();
let greeting = "";

if(date >= 1 && date < 12){
  greeting = "Good Morning";

  // Dynamically assigning the CSS
  styling.color = "green"
}

else if(date >= 12 && date < 19){
  greeting = "Good Afternoon"

  // Dynamically assigning the CSS
  styling.color = "Orange"
}

else{
  greeting = "Good Night"

  // Dynamically assigning the CSS
  styling.color = "Blue"
}

ReactDOM.render(
  <>  
  <h1>Hello Sir, <span style={styling}> {greeting} </span></h1>
  </>,
  document.getElementById('root')
);