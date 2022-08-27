import React from "react";
import './index.css';
import { useState } from 'react';

const App = () => {

    let [value, setValue] = useState("");
    let [fullname, setFullname] = useState("");

    const inputEvent = (event) => {
        setValue(event.target.value)
    }

    const onSubmit = () => {
        setFullname(value);
    }

    return(
        <>
            <div>
                <h1 className="heading"> Hello {fullname}</h1>
                <input 
                    type="text"
                    placeholder="Enter your Name"
                    onChange={inputEvent}
                />
                <button onClick={onSubmit}> Click me </button>
            </div>
        </>
    );
}

export default App;