import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDVkT-qUs9UkS6SBm5l-VDh_F0gRFAbPGY",
    authDomain: "react-d8dbb.firebaseapp.com",
    projectId: "react-d8dbb",
    storageBucket: "react-d8dbb.appspot.com",
    messagingSenderId: "75158468112",
    appId: "1:75158468112:web:a4ae81b7c168bdaa967c95"
};

const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app)

export async function getItems(){
  const discosRef = collection(dataBase, "discos") //creo referencia a la coleccion deseada
  const dicoSnap = await getDocs(discosRef) //pido los docs
    const documents = dicoSnap.docs

    const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() }
})
    return docsData;
}

export async function getSingleItem(idURL){
    const docRef = doc(dataBase, "discos", idURL)
    const docSnap = await getDoc(docRef)

    return { id: docSnap.id, ...docSnap.data() }

}

export async function createOrder(order) {
    const collectionOrdersRef = collection(dataBase, "orders")
    console.log("referencia: ", collectionOrdersRef)
    console.log("orden", order)
    const response = await addDoc(collectionOrdersRef, order);
    console.log("respuesta",response)
    return response.id; 
}
