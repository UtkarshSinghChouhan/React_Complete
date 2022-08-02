// Some of important modules we need

// var React = `require('react');
import React from 'react';

// var ReactDOM = require('react-dom')
import ReactDOM from 'react-dom';


// ReactDOM.render(
//   // Since React v16 it is possible for render() to return an array of elements
//   [
//     <h1> HELLO WORLD!!</h1>, 
//     <p>This is Utkarsh Singh Chouhan</p>,
//     <ul>
//       <li>Normal People</li>
//       <li>Fresh</li>
//       <li>Long Shot</li>
//       <li>Five Feet Apart</li>
//       <li>Me Before You</li>
//     </ul>
//   ],
  
  
//   // // or we can enclose all the elements into one single element to render multiple elements
//   // <div>
//   //   <h1> HELLO WORLD!!</h1>, 
//   //   <p>This is Utkarsh Singh Chouhan</p>
//   // </div>,
// document.getElementById('root')
// );




// =========== JavaScript expression in JSX ===================

const myName = 'Utkarsh Singh';
const lastName = 'Chouhan';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const image = 'https://media4.giphy.com/media/sEN7huyD6NwFRhi2ZT/200.gif?cid=95b279445844639e237830031c47d51a3880003b3b7e2164&rid=200.gif&ct=g';
const link = 'https://www.youtube.com/watch?v=cKOegEuCcfw';

ReactDOM.render(
  <>
    <h1 contentEditable="true">My name is {myName} {lastName}</h1>
    <h1>My name is {myName + " " + lastName}</h1>


    {/* Using the template literal */}
    <h1>{`My first name is ${myName} and my last name is ${lastName}`}</h1>

    <img src={image} alt='not available'/>
    <img src={image} alt='not available'/>
    <img src={image} alt='not available'/>

    <a href={link} target='_utkarsh'> <img src={image} alt='utkarsh'/></a>


    {/* Note that we can only use 'expression' inside the curly braces and not the statements like if-else statements */}
     <h3>My favourite number is {3 + 8}</h3>



    {/* Using */}
     <h3>{`Today's date : ${currDate}`}</h3>
     <h3>{`Current date : ${currTime}`}</h3>
  </>,
  
  document.getElementById('root')
);