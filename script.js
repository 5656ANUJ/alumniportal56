// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZOOeUEaaO8SM3Iu3VjG7WHm6kkXJ8vto",
  authDomain: "login-24747.firebaseapp.com",
  projectId: "login-24747",
  storageBucket: "login-24747.firebasestorage.app",
  messagingSenderId: "344112026811",
  appId: "1:344112026811:web:28c4d46292790c9057c59e",
  measurementId: "G-BLDB6B1D02",
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the values inside the event listener
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  alert(`Email: ${email}, Password: ${password}`);
});
