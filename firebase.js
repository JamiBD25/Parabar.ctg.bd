<!-- firebase.js -->
<script type="module">
  // Firebase core
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

  // Firestore
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  // Auth
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  // Firebase configuration (তোমার দেওয়া)
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

  // Services
  const db = getFirestore(app);
  const auth = getAuth(app);

  // Export
  export { db, auth };
</script>