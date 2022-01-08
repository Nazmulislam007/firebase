const submit = document.querySelector(".submit");
const input = document.querySelector(".input");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5_mUB_A9UxfPa4okRZpDtXlpvORew7vg",
  authDomain: "tutorial-df4f8.firebaseapp.com",
  databaseURL:
    "https://tutorial-df4f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tutorial-df4f8",
  storageBucket: "tutorial-df4f8.appspot.com",
  messagingSenderId: "120377297207",
  appId: "1:120377297207:web:5c5f9a5bbdcdb80de872b2",
};

const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  push,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";

const database = getDatabase(app);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const inputVal = input.value;
  //   set(ref(database, "/user"), inputVal);
  //   push(ref(database, "/user"), inputVal);
});
