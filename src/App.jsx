import React from 'react';
import './index.css';

let count = 0;

const IncreCount = () => {
    count ++;
    console.log(count)
    document.getElementsByClassName('heading').innerHTML = {count};
}
 

const App = () => {
    return(
        <>
            <h1 className='heading'> {count} </h1>
            <button onClick={IncreCount}> Click Me </button>
        </>
    );
}

export default App;