importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDX9EnRzvERRLk1uS-dPNcR3kbdON6yyzE",
  authDomain: "pwa-exptracker.firebaseapp.com",
  databaseURL: "https://pwa-exptracker.firebaseio.com",
  projectId: "pwa-exptracker",
  storageBucket: "pwa-exptracker.appspot.com",
  messagingSenderId: "364006736226",
  appId: "1:364006736226:web:b503d0fb4b38804a0c6c3b",
});

firebase.messaging();
