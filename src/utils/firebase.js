import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyApNkw08fUE5Q2MjUbi1LEP-z5cjEGb63g',
  authDomain: 'e-shop-b2b74.firebaseapp.com',
  projectId: 'e-shop-b2b74',
  storageBucket: 'e-shop-b2b74.appspot.com',
  messagingSenderId: '212704069654',
  appId: '1:212704069654:web:3cfba88a6d761e16620d37',
  measurementId: 'G-X477K54XY0'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
