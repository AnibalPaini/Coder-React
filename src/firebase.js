// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdu2A8mlhEDzWm4E1vaWAEK8QFosu44Bo",
  authDomain: "camisetas-md.firebaseapp.com",
  projectId: "camisetas-md",
  storageBucket: "camisetas-md.firebasestorage.app",
  messagingSenderId: "472959131362",
  appId: "1:472959131362:web:9d85cff18c96f6df2688bb",
  measurementId: "G-4GKVDN0SVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db= getFirestore(app);

export async function getItem(){
    const querySnapshot= await getDocs(collection(db, "items"))
    querySnapshot.forEach(doc => { console.log(`${doc.id}=> ${doc.data().nombre}`)
        
    });
}