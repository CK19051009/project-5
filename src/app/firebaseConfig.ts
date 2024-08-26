import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9weBqE3y020ACXWfP4cd7sNyo98GqYKk",
  authDomain: "project-5-9dffb.firebaseapp.com",
  databaseURL: "https://project-5-9dffb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-5-9dffb",
  storageBucket: "project-5-9dffb.appspot.com",
  messagingSenderId: "27345096555",
  appId: "1:27345096555:web:00ce362c9ff1884ecec62e"
};


const app = initializeApp(firebaseConfig);
const dataFirebase = getDatabase(app)
const authFirebase = getAuth(app)

export {dataFirebase , authFirebase}


