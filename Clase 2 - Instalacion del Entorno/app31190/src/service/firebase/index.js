import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDquOqXvjo9PoXCiCjJ-xO7XfNx5Kck1fQ",
  authDomain: "backendtiendareact.firebaseapp.com",
  projectId: "backendtiendareact",
  storageBucket: "backendtiendareact.appspot.com",
  messagingSenderId: "450237620180",
  appId: "1:450237620180:web:f87e991c3ac89651ae4041"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const collectionsName = {
  products: 'products',
  orders: 'orders',
  categorys: 'categorys'
}