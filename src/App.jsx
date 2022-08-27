import React from 'react';
import { useState } from 'react';
import './index.css';

const App = () => {
    let time = new Date().toLocaleTimeString();
    let [Time, updateTime] = useState(time);

    const IncTime = () => {
        // updating the time again
       time = new Date().toLocaleTimeString();
        updateTime(time);
    }

    return (
        <>
            <h1 className='heading'> {Time} </h1>
            <button onClick={IncTime}> Get Time </button>
        </>
    );
}

export default App;