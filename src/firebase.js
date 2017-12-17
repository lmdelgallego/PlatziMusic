import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC6d6Tlr8scImGWMqcRFpeMIG5iWax7ZHw",
  authDomain: "platzimusic-10557.firebaseapp.com",
  databaseURL: "https://platzimusic-10557.firebaseio.com",
  projectId: "platzimusic-10557",
  storageBucket: "",
  messagingSenderId: "976509655077"
};
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase;