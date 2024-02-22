import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCDIesRViggsWwERU6fjnyQ1kNudbs9onI",
    authDomain: "trisso-526aa.firebaseapp.com",
    projectId: "trisso-526aa",
    storageBucket: "trisso-526aa.appspot.com",
    messagingSenderId: "919099844932",
    appId: "1:919099844932:web:b42a525b57cf4c53ba8f11"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);