import firebase from 'firebase/app'
import 'firebase/storage'

 const firebaseConfig = {
    apiKey: "AIzaSyBh8JG4ZBWpVvlRnavq6JM0E12Q1K6gPO4",
    authDomain: "react-now.firebaseapp.com",
    databaseURL: "https://react-now.firebaseio.com",
    projectId: "react-now",
    storageBucket: "react-now.appspot.com",
    messagingSenderId: "11528680042",
    appId: "1:11528680042:web:9dc4a07eec759f9c845013"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase