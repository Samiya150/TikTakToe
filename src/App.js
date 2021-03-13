import React, { Component } from 'react';
import './App.css';
import firebaseConfig  from './firebaseConfig';
import * as firebaseui from "firebaseui";
import Game from './game';
import firebase from "firebase";



class App extends Component {
 
  componentDidMount() {
   
    const uiConfig = {
      
      signInSuccessUrl: './game' ,//"https://netflix-clone-ankur.herokuapp.com/", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      tosUrl: './game'
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
    
    
    
  }
  render() {
    
    return (
      <>
      <h1>REACT PHONE AUTHENTICATION</h1>
      <div id="firebaseui-auth-container"></div>
      
      
      </>
    )
  }
}

export default App;