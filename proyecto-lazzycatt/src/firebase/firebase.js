import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPvbf83THkln73rCgBZfVaTZW5RQT22dg",
  authDomain: "lazzy-catt.firebaseapp.com",
  projectId: "lazzy-catt",
  storageBucket: "lazzy-catt.firebasestorage.app",
  messagingSenderId: "826796557548",
  appId: "1:826796557548:web:f6ce50cb0688bfba9e91c9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);