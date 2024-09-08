import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4dWO8BDwzvjlVxUbVaLQRo4Xq9jlPDgE",
  authDomain: "musa-a7bb9.firebaseapp.com",
  projectId: "musa-a7bb9",
  storageBucket: "musa-a7bb9.appspot.com",
  messagingSenderId: "715490961632",
  appId: "1:715490961632:web:2af0530548a47b17964885",
  measurementId: "G-NV3R6LKBTS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export const storage = getStorage(app)