import firebase from 'firebase'
require("@firebase/firestore")



  var firebaseConfig = {
    apiKey: "AIzaSyCUdA6ZWN3ED5oED0gMfpOXVQaoIp9Ltag",
    authDomain: "barter-app-fb481.firebaseapp.com",
    projectId: "barter-app-fb481",
    storageBucket: "barter-app-fb481.appspot.com",
    messagingSenderId: "1085598811609",
    appId: "1:1085598811609:web:6d173bb5f81982927045c8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()