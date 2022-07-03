import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain:process.env.REACT_APP_API_DOMAIN_FIREBASE,
  projectId: process.env.REACT_APP_API_PROJECTID,
  storageBucket:process.env.REACT_APP_API_STORAGE,
  messagingSenderId:process.env.REACT_APP_API_MESSAGESENDER,
  appId:process.env.REACT_APP_API_APPID,
  measurementId:process.env.REACT_APP_API_MEASUREMENID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
