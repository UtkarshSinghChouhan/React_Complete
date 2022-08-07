import React from 'react';
import './index.css'
import Cards from './Cards.jsx';

function App(){
    return (
        <>
            <h1 className='heading_style'> List of Top 5 Netflix Series </h1>

            <Cards imgsrc='https://i.pinimg.com/564x/9c/b0/23/9cb023a6e7ca5538813016d2c19127f3.jpg'
                title='A Netflix Original Series'
                seriesName='Dark'
                link='https://www.netflix.com/in/title/80990668?source=35'
            />

            
            <Cards imgsrc='https://i.pinimg.com/564x/4c/26/8f/4c268f21168252e3d63663f0dfbad4e6.jpg'
                title='A Netflix Original Series'
                seriesName='Extra Curricular'
                link='https://www.netflix.com/in/title/80990668?source=35'
            />

            
            <Cards imgsrc='https://i.pinimg.com/564x/ac/51/59/ac51593e0d98b1a8cbe45d1527d197aa.jpg'
                title='A Netflix Original Series'
                seriesName='Stranger things'
                link='https://www.netflix.com/in/title/80990668?source=35'
            />
        </>

    );

}

export default App;