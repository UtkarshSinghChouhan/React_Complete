//======= Importing CSS ==========
import "./index.css";


// Some of important modules we need

// var React = `require('react');
import React from 'react';

// var ReactDOM = require('react-dom')
import ReactDOM from 'react-dom';



// .heading{
//     color: #fa9191;
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     box-shadow: 0 2px 4px #ffe9c5;
//     margin: 50px;
//     font-family: 'Josefin Sans', sans-serif;
//   }


// =========== JavaScript expression in JSX ===================

const myName = 'Utkarsh Singh';
const lastName = 'Chouhan';

// In react we add inline CSS by making an object
const heading = {
    color: '#fa9191',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px #ffe9c5',
    margin: '50px',
    fontFamily: "'Josefin Sans', sans-serif"
}



const image = 'https://media4.giphy.com/media/sEN7huyD6NwFRhi2ZT/200.gif?cid=95b279445844639e237830031c47d51a3880003b3b7e2164&rid=200.gif&ct=g';
const link = 'https://www.youtube.com/watch?v=cKOegEuCcfw';

ReactDOM.render(
  <>
  <div>
    <h1 style={heading}>My name is {myName + " " + lastName}</h1>
  </div>




    <div className="img_div">
      <img src={image} alt='not available'/>
      <img src={image} alt='not available'/>
      <a href={link} target='_utkarsh'> <img src={image} alt='utkarsh'/></a>
    </div>



  </>,
  
  document.getElementById('root')
);
