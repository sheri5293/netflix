//.! var React = require('react'); ...... to acquire/get react in {ES5}//
import React from 'react';   //! to acquire/get react in {ES6}//

//.! var ReactDOM = require('react-dom'); ...... to acquire/get react-dom in {ES5}//

import ReactDOM from 'react-dom';

//!react dom render is used for seen the value rect dom.render('kya dikhna ha' , 'kahan dikhana ha' , callback function)//

ReactDOM.render(                                //!render method is only used for one jsx elemenet for mltiple we use div or [] div cause extra div which may disturb while css so we used react fragment <></>//
<>
<h1> Netflix series  </h1>     
   <p>List of 5 best series</p>
 <ol>
   
 <li> <h3>Game of thrones</h3> </li>
 <li> <h3>money hesit</h3> </li>
 <li>  <h4>Lucifer</h4> </li>
 <li>   <h5>Avengers</h5> </li>
   
 </ol>
   </>, 
  document.getElementById('root'));
