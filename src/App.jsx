import react, { useState } from 'react';
import './index.css';

const App = () => {

    const initialColor = "#FAEBD7";
    let [bg, setBg] = useState(initialColor);
    let [name, setName] = useState("Antique-White");

    const bgChange = () => {
        setBg("#ff91a4");
        setName("Salmon-Pink")
    }

    const backToNormal = () => {
        setBg("#FAEBD7");
        setName("Antique-White")
    }

    return(
        <>
        <div style={{backgroundColor:bg}}>
          <button onMouseEnter={bgChange} onMouseLeave={backToNormal}>{name}</button>  
        </div>
        </>
    );
}

export default App;