// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// তোমার Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAzsAlg4MYpRODqZhdxjYlCCX16dq1b-uw",
  authDomain: "student-fee-system.firebaseapp.com",
  projectId: "student-fee-system",
  storageBucket: "student-fee-system.firebasestorage.app",
  messagingSenderId: "110170819904",
  appId: "1:110170819904:web:22ff3d4348c1aed43b3ea5",
  measurementId: "G-6CRV45KB3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
