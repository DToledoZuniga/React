import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-6XBDuB0UyqlqkvXj_A7dvyP-AU89GyY",
  authDomain: "react-442de.firebaseapp.com",
  projectId: "react-442de",
  storageBucket: "react-442de.appspot.com",
  messagingSenderId: "846298233566",
  appId: "1:846298233566:web:82374e888405b88012604f"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp=()=>{
    return app
}