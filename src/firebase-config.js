import firebase from 'firebase/compat/app'; // Firebase v9 veya sonraki sürümleri için
import 'firebase/compat/auth'; // Firebase Authentication modülü
import 'firebase/compat/firestore'; // Firebase Firestore modülü

// Firebase yapılandırma bilgileri
const firebaseConfig = {
    apiKey: "AIzaSyBA68Ps3PVaQUaCbcvq1NXhZw-y-Kt_hLg",
    authDomain: "articlechainfirebase.firebaseapp.com",
    projectId: "articlechainfirebase",
    storageBucket: "articlechainfirebase.appspot.com",
    messagingSenderId: "174968139743",
    appId: "1:174968139743:web:adf9fa3611d96f616e1e6a"
};

// Firebase uygulamasını başlatma
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Firebase Authentication ve Firestore gibi servisleri kullanmak için referanslar oluşturma
const auth = firebaseApp.auth();
const firestore = firebaseApp.firestore();

export { auth, firestore }; // Dışa aktarma
export default firebase; // Firebase ana nesnesini dışa aktarma