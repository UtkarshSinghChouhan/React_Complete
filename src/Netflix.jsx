import React from 'react';
import Cards from './Cards.jsx'
import seriesData from './seriesData.jsx'

const Netflix = ( )=> {
    return(
        <Cards key = {seriesData[1].id}
               imgsrc = {seriesData[1].imgsrc}
               title = {seriesData[1].title}
               seriesName = {seriesData[1].seriesName}
               link = {seriesData[1].link}
        />
    );
}

export default Netflix;