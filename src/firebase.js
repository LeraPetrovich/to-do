import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKKzJQfXFEw7SCDA76RzCgvDoSN0Lq21o",
  authDomain: "to-do-d6173.firebaseapp.com",
  projectId: "to-do-d6173",
  storageBucket: "to-do-d6173.appspot.com",
  messagingSenderId: "736961004959",
  appId: "1:736961004959:web:3218707fa56224c00429aa",
  measurementId: "G-02M7FNWPZE"
};
const firebase = initializeApp(firebaseConfig);
 export const auth = getAuth(firebase);
export default firebase;
export const firestore = getFirestore(firebase);
