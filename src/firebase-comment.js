import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBqrrOD4MFz2_SPPojrZLfFFmj391yau3M",
//     authDomain: "portfilio-41be0.firebaseapp.com",
//     projectId: "portfilio-41be0",
//     storageBucket: "portfilio-41be0.firebasestorage.app",
//     messagingSenderId: "725390992518",
//     appId: "1:725390992518:web:88e2173d0b26fb8b469d07",
//     measurementId: "G-58VQCQJR84"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAzGEPVCp5Q3qc_1XE5MpTin-awLfU9oQY",
  authDomain: "moe-portfolio-a.firebaseapp.com",
  projectId: "moe-portfolio-a",
  storageBucket: "moe-portfolio-a.firebasestorage.app",
  messagingSenderId: "147414180697",
  appId: "1:147414180697:web:f40bf27f40f740ddd16248"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };