import React, { useState } from 'react';
import './index.css';

const App = () => {

    let Time = new Date().toLocaleTimeString();

    const [initialTime, currentTime] = useState(Time);

    const updateTime = () => {
        // Updating the value of time-string
        Time = new Date().toLocaleTimeString();

        // Now currentTime() method will update the 'initialTime'
        currentTime(Time)
    }
    
    return(
        <>
            <h1 className='heading'> {initialTime} </h1>
            <button onClick={updateTime}> Get Time</button>
        </>
    );
}

export default App;