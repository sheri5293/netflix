//.! var React = require('react'); ...... to acquire/get react in {ES5}//
import React from 'react';   //! to acquire/get react in {ES6}//

//.! var ReactDOM = require('react-dom'); ...... to acquire/get react-dom in {ES5}//

import ReactDOM from 'react-dom';

//!react dom render is used for seen the value rect dom.render('kya dikhna ha' , 'kahan dikhana ha' , callback function)///

const fname='sheheryar';
const lname='khan';
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
ReactDOM.render(                                //!render method is only used for one jsx elemenet for mltiple we use div or [] div cause extra div which may disturb while css so we used react fragment <></>//
<>
<h2>{`Hello my name is ${fname} ${lname}`}  </h2>
<p>today date is {currDate} </p>
<p>current time is {currTime} </p>
   </>, 
  document.getElementById('root'));
 

