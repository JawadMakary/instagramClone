import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase'
import {firebase , FieldValue} from './lib/firebase'
console.log(firebase)

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase,FieldValue}}>
    <App />
    </FirebaseContext.Provider>

  ,
  document.getElementById('root')
);
// client side rendering
// db-> firebase
// dependencies in nmp.md
//tailwind for styling

// folder structure:
// src:-->
// components,constants, context,hooks,helpers,lib(firebase), services(firebase fct), styles(tailwind)