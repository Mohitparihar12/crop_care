import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth,GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBPTZsfnq_qHLxA__MwoCKaJ3o0sQ8BIGY",
  authDomain: "mycc-eeecb.firebaseapp.com",
  projectId: "mycc-eeecb",
  storageBucket: "mycc-eeecb.appspot.com",
  messagingSenderId: "35722063113",
  appId: "1:35722063113:web:46930c3f11e6000e6cb7d8",
  measurementId: "G-BZD9D57H34"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth(app);
auth.languageCode="it"
const button=document.querySelector("#create");
button.addEventListener('click',function(event){
  event.preventDefault();
  const email=document.querySelector("#email").value;
const password=document.querySelector("#password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Account Created");
    window.location.href='login.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Account already exits");
  });

});


const googleLog = document.querySelector("#google");
googleLog.addEventListener("click",function(event){
  alert("Opening google")
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="demo.html"
  
  }).catch((error) => {
  
    const errorCode = error.code;
    const errorMessage = error.message;
  });

});
