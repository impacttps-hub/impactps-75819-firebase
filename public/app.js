import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import firebaseConfig from "./firebaseConfig.js";

// Inicialización de Firebase
let app, db;
const statusBubble = document.getElementById("status-bubble");
const statusTitle = document.getElementById("status-title");
const statusMsg = document.getElementById("status-msg");
const btnTest = document.getElementById("btn-test");

const checkConnection = async () => {
    if (firebaseConfig.apiKey === "TU_API_KEY_AQUI") {
        statusMsg.innerText = "Sigue faltando la API KEY en firebaseConfig.js";
        return;
    }

    try {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        
        statusBubble.classList.add("online");
        statusTitle.innerText = "Estado: Conectado!";
        statusMsg.innerText = "Firebase impactps-75819 activo.";
        
        console.log("Firebase conectado correctamente.");
    } catch (e) {
        console.error("Error conectando Firebase:", e);
        statusTitle.innerText = "Error!";
        statusMsg.innerText = "Hubo un fallo en la conexión.";
    }
};

btnTest.addEventListener("click", () => {
    checkConnection();
});

// Auto-verificación
window.onload = () => {
    if (firebaseConfig.apiKey !== "TU_API_KEY_AQUI") {
        checkConnection();
    }
};
