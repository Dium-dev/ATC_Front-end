import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth'; 
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyDBh9aMnhkX9UDRQPeriEvf8XkVnRiqpAg',
  authDomain: 'actualizatucarro-col.firebaseapp.com',
  projectId: 'actualizatucarro-col',
  storageBucket: 'actualizatucarro-col.appspot.com',
  messagingSenderId: '577053605108',
  appId: '1:577053605108:web:6fe82693b77b26bf1df2a1',
  measurementId: 'G-LLGD7XW2W4'
};


// if (!firebase.getApps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)