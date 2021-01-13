import firebase from "firebase";

export const initFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDNX430heY8As6m7r5uCu4Eqpk8iilm3kE",
        authDomain: "faflix-ee08f.firebaseapp.com",
        projectId: "faflix-ee08f",
        storageBucket: "faflix-ee08f.appspot.com",
        messagingSenderId: "59022142359",
        appId: "1:59022142359:web:91d08baa3890a2726c32d2",
    };
    firebase.initializeApp(firebaseConfig);
};
