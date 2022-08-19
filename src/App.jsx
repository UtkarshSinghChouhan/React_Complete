import React from 'react';
import { useState } from 'react';
import './index.css';

const App = () => {
    let Time = new Date().toLocaleTimeString();

    setInterval(function (){
        Time = new Date().toLocaleTimeString();
        updatetime(Time);
    }, 1000);

    let [currTime, updatetime] = useState();

    return (
        <>
            <h1 className='heading'>{currTime}</h1>
        </>
    );
}

export default App;