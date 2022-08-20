import React from 'react';
import { useState } from 'react';
import "./index.css";

const App = () => {

    let [name , setName] = useState(" ");
    let [fullName , setFullName] = useState();

    const inputEvent = (event) => {
        setName(event.target.value);
    }

    const onSubmit = () => {
        setFullName(name);
    }

    return (
        <>
            <div>
                <h1 className='heading'> Hello, {fullName} </h1>
                <input type="text" placeholder="Enter Your Name" onChange={inputEvent}/>
                <button onClick={onSubmit}> Click Me </button>
            </div>
        </>
    );
}


export default App;