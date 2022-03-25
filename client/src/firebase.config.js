import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBY2OM3f-8sjVSex_QXmNVMdTI7lUGu3ss",
  authDomain: "doc-portal-backend.firebaseapp.com",
  projectId: "doc-portal-backend",
  storageBucket: "doc-portal-backend.appspot.com",
  messagingSenderId: "563708557471",
  appId: "1:563708557471:web:9dc3260c2a04bfcef84aaa"
};

export const app = initializeApp(firebaseConfig);