import React from 'react';
import './index.css'
import Cards from './Cards.jsx';
import seriesData from './seriesData.jsx';


console.log(seriesData[0]);

function App(){
    return (
        <>
            <h1 className='heading_style'> List of Top 5 Netflix Series </h1>

            <Cards imgsrc = {seriesData[0].imgsrc}
                   title = {seriesData[0].title}
                   seriesName = {seriesData[0].seriesName}
                   link = {seriesData[0].link}
            />

            
            <Cards imgsrc = {seriesData[1].imgsrc}
                   title = {seriesData[1].title}
                   seriesName = {seriesData[1].seriesName}
                   link = {seriesData[1].link}
            />

            
            <Cards imgsrc = {seriesData[2].imgsrc}
                   title = {seriesData[2].title}
                   seriesName = {seriesData[2].seriesName}
                   link = {seriesData[2].link}
            />


            <Cards imgsrc = {seriesData[3].imgsrc}
                   title = {seriesData[3].title}
                   seriesName = {seriesData[3].seriesName}
                   link = {seriesData[3].link}
            />


            <Cards imgsrc = {seriesData[4].imgsrc}
                   title = {seriesData[4].title}
                   seriesName = {seriesData[4].seriesName}
                   link = {seriesData[4].link}
            />


            <Cards imgsrc = {seriesData[5].imgsrc}
                   title = {seriesData[5].title}
                   seriesName = {seriesData[5].seriesName}
                   link = {seriesData[5].link}
            />
        </>

    );

}

export default App;