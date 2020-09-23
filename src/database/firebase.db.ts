import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC4YbypEpy3q45BdXpcODFcEO30g4PaOrA",
    authDomain: "cundeportes-login-server.firebaseapp.com",
    databaseURL: "https://cundeportes-login-server.firebaseio.com",
    projectId: "cundeportes-login-server",
    storageBucket: "cundeportes-login-server.appspot.com",
    messagingSenderId: "385077996687",
    appId: "1:385077996687:web:1d0311a43db7aef32694fa"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebaseApp.firestore();