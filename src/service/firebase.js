import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN,
    projectId:process.env.REACT_APP_PROJECT_ID
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const fireBaseAuth = firebaseApp.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()
export const fireBaseDataBase = firebaseApp.database()
