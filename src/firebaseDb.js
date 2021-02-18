import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAywSJMAOyH-Y32zH-qCiB7LyvWxOladF0',
  authDomain: 'my-subscriptions-af3d9.firebaseapp.com',
  projectId: 'my-subscriptions-af3d9',
  storageBucket: 'my-subscriptions-af3d9.appspot.com',
  messagingSenderId: '138195317195',
  appId: '1:138195317195:web:3c55a2edc23970a84f064e'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
