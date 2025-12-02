// CONFIGURACIÓN DE FIREBASE (usa tu propio config)
const firebaseConfig = {
  apiKey: "AIzaSyDxl87oXbrBWbX7yiBaPSMzMF6Wn_3pDwM",
  authDomain: "cabrera134-347c2.firebaseapp.com",
  projectId: "cabrera134-347c2",
  storageBucket: "cabrera134-347c2.firebasestorage.app",
  messagingSenderId: "133005322978",
  appId: "1:133005322978:web:5957abcd38667ab92d4cbb",
  measurementId: "G-GK84PTTJ5D"
};

// Iniciar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Verificar si es admin
async function esAdmin(email) {
  const doc = await db.collection("config").doc("admins").get();
  const listaAdmins = doc.data().lista;
  return listaAdmins.includes(email);
}
