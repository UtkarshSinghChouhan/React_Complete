import React from 'react';
import ReactDOM from 'react-dom';

// Here we are importing a single data, hence instead of importing 'App' we need to write 'myName'
// if we are importing a default value,then we can use any name instead of 'myName'

// import myName, {favProgram, favYoutuber, favYoutuber2} from './App.jsx';



// Instead of importing one-thing one-by-one, we can import like this
import * as obj from './App.jsx';


ReactDOM.render(
    <>
        {/* <ol>
            <li>{myName}</li>
            <li>{favProgram}</li>
            <li>{favYoutuber()}</li>
            <li>{favYoutuber2()}</li>
        </ol> */}

        <ol>
            <li>{obj.default}</li>
            <li>{obj.favProgram}</li>
            <li>{obj.favYoutuber()}</li>
            <li>{obj.favYoutuber2()}</li>
        </ol>
    </>
    , document.getElementById('root')
);