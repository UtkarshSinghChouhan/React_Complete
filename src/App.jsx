import React from 'react';
import { useState } from 'react';
import "./index.css";

const App = () => {

    let [name , setName] = useState("");
    let [fullName , setFullName] = useState();

    let [LastName , setLastName] = useState();
    let [LastNameNew , setLastNameNew] = useState("");
    

    const inputEvent = (event) => {
        setName(event.target.value);
    }

    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFullName(name);
        setLastNameNew(LastName);
    }

    return (   
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1 className='heading'> Hello, {fullName} {LastNameNew } </h1>

                    <input 
                        type="text" 
                        placeholder="Enter Your First Name" 
                        onChange={inputEvent}
                        value={name}
                    />

                    <input 
                        type="text" 
                        placeholder="Enter Your Last Name" 
                        onChange={inputEventTwo}
                        value={LastName}
                    />

                    <button type="submit"> Click to Submit 👍 </button>
                </div>
            </form>
        </>
    );
}


export default App;