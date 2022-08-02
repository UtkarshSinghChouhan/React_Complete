//======= Importing CSS ==========
import "./index.css";


// Some of important modules we need

// var React = `require('react');
import React from 'react';

// var ReactDOM = require('react-dom')
import ReactDOM from 'react-dom';






// =========== JavaScript expression in JSX ===================

const myName = 'Utkarsh Singh';
const lastName = 'Chouhan';



const image = 'https://media4.giphy.com/media/sEN7huyD6NwFRhi2ZT/200.gif?cid=95b279445844639e237830031c47d51a3880003b3b7e2164&rid=200.gif&ct=g';
const link = 'https://www.youtube.com/watch?v=cKOegEuCcfw';

ReactDOM.render(
  <>
  <div>
    <h1 className="heading">My name is {myName + " " + lastName}</h1>
  </div>




    <div className="img_div">
      <img src={image} alt='not available'/>
      <img src={image} alt='not available'/>
      <a href={link} target='_utkarsh'> <img src={image} alt='utkarsh'/></a>
    </div>



  </>,
  
  document.getElementById('root')
);
