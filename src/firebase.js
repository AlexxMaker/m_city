import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCgC5SrH2F-c_okBdHBGptRM9KkFdnoh68",
    authDomain: "m-city-6a129.firebaseapp.com",
    databaseURL: "https://m-city-6a129.firebaseio.com",
    projectId: "m-city-6a129",
    storageBucket: "m-city-6a129.appspot.com",
    messagingSenderId: "327788633502"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions')
  const firebaseTeams = firebaseDB.ref('teams')

  export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB
  }

