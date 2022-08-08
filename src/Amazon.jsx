import React from 'react';
import Cards from './Cards.jsx'
import seriesData from './seriesData.jsx'

const Amazon = () => {
    return(
        <Cards key = {seriesData[3].id}
               imgsrc = {seriesData[3].imgsrc}
               title = {seriesData[3].title}
               seriesName = {seriesData[3].seriesName}
               link = {seriesData[3].link}
        />
    )
}

export default Amazon;
