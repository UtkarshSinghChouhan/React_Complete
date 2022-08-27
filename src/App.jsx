import React from 'react';
import { useState } from 'react';
import './index.css';

const App = ()=> {
    let time = new Date().toLocaleTimeString();
    let[Time, updateTime] = useState(time);

    setInterval(() => {
        time = new Date().toLocaleTimeString();
        updateTime(time);
    }, 1000);

    return(
        <>
            <h1 className='heading' >{Time}</h1>
        </>
    );
}

export default App;