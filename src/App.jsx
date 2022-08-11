import React from "react";
import "./index.css";
import SlotMachine from './SlotMachine.jsx'




const App = () => {
    return(
        <>      
            <h1 classsName='heading_style'> 🎰Welcome to <span style={{fontWeight:'bold'}}> Slot Machine Game</span>🎰</h1>
           <div>
                <SlotMachine x='😄' y='😄' z='😄'/>
                <SlotMachine x='😄' y=' 🎅 ' z='😄'/>
                <SlotMachine x='😄' y='😄' z=' 👧 '/>
            </div> 
        </>
    );
};

export default App;