const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('#nav-menu ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.classList.toggle('active'); // হ্যামবার্গার X এনিমেশন
});
import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', async () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Firestore থেকে Role বের করা
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
      const role = docSnap.data().role;
      if(role === "admin"){
        window.location.href = "admin.html";  // Admin Dashboard
      } else if(role === "student"){
        window.location.href = "student.html"; // Student Dashboard
      } else {
        alert("Role not defined!");
      }
    } else {
      alert("User document not found in Firestore!");
    }

  } catch(error) {
    alert(error.message);
  }
});