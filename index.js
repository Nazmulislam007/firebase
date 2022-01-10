const name = document.querySelector(".name");
const roll = document.querySelector(".roll");
const section = document.querySelector(".section");
const idNum = document.querySelector(".id");
const genbox = document.querySelector("#genbox");

const insertBtn = document.querySelector(".insert");
const getBtn = document.querySelector(".get");
const updateBtn = document.querySelector(".update");
const deleteBtn = document.querySelector(".delete");

const showData = document.querySelector(".showData");

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
  get,
  push,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-database.js";

const db = getDatabase(app);

//! insert data
insertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameVal = name.value;
  const rollVal = roll.value;
  const sectionVal = section.value;
  const idNumVal = idNum.value;
  const genboxVal = genbox.value;
  if (!idNumVal || !nameVal || !rollVal || !sectionVal || !genboxVal) {
    return alert("fill the data first");
  }
  set(ref(db, "TheStudent/" + idNumVal), {
    StudentName: nameVal,
    RollNo: rollVal,
    Section: sectionVal,
    Gender: genboxVal,
  })
    .then(() => {
      alert("data insert successfully");
    })
    .catch((err) => {
      alert(`get an error ${err}`);
    });
  // push(ref(db, "TheStudent/"), {
  //   StudentName: nameVal,
  //   RollNo: rollVal,
  //   Section: sectionVal,
  //   Gender: genboxVal,
  // });
});

//! get data
getBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const idNumVal = idNum.value;
  get(child(ref(db), "TheStudent/" + idNumVal))
    .then((snapshot) => {
      if (snapshot.exists()) {
        showData.innerHTML = `${snapshot.val().StudentName}`;
      } else {
        alert("no data found");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

//! update data
updateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameVal = name.value;
  const rollVal = roll.value;
  const sectionVal = section.value;
  const idNumVal = idNum.value;
  const genboxVal = genbox.value;
  if (!idNumVal || !nameVal || !rollVal || !sectionVal || !genboxVal) {
    return alert("fill the data first");
  }
  update(ref(db, "TheStudent/" + idNumVal), {
    StudentName: nameVal,
    RollNo: rollVal,
    Section: sectionVal,
    Gender: genboxVal,
  })
    .then(() => {
      alert("data update successfully");
    })
    .catch((err) => {
      alert(`get an error ${err}`);
    });
});

//! delete data
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const idNumVal = idNum.value;
  remove(ref(db, "TheStudent/" + idNumVal))
    .then(() => {
      alert("data delete successfully");
    })
    .catch((err) => {
      alert(`get an error ${err}`);
    });
});

// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   const inputVal = input.value;
//   // set(ref(database, "/user"), inputVal);
//   push(ref(database, "/user"), inputVal);
// });

// showData.addEventListener("click", () => {
//   const refer = ref(database, "/user");
//   onValue(refer, (snapshot) => {
//     const data = snapshot.val();
//     const arr = Object.entries(data);
//   });
// });
