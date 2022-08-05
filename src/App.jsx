import React from "react";

function App(){

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

    return (
        <h1>Hello Sir, <span style={styling}> {greeting} </span></h1>
    )
}

export default App;