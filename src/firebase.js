// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxuxpiHkZadxO0CfT29cwlSKN9JtRhhMY",
  authDomain: "welcome-fff1c.firebaseapp.com",
  projectId: "welcome-fff1c",
  storageBucket: "welcome-fff1c.appspot.com",
  messagingSenderId: "439548670156",
  appId: "1:439548670156:web:1d61f9a22c0bc897605269",
  measurementId: "G-9YLR37EEDP"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);

export { firebaseApp }