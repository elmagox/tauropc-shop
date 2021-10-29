
import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCyu_90vWmncJEO8Mkzg66n8SPKrMIdsBA",
  authDomain: "tauro-d6c6e.firebaseapp.com",
  projectId: "tauro-d6c6e",
  storageBucket: "tauro-d6c6e.appspot.com",
  messagingSenderId: "60166330980",
  appId: "1:60166330980:web:9792f599ee825d39bf1d71",
  measurementId: "G-6MBSZ14FRZ"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}

