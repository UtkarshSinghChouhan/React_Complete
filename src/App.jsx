import React from 'react';
import './index.css'
import Cards from './Cards.jsx';
import seriesData from './seriesData.jsx';


console.log(seriesData[0]);

function App(){
    return (
        <>
            <h1 className='heading_style'> List of Top 5 Netflix Series </h1>

            {seriesData.map((ele, index, array) => {

                return(
                    <Cards imgsrc = {ele.imgsrc}
                           title = {ele.title}
                           seriesName = {ele.seriesName}
                           link = {ele.link}
                    />
                )

            })}
        </>

    );

}

export default App;