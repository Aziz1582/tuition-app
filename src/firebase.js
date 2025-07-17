import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: '<YOUR-API-KEY>',
  authDomain: '<YOUR-PROJECT>.firebaseapp.com',
  projectId: '<YOUR-PROJECT-ID>',
  storageBucket: '<YOUR-PROJECT>.appspot.com',
  messagingSenderId: '<SENDER-ID>',
  appId: '<APP-ID>'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
