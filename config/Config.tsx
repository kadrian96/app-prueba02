// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'  //importar libreria de autenticacion
import { getDatabase } from 'firebase/database'
import { getStorage } from 'firebase/storage'
//
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7PW0EIknfiQK_iJt4Lo4CKIqV3RV3lys",
  authDomain: "prueba-km-8aaec.firebaseapp.com",
  projectId: "prueba-km-8aaec",
  storageBucket: "prueba-km-8aaec.appspot.com",
  messagingSenderId: "460467660883",
  appId: "1:460467660883:web:b0941ebce572544753fea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app) //base de datos
//export const auth = getAuth(app) //autenticacion
export const storage = getStorage(app)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});