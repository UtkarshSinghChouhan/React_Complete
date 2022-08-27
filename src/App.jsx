import React from 'react';
import { useState } from 'react';
import "./index.css";

const App = () => {

    let [fullName , setFullName] = useState({
        fName: "",
        lName: "",
    });
    

    const inputEvent = (event) => {

        const value = event.target.value;
        const name = event.target.name;

        setFullName((preVal) => {
            console.log(preVal);

            if(name === "fname"){
                return {
                    fName: value,
                    lName: preVal.lName
                }
            }

            if(name === "lname"){
                return {
                    fName: preVal.fName,
                    lName: value
                }
            }
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (   
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h1 className='heading'> Hello, {fullName.fName} {fullName.lName}</h1>

                    <input 
                        type="text" 
                        placeholder="Enter Your First Name" 
                        onChange={inputEvent}
                        name="fName"
                        value={fullName.fName}
                    />

                    <input 
                        type="text" 
                        placeholder="Enter Your Last Name" 
                        onChange={inputEvent}
                        name="lName"
                        value={fullName.lName}
                    />

                    <button type="submit"> Click to Submit 👍 </button>
                </div>
            </form>
        </>
    );
}


export default App;