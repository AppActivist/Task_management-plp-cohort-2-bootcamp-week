import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUlX9rVcHcvLpPYGTFXoLcVC1B9bHhp60",
  authDomain: "plp-cohort-2-17daf.firebaseapp.com",
  projectId: "plp-cohort-2-17daf",
  storageBucket: "plp-cohort-2-17daf.appspot.com",
  messagingSenderId: "540919904730",
  appId: "1:540919904730:web:9fd1454f188e3a965e28e3",
  measurementId: "G-V621021TLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

const signupEmailIn = document.getElementById("email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const confirmSignupPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", () => {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignupPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then(() => {
        window.alert("Success! Account Created");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);

        // window.alert("Error Occurred. Try Again")
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  password = passwordInput.value;

  if (isVerified) {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.alert("Success! Welcome Back");
        window.location = "./createTask.html";
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
        // window.alert("Error Occurred. Try Again")
      });
  }
});

signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});
