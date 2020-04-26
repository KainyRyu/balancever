import firebase from "firebase/app"
import "firebase/firestore"
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAKDM2X8ybQUpEEVCy2uVbaqRe-agO91fc",
  authDomain: "balancever.firebaseapp.com",
  databaseURL: "https://balancever.firebaseio.com",
  projectId: "balancever",
  storageBucket: "balancever.appspot.com",
  messagingSenderId: "570630371156",
  appId: "1:570630371156:web:400c398efb82111d9fbac1",
  measurementId: "G-H8LKRK1LXX"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase

