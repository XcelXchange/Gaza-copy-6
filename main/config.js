const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  apiKey: "AIzaSyCJIA60yQhl0epz-EqpZaXRNSnL8KukvlQ",
  authDomain: "james-bond007-1.firebaseapp.com",
  databaseURL: "https://james-bond007-1-default-rtdb.firebaseio.com",
  projectId: "james-bond007-1",
  storageBucket: "james-bond007-1.appspot.com",
  messagingSenderId: "211877448435",
  appId: "1:211877448435:web:d01a8bf0bfd4bb5c1ec586",
  measurementId: "G-VR6FH0GV40"
};
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  