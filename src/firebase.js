// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCE2n97GJgyawqGXs0wBrS1_AJ7J6dOA4",
    authDomain: "muratdemirkiran-01.firebaseapp.com",
    projectId: "muratdemirkiran-01",
    storageBucket: "muratdemirkiran-01.firebasestorage.app",
    messagingSenderId: "455086281057",
    appId: "1:455086281057:web:c8f916c2e77a392b3ff520",
    measurementId: "G-LGR2KRNLE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
