import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA2EnDbfRb32E-ZLqCCkNuO6ByNRHEX5hM',
  authDomain: 'disney-3c878.firebaseapp.com',
  projectId: 'disney-3c878',
  storageBucket: 'disney-3c878.appspot.com',
  messagingSenderId: '283201141126',
  appId: '1:283201141126:web:0989a93445f1e13fdc9407',
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
