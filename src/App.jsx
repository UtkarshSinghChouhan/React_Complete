import React from 'react';
import { useState } from 'react';
import './index.css';

// let count = 0;




const App = () => {
    const IncreCount = () => {
        setCount(++count);
    }

    let [count, setCount] = useState(0);
    
    return(
        <>
            <h1 className='heading'> {count} </h1>
            <button onClick={IncreCount}> Click Me </button>
        </>
    );
}

export default App;