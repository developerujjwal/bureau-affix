 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
 import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
 import { getStorage, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAZ8H5V43Im4GXh9giiVFh6ZQcmDw0hq4Y",
   authDomain: "bureau-affix-e756f.firebaseapp.com",
   databaseURL: "https://bureau-affix-e756f-default-rtdb.firebaseio.com",
   projectId: "bureau-affix-e756f",
   storageBucket: "bureau-affix-e756f.appspot.com",
   messagingSenderId: "193095277862",
   appId: "1:193095277862:web:0872830fa385fe347235e7",
   measurementId: "G-VYM13FB1ME"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // const analytics = getAnalytics(app);
 const db = getDatabase(app);

 export {app,db,getStorage,uploadBytesResumable,getDownloadURL,ref,get,set};