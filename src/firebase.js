import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD_nlAphp5d7fpJVQLSZvacgxB9b7zbxLM",
    authDomain: "shophowell-16263.firebaseapp.com",
    projectId: "shophowell-16263",
    storageBucket: "shophowell-16263.appspot.com",
    messagingSenderId: "315634168832",
    appId: "1:315634168832:web:fec59a0df6520198a5d4e5",
    measurementId: "G-R72V8YNPNM"
};

const app = initializeApp(firebaseConfig);

export default app