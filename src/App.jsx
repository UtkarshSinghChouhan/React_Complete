import React, {useState} from "react";
import './index.css';



const App = () => {

    let color = "#FAEBD7";
    
    let [newColor, setColor] = useState(color);
    let [name, setName] = useState("Anitique-White");
 
    const bgChanges = () => {

        let updatedColor = "#FA8072";
        setColor(updatedColor);

        setName('Salmon-Pink');
    }

    // Double-Click or Mouse-Leave event to change the color back to normal.
    const bgBack = () => {
        setColor("#FAEBD7");
        setName("Anitique-White")
    }


    return (
        <>
            <div style={{backgroundColor : newColor}}>
                {/* <button onClick={bgChanges} onDoubleClick={bgBack}> {name} </button> */}
                <button onMouseEnter={bgChanges} onMouseLeave={bgBack}> {name} </button>
            </div>
        </>
    );
}


export default App;