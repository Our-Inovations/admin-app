// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAm8oLZdDG0_kG_DC5AG-4yKbVoOHBN35g',
  authDomain: 'trax-tracking.firebaseapp.com',
  projectId: 'trax-tracking',
  storageBucket: 'trax-tracking.appspot.com',
  messagingSenderId: '111512008256',
  appId: '1:111512008256:web:d5c4f6e33c9317bca2d1a5',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// async function login(email, password) {
//         const user = await signInWithEmailAndPassword(auth, email, password)
//         alert('Successfully LoggedIn')
//         return user
// }

async function addBus(data: any) {
  try {
    await addDoc(collection(db, 'bus'), data);
    alert('Bus Successfully Added');
  } catch (e: any) {
    alert(e.message);
  }
}
async function getBus() {
  const querySnapshot = await getDocs(collection(db, 'bus'));
  const data: any = [];
  querySnapshot.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}

async function deleteBus(idd: any) {
  const docRef = doc(db, 'bus', idd);
  await deleteDoc(docRef);
}

async function addDriver(data: any) {
  try {
    await addDoc(collection(db, 'driver'), data);
    alert('Driver Successfully Added');
  } catch (e: any) {
    alert(e.message);
  }
}
async function getDriver() {
  const querySnapshot = await getDocs(collection(db, 'driver'));
  const data: any = [];
  querySnapshot.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}

async function deleteDriver(idd: any) {
  const docRef = doc(db, 'driver', idd);
  await deleteDoc(docRef);
}

async function addStudent(data: any) {
  try {
    await addDoc(collection(db, 'student'), data);
    alert('Student Successfully Added');
  } catch (e: any) {
    alert(e.message);
  }
}
async function editStudent(data: any, id: any) {
  try {
    const docRef = doc(db, 'student', id);
    await setDoc(docRef, data);
  } catch (e: any) {
    alert(e.message);
  }
}
async function getStudent() {
  const querySnapshot = await getDocs(collection(db, 'student'));
  const data: any = [];
  querySnapshot.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}
async function getStudentFromApp() {
  const querySnapshot = await getDocs(collection(db, 'signupdata'));
  const data: any = [];
  querySnapshot.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}
async function deleteFromApp(idd: any) {
  const docRef = doc(db, 'signupdata', idd);
  await deleteDoc(docRef);
}
async function getStudentByID(idd: any) {
  const querySnapshot = await getDocs(collection(db, 'student', idd));
  const data: any = [];
  querySnapshot.forEach(doc => {
    data.push({ ...doc.data(), id: doc.id });
  });
  return data;
}

async function deleteStudent(idd: any) {
  const docRef = doc(db, 'student', idd);
  await deleteDoc(docRef);
}
export {
  addStudent,
  getStudentByID,
  getStudent,
  deleteStudent,
  addDriver,
  getDriver,
  deleteDriver,
  addBus,
  getBus,
  deleteBus,
  editStudent,
  getStudentFromApp,
  deleteFromApp,
};
