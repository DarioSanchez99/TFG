import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "@firebase/firestore";

const getFirebaseFirestore = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBakn1OgCcC6-q0ECjJqnfz2MonBkWPOU8",
    authDomain: "rick-morty-tfg.firebaseapp.com",
    projectId: "rick-morty-tfg",
    storageBucket: "rick-morty-tfg.appspot.com",
    messagingSenderId: "975265130939",
    appId: "1:975265130939:web:3024b787fd3d254944fc9e"
  };

  const app = initializeApp(firebaseConfig);
  return getFirestore(app);
};

const save = (correo, password) => {
  const firestore = getFirebaseFirestore();
  const ref = collection(firestore, "login");

  try {
    addDoc(ref, { correo, password});
    console.log("usuario registrado");
  } catch (err) {
    console.log(err);
  }
};

export default save;