import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBylsrzdNdEz2JuZ_A57PXWCKVpGH0ixss",
  authDomain: "magia-das-velas-ababb.firebaseapp.com",
  projectId: "magia-das-velas-ababb",
  storageBucket: "magia-das-velas-ababb.appspot.com",
  messagingSenderId: "50685209881",
  appId: "1:50685209881:web:30f89c01907cf91e49a988"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)
