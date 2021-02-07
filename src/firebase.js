import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZ9EoAwV6i326DSQSKaCDpip_h03_g_vk",
    authDomain: "crud-react-797d7.firebaseapp.com",
    databaseURL: "https://crud-react-797d7-default-rtdb.firebaseio.com",
    projectId: "crud-react-797d7",
    storageBucket: "crud-react-797d7.appspot.com",
    messagingSenderId: "134453579386",
    appId: "1:134453579386:web:6089c858734a9198bcb5c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}