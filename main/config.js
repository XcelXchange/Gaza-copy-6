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
  apiKey: "AIzaSyA_h3rxTPxeLMueIIQGINaW90QaqouZ3RM",
  authDomain: "iron-man3000.firebaseapp.com",
  databaseURL: "https://iron-man3000-default-rtdb.firebaseio.com",
  projectId: "iron-man3000",
  storageBucket: "iron-man3000.appspot.com",
  messagingSenderId: "243109268702",
  appId: "1:243109268702:web:674fe93107f0d032bc864f",
  measurementId: "G-9NE3G0KY6J"
};
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  