// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore, addDoc, writeBatch   } from "firebase/firestore";

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
  measurementId: "G-4GKVDN0SVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); // Nos vincula con la base de datos


//Funcion para subir la base de datos automaticamente
const products = [
  {
    titulo: "Camiseta Boca JRS",
    categoria: "remera",
    idCat: "1",
    descripcion: "Camiseta titular de CABJ 2024",
    equipo: "Boca Juniors",
    precio: 16000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagen: "/img/boca.jpeg",
    imagenes: ["/img/boca.jpeg", "/img/boca.jpeg"],
    stock: 10,
    ventas: 10,
  },
  {
    titulo: "Camiseta River Plate",
    descripcion: "Camiseta titular de River Plate 2024",
    categoria: "remera",
    idCat: "1",
    equipo: "River Plate",
    precio: 14000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagen: "/img/boca.jpeg",
    imagenes: ["/img/river.jpeg", "/img/river2.jpeg"],
    stock: 10,
    ventas: 1,
  },
  {
    titulo: "Futbol Club Barcelona",
    descripcion: "Camiseta titular de Futbol Club Barcelona 2024",
    categoria: "remera",
    idCat: "1",
    equipo: "FC Barcelona",
    precio: 17000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagen: "/img/boca.jpeg",
    imagenes: ["/img/barcelona.jpeg", "/img/barcelona.jpeg"],
    stock: 10,
    ventas: 5,
  },
  {
    titulo: "Camiseta Chealse",
    descripcion: "Camiseta titular de Chealse 2024",
    categoria: "remera",
    idCat: "1",
    equipo: "Chealse",
    precio: 19000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: ["/img/chealse.jpeg", "/img/chealse.jpeg"],
    stock: 10,
    ventas: 13,
  },
  {
    titulo: "Camiseta Argentina",
    descripcion: "Camiseta titular de Argentina 2024",
    categoria: "remera",
    idCat: "1",
    equipo: "Argentina",
    precio: 15000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: ["/img/arg.jpeg", "/img/arg.jpeg"],
    stock: 10,
    ventas: 3,
  },
  {
    titulo: "Camiseta Argentina Alternativa",
    descripcion: "Camiseta titular de Argentina Alternativa 2024",
    categoria: "remera",
    idCat: "1",
    equipo: "Argentina",
    precio: 15000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: ["/img/arg2.jpeg", "/img/arg2.jpeg"],
    stock: 10,
    ventas: 7,
  },
  {
    titulo: "Camiseta Tottenham",
    descripcion: "Camiseta titular de Tottenham 2024",
    categoria: "remera",
    idCat: "1",
    equipo: "Tottenham",
    precio: 15000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: ["/img/tottenham.jpeg", "/img/tottenham.jpeg"],
    stock: 10,
    ventas: 1,
  },
  {
    titulo: "Camiseta Boca JRS Retro 2010",
    descripcion: "Camiseta titular de Boca JRS Retro Roman 2010",
    categoria: "remera",
    idCat: "1",
    equipo: "Boca Juniors",
    precio: 15000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: ["/img/bocaretro.jpeg", "/img/bocaretro.jpeg"],
    stock: 10,
    ventas: 8,
  },
  {
    titulo: "Camiseta River Plate Retro 97",
    descripcion: "Camiseta titular de River Plate Retro 97",
    categoria: "remera",
    idCat: "1",
    equipo: "River Plate",
    precio: 15000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: ["/img/river2.jpeg", "/img/river2.jpeg"],
    stock: 10,
    ventas: 1,
  },
  {
    titulo: "Camiseta Manchester United",
    descripcion: "Camiseta titular de Manchester United 2024",
    categoria: "remera",
    idCat: "1",
    equipo: "Manchester United",
    precio: 15000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: ["/img/manuni.jpeg", "/img/manuni.jpeg"],
    stock: 10,
    ventas: 1,
  },
  {
    titulo: "Musculosa CABJ",
    descripcion: "Musculosa CABJ 2024",
    categoria: "musculosa",
    idCat: "2",
    equipo: "Boca Juniors",
    precio: 15000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: [
      "https://mlu93kguowft.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://indumentarialegolf.com/wp-content/uploads/2024/11/IMG_20241031_124941-scaled.jpg",
      "/img/manuni.jpeg",
    ],
    stock: 10,
    ventas: 1,
  },
  {
    titulo: "Bermuda CABJ",
    descripcion: "Bermuda CABJ 2024",
    categoria: "bermuda",
    idCat: "3",
    equipo: "Boca Juniors",
    precio: 15000,
    talles: ["s", "m", "l", "xl", "xxl"],
    imagenes: [
      "https://nubishops.com.ar/tools/thumb.php?im=https://d3ugyf2ht6aenh.cloudfront.net/stores/001/613/085/products/imagen-de-whatsapp-2023-05-26-a-las-11-48-5598798798798711-7d55c3c8bb8a59ff9616851127795743-1024-1024.webp",
      "/img/manuni.jpeg",
    ],
    stock: 10,
    ventas: 1,
  },
];



