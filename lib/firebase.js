// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import firebase, { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDOrkLJzWb9HtcgLpi5ghQNjFezUrD6aAo',
  authDomain: 'portfolio-2e9fa.firebaseapp.com',
  projectId: 'portfolio-2e9fa',
  storageBucket: 'portfolio-2e9fa.appspot.com',
  messagingSenderId: '395582645099',
  appId: '1:395582645099:web:181f03d01110593ae5e22e',
  measurementId: 'G-R2ZVJER9B6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// initialize Database
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const timestamp = new Date();

export const getImages = async () => {
  let images = [];
  const imagesRef = collection(db, 'images');
  const q = query(imagesRef, orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const document = doc.data();
    images.push(document);
  });
  return images;
};

export const getProjects = async () => {
  let projects = [];
  const querySnapshot = await getDocs(collection(db, 'projects'));
  querySnapshot.forEach((doc) => {
    const document = doc.data();
    projects.push(document);
  });
  return projects;
};
