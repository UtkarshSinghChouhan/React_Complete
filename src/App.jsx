import React from 'react';
import './index.css'
import Netflix from './Netflix';
import Amazon from './Amazon';

const pick = 'amazon';

const Choice = () => {
    if(pick === 'netflix'){
        return <Netflix/>;
        
    }

    else{
       return <Amazon/>;
    }
}

function App(){
    return (
        <>
            <h1 className='heading_style'> List of Top 5 Netflix Series </h1>
            <Choice/>
           
        </>

    );

}

export default App;