import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyC9PP5zYkP9yhahnk_quaEw0Ha-qTr8cC8",
    authDomain: "linkedin-clone-yt-d7a15.firebaseapp.com",
    projectId: "linkedin-clone-yt-d7a15",
    storageBucket: "linkedin-clone-yt-d7a15.appspot.com",
    messagingSenderId: "590325752248",
    appId: "1:590325752248:web:e0edd400707752bcfdef4d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
// export default firebase;
